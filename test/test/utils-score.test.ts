import { calculateScore, getStrengthLevel } from '@kaffee/mazagran/utils/score';
import type { ValidationRule, ScoreConfig } from '@kaffee/mazagran';

describe('getStrengthLevel', () => {
  test('returns weak for score below 40', () => {
    expect(getStrengthLevel(0)).toBe('weak');
    expect(getStrengthLevel(20)).toBe('weak');
    expect(getStrengthLevel(39)).toBe('weak');
  });

  test('returns fair for score 40-59', () => {
    expect(getStrengthLevel(40)).toBe('fair');
    expect(getStrengthLevel(50)).toBe('fair');
    expect(getStrengthLevel(59)).toBe('fair');
  });

  test('returns good for score 60-79', () => {
    expect(getStrengthLevel(60)).toBe('good');
    expect(getStrengthLevel(70)).toBe('good');
    expect(getStrengthLevel(79)).toBe('good');
  });

  test('returns strong for score 80 and above', () => {
    expect(getStrengthLevel(80)).toBe('strong');
    expect(getStrengthLevel(90)).toBe('strong');
    expect(getStrengthLevel(100)).toBe('strong');
  });
});

describe('calculateScore', () => {
  const mockRules: ValidationRule[] = [
    { type: 'PASSWORD_LENGTH', check: () => true, errorKey: 'PASSWORD_LENGTH_ERR' },
    { type: 'CONTAIN_DIGIT', check: () => true, errorKey: 'NOT_CONTAIN_DIGIT' },
    { type: 'CASE', check: () => true, errorKey: 'NOT_CONTAIN_CASE' }
  ];

  test('calculates score with default weights', () => {
    const config: ScoreConfig = { enabled: true };
    const score = calculateScore(['PASSWORD_LENGTH', 'CONTAIN_DIGIT'], mockRules, config);
    // Total weight: 20 + 10 + 10 = 40
    // Earned weight: 20 + 10 = 30
    // Score: (30/40) * 100 = 75
    expect(score).toBe(75);
  });

  test('calculates score with custom weights', () => {
    const config: ScoreConfig = {
      enabled: true,
      weights: { PASSWORD_LENGTH: 50, CONTAIN_DIGIT: 30 }
    };
    const score = calculateScore(['PASSWORD_LENGTH'], mockRules, config);
    // Total weight: 50 + 30 + 10 = 90
    // Earned weight: 50
    // Score: (50/90) * 100 ≈ 56
    expect(score).toBe(56);
  });

  test('calculates score with custom maxScore', () => {
    const config: ScoreConfig = { enabled: true, maxScore: 200 };
    const score = calculateScore(['PASSWORD_LENGTH', 'CONTAIN_DIGIT', 'CASE'], mockRules, config);
    // Total weight: 20 + 10 + 10 = 40
    // Earned weight: 20 + 10 + 10 = 40
    // Score: (40/40) * 200 = 200
    expect(score).toBe(200);
  });

  test('returns 0 when no rules pass', () => {
    const config: ScoreConfig = { enabled: true };
    const score = calculateScore([], mockRules, config);
    expect(score).toBe(0);
  });

  test('returns maxScore when all rules pass', () => {
    const config: ScoreConfig = { enabled: true };
    const score = calculateScore(['PASSWORD_LENGTH', 'CONTAIN_DIGIT', 'CASE'], mockRules, config);
    expect(score).toBe(100);
  });

  test('handles rule with custom weight property', () => {
    const rulesWithWeight: ValidationRule[] = [
      { type: 'CUSTOM_RULE', check: () => true, errorKey: 'CUSTOM_ERR', weight: 30 }
    ];
    const config: ScoreConfig = { enabled: true };
    const score = calculateScore(['CUSTOM_RULE'], rulesWithWeight, config);
    expect(score).toBe(100);
  });

  test('falls back to default weight of 10 for unknown rules', () => {
    const rulesWithUnknown: ValidationRule[] = [
      { type: 'UNKNOWN_RULE', check: () => true, errorKey: 'UNKNOWN_ERR' }
    ];
    const config: ScoreConfig = { enabled: true };
    const score = calculateScore(['UNKNOWN_RULE'], rulesWithUnknown, config);
    expect(score).toBe(100);
  });
});

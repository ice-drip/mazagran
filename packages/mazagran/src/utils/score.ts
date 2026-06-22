import type { StrengthLevel, ScoreConfig, ValidationRule } from '../types';

/**
 * 默认规则权重
 */
const DEFAULT_WEIGHTS: Record<string, number> = {
  PASSWORD_LENGTH: 20,
  CONTAIN_DIGIT: 10,
  CASE: 10,
  LOWER_CASE: 5,
  UPPER_CASE: 5,
  SPECIAL_CHAR: 15,
  HORIZONTAL_KEY_SEQUENTIAL: 10,
  SLANT_KEY_SEQUENTIAL: 10,
  LOGIC_SEQUENTIAL: 10,
  SEQUENTIAL_CHAR_SAME: 5
};

/**
 * 计算密码强度评分
 */
export function calculateScore(
  passedRules: readonly string[],
  allRules: readonly ValidationRule[],
  config: ScoreConfig
): number {
  const maxScore = config.maxScore ?? 100;

  const totalWeight = allRules.reduce((sum, rule) => {
    const weight = config.weights?.[rule.type] ?? rule.weight ?? DEFAULT_WEIGHTS[rule.type] ?? 10;
    return sum + weight;
  }, 0);

  const earnedWeight = passedRules.reduce((sum, ruleKey) => {
    const rule = allRules.find(r => r.type === ruleKey);
    const weight = config.weights?.[ruleKey] ?? rule?.weight ?? DEFAULT_WEIGHTS[ruleKey] ?? 10;
    return sum + weight;
  }, 0);

  return Math.round((earnedWeight / totalWeight) * maxScore);
}

/**
 * 获取强度等级
 */
export function getStrengthLevel(score: number): StrengthLevel {
  if (score < 40) return 'weak';
  if (score < 60) return 'fair';
  if (score < 80) return 'good';
  return 'strong';
}

import type {
  CheckType,
  ErrType,
  MazagranConfig,
  ResolvedConfig,
  ValidationRule,
  CheckResult,
  ValidationResult
} from './types';
import { builtinRules } from './rules';
import { getMessages } from './locales';
import { calculateScore, getStrengthLevel } from './utils/score';

/**
 * 默认配置
 */
const DEFAULT_CONFIG: ResolvedConfig = {
  minLength: 8,
  maxLength: 20,
  specialChars: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
  locale: 'zh',
  limitHorizontalNumKey: 3,
  limitSlopeNumKey: 3,
  limitLogicNumChar: 3,
  limitNumSameChar: 3,
  keyboardHorizontalArr: [
    '`1234567890-=',
    '~!@#$%^&*()_+',
    'qwertyuiop[]\\',
    'qwertyuiop{}|',
    "asdfghjkl;'",
    'asdfghjkl;"',
    'zxcvbnM<>?',
    'zxcvbnm,./'
  ],
  keyboardSlopeArr: [
    '1qaz', '!qaz', '2wsx', '@wsx', '3edc', '#edc',
    '4rfv', '$rfv', '5tgb', '%tgb', '6yhn', '^yhn',
    '7ujm', '&ujm', '8ik,', '*ik,', '9ol.', '(ol.',
    '0p;/', ')P:?', '=[;.', '+[;.', '-pl,', '_pl,',
    '0okm', ')okm', '9ijn', '(ijn', '8uhb', '*uhb',
    '7ygv', '&ygv', '6tfc', '^tfc', '5rdx', '%rdx',
    '4esz', '$esz'
  ],
  keyboardLogicArr: [
    'abcdefghijklmnopqrstuvwxyz',
    'zyxwvutsrqponmlkjihgfedcba',
    '01234567890',
    '9876543210',
    '147258369'
  ]
};

/**
 * Mazagran 密码强度验证器
 */
export class Mazagran {
  private config: ResolvedConfig;
  private enabledChecks: Set<string>;
  private customRules: Map<string, ValidationRule> = new Map();
  private allRules: ValidationRule[];
  private scoreConfig?: { enabled: boolean; maxScore?: number; weights?: Partial<Record<string, number>> };

  constructor(config?: MazagranConfig) {
    this.config = { ...DEFAULT_CONFIG, ...this.normalizeConfig(config) };
    this.enabledChecks = new Set(
      config?.checks?.map(c => c as string) ?? builtinRules.map(r => r.type)
    );
    this.allRules = [...builtinRules];
    this.scoreConfig = config?.score;
  }

  private normalizeConfig(config?: MazagranConfig): Partial<ResolvedConfig> {
    if (!config) return {};

    return {
      ...(config.minLength !== undefined && { minLength: config.minLength }),
      ...(config.maxLength !== undefined && { maxLength: config.maxLength }),
      ...(config.specialChars !== undefined && { specialChars: config.specialChars })
    };
  }

  /**
   * 注册自定义验证规则
   */
  registerRule(rule: ValidationRule): this {
    this.customRules.set(rule.type, rule);
    this.allRules = [...builtinRules, ...this.customRules.values()];
    return this;
  }

  /**
   * 批量注册规则
   */
  registerRules(rules: ValidationRule[]): this {
    rules.forEach(rule => this.registerRule(rule));
    return this;
  }

  /**
   * 移除自定义规则
   */
  removeRule(type: string): this {
    this.customRules.delete(type);
    this.allRules = [...builtinRules, ...this.customRules.values()];
    return this;
  }

  /**
   * 执行所有检查
   */
  checkAll(password: string): CheckResult {
    const errors: ErrType[] = [];
    const passes: ErrType[] = [];
    const messages: Record<string, string> = {};

    const localeMessages = getMessages(this.config.locale);

    for (const rule of this.allRules) {
      if (!this.enabledChecks.has(rule.type)) continue;

      const passed = rule.check(password, this.config);

      if (passed) {
        passes.push(rule.errorKey as ErrType);
      } else {
        errors.push(rule.errorKey as ErrType);
      }

      const msg = localeMessages[rule.errorKey];
      if (msg) {
        messages[rule.errorKey] = passed ? msg.pass : msg.fail;
      }
    }

    const result: CheckResult = { errors, passes, messages };

    if (this.scoreConfig?.enabled) {
      const score = calculateScore(
        passes.map(p => p as string),
        this.allRules,
        this.scoreConfig
      );
      return { ...result, score, level: getStrengthLevel(score) };
    }

    return result;
  }

  /**
   * 快速验证（静态方法）
   */
  static validate(password: string, config?: MazagranConfig): ValidationResult {
    const mazagran = new Mazagran(config);
    const result = mazagran.checkAll(password);
    return {
      valid: result.errors.length === 0,
      result
    };
  }
}

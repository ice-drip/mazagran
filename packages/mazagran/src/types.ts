/**
 * 密码检查类型枚举
 */
export const enum CheckType {
  PasswordLength = 'PASSWORD_LENGTH',
  ContainDigit = 'CONTAIN_DIGIT',
  Case = 'CASE',
  LowerCase = 'LOWER_CASE',
  UpperCase = 'UPPER_CASE',
  SpecialChar = 'SPECIAL_CHAR',
  HorizontalKeySequential = 'HORIZONTAL_KEY_SEQUENTIAL',
  SlantKeySequential = 'SLANT_KEY_SEQUENTIAL',
  LogicSequential = 'LOGIC_SEQUENTIAL',
  SequentialCharSame = 'SEQUENTIAL_CHAR_SAME'
}

/**
 * 错误类型枚举
 */
export const enum ErrType {
  PasswordLengthErr = 'PASSWORD_LENGTH_ERR',
  NotContainDigit = 'NOT_CONTAIN_DIGIT',
  NotContainCase = 'NOT_CONTAIN_CASE',
  NotContainLowerCase = 'NOT_CONTAIN_LOWER_CASE',
  NotContainUpperCase = 'NOT_CONTAIN_UPPER_CASE',
  NotContainSpecialChar = 'NOT_CONTAIN_SPECIAL_CHAR',
  HasKeyboardSequential = 'HAS_KEYBOARD_SEQUENTIAL',
  HasKeyboardSlant = 'HAS_KEYBOARD_SLANT',
  HasSequentialChar = 'HAS_SEQUENTIAL_CHAR',
  HasSequentialSameChar = 'HAS_SEQUENTIAL_SAME_CHAR'
}

/**
 * 强度等级
 */
export type StrengthLevel = 'weak' | 'fair' | 'good' | 'strong';

/**
 * 语言包消息结构
 */
export interface LocaleMessages {
  readonly [key: string]: {
    readonly pass: string;
    readonly fail: string;
  };
}

/**
 * 评分配置
 */
export interface ScoreConfig {
  readonly enabled: boolean;
  readonly maxScore?: number;
  readonly weights?: Partial<Record<string, number>>;
}

/**
 * Mazagran 配置
 */
export interface MazagranConfig {
  readonly checks?: readonly CheckType[];
  readonly minLength?: number;
  readonly maxLength?: number;
  readonly specialChars?: string;
  readonly locale?: 'zh' | 'en' | string;
  readonly customMessages?: Partial<Record<string, LocaleMessages>>;
  readonly score?: ScoreConfig;
}

/**
 * 解析后的配置（内部使用）
 */
export interface ResolvedConfig {
  readonly minLength: number;
  readonly maxLength: number;
  readonly specialChars: string;
  readonly locale: string;
  readonly limitHorizontalNumKey: number;
  readonly limitSlopeNumKey: number;
  readonly limitLogicNumChar: number;
  readonly limitNumSameChar: number;
  readonly keyboardHorizontalArr: readonly string[];
  readonly keyboardSlopeArr: readonly string[];
  readonly keyboardLogicArr: readonly string[];
}

/**
 * 验证规则接口
 */
export interface ValidationRule {
  readonly type: string;
  readonly check: (password: string, config: ResolvedConfig) => boolean;
  readonly errorKey: ErrType | string;
  readonly weight?: number;
}

/**
 * 检查结果
 */
export interface CheckResult {
  readonly errors: readonly ErrType[];
  readonly passes: readonly ErrType[];
  readonly score?: number;
  readonly level?: StrengthLevel;
  readonly messages?: Record<string, string>;
}

/**
 * 验证结果
 */
export interface ValidationResult {
  readonly valid: boolean;
  readonly result: CheckResult;
}

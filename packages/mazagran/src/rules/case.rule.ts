import type { ValidationRule } from '../types';
import { CheckType, ErrType } from '../types';

/**
 * 字母包含验证规则
 */
export const caseRule: ValidationRule = {
  type: CheckType.Case,
  check: (password: string): boolean => /[a-zA-Z]/.test(password),
  errorKey: ErrType.NotContainCase,
  weight: 10
};

/**
 * 小写字母包含验证规则
 */
export const lowerCaseRule: ValidationRule = {
  type: CheckType.LowerCase,
  check: (password: string): boolean => /[a-z]/.test(password),
  errorKey: ErrType.NotContainLowerCase,
  weight: 5
};

/**
 * 大写字母包含验证规则
 */
export const upperCaseRule: ValidationRule = {
  type: CheckType.UpperCase,
  check: (password: string): boolean => /[A-Z]/.test(password),
  errorKey: ErrType.NotContainUpperCase,
  weight: 5
};

import type { ValidationRule } from '../types';
import { CheckType, ErrType } from '../types';

/**
 * 数字包含验证规则
 */
export const digitRule: ValidationRule = {
  type: CheckType.ContainDigit,
  check: (password: string): boolean => /\d/.test(password),
  errorKey: ErrType.NotContainDigit,
  weight: 10
};

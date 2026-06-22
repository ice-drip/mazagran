import type { ValidationRule, ResolvedConfig } from '../types';
import { CheckType, ErrType } from '../types';

/**
 * 特殊字符包含验证规则
 */
export const specialRule: ValidationRule = {
  type: CheckType.SpecialChar,
  check: (password: string, config: ResolvedConfig): boolean => {
    return password.split('').some(char => config.specialChars.includes(char));
  },
  errorKey: ErrType.NotContainSpecialChar,
  weight: 15
};

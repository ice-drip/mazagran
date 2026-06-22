import type { ValidationRule, ResolvedConfig } from '../types';
import { CheckType, ErrType } from '../types';

/**
 * 密码长度验证规则
 */
export const lengthRule: ValidationRule = {
  type: CheckType.PasswordLength,
  check: (password: string, config: ResolvedConfig): boolean => {
    return password.length >= config.minLength && password.length <= config.maxLength;
  },
  errorKey: ErrType.PasswordLengthErr,
  weight: 20
};

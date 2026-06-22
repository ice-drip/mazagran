import type { ValidationRule, ResolvedConfig } from '../types';
import { CheckType, ErrType } from '../types';
import { reverseString, unique, createSubstrings } from '../utils/string';

/**
 * 键盘横向连续验证规则
 */
export const horizontalKeyboardRule: ValidationRule = {
  type: CheckType.HorizontalKeySequential,
  check: (password: string, config: ResolvedConfig): boolean => {
    const lower = password.toLowerCase();
    const patterns = [
      ...config.keyboardHorizontalArr,
      ...config.keyboardHorizontalArr.map(reverseString)
    ];
    const substrings = unique(
      patterns.flatMap(str => createSubstrings(str, config.limitHorizontalNumKey))
    );
    return !substrings.some(str => lower.includes(str));
  },
  errorKey: ErrType.HasKeyboardSequential,
  weight: 10
};

/**
 * 键盘斜向连续验证规则
 */
export const slantKeyboardRule: ValidationRule = {
  type: CheckType.SlantKeySequential,
  check: (password: string, config: ResolvedConfig): boolean => {
    const lower = password.toLowerCase();
    const patterns = [
      ...config.keyboardSlopeArr,
      ...config.keyboardSlopeArr.map(reverseString)
    ];
    const substrings = unique(
      patterns.flatMap(str => createSubstrings(str, config.limitSlopeNumKey))
    );
    return !substrings.some(str => lower.includes(str));
  },
  errorKey: ErrType.HasKeyboardSlant,
  weight: 10
};

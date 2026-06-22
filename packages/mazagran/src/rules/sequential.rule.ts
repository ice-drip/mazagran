import type { ValidationRule, ResolvedConfig } from '../types';
import { CheckType, ErrType } from '../types';
import { unique, createSubstrings } from '../utils/string';

/**
 * 逻辑连续字符验证规则
 */
export const logicSequentialRule: ValidationRule = {
  type: CheckType.LogicSequential,
  check: (password: string, config: ResolvedConfig): boolean => {
    const lower = password.toLowerCase();
    const substrings = unique(
      config.keyboardLogicArr.flatMap(str => createSubstrings(str, config.limitLogicNumChar))
    );
    return !substrings.some(str => lower.includes(str));
  },
  errorKey: ErrType.HasSequentialChar,
  weight: 10
};

/**
 * 连续相同字符验证规则
 */
export const sameCharRule: ValidationRule = {
  type: CheckType.SequentialCharSame,
  check: (password: string, config: ResolvedConfig): boolean => {
    const limit = config.limitNumSameChar - 1;
    const chars = password.toLowerCase().split('');
    let sameLength = 0;
    let nowChar = '';

    for (const char of chars) {
      if (nowChar === char) {
        sameLength++;
        if (sameLength === limit) return false;
      } else {
        nowChar = char;
        sameLength = 0;
      }
    }
    return true;
  },
  errorKey: ErrType.HasSequentialSameChar,
  weight: 5
};

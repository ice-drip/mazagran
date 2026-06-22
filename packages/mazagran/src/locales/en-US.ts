import type { LocaleMessages } from '../types';

export const enUS: LocaleMessages = {
  PASSWORD_LENGTH_ERR: {
    pass: 'Password length is valid',
    fail: 'Password length is invalid'
  },
  NOT_CONTAIN_DIGIT: {
    pass: 'Contains digit',
    fail: 'Must contain digit'
  },
  NOT_CONTAIN_CASE: {
    pass: 'Contains letter',
    fail: 'Must contain letter'
  },
  NOT_CONTAIN_LOWER_CASE: {
    pass: 'Contains lowercase letter',
    fail: 'Must contain lowercase letter'
  },
  NOT_CONTAIN_UPPER_CASE: {
    pass: 'Contains uppercase letter',
    fail: 'Must contain uppercase letter'
  },
  NOT_CONTAIN_SPECIAL_CHAR: {
    pass: 'Contains special character',
    fail: 'Must contain special character'
  },
  HAS_KEYBOARD_SEQUENTIAL: {
    pass: 'No horizontal keyboard sequence',
    fail: 'Contains horizontal keyboard sequence'
  },
  HAS_KEYBOARD_SLANT: {
    pass: 'No slant keyboard sequence',
    fail: 'Contains slant keyboard sequence'
  },
  HAS_SEQUENTIAL_CHAR: {
    pass: 'No logical sequence',
    fail: 'Contains logical sequence'
  },
  HAS_SEQUENTIAL_SAME_CHAR: {
    pass: 'No repeated characters',
    fail: 'Contains repeated characters'
  }
};

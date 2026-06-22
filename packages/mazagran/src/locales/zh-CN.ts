import type { LocaleMessages } from '../types';

export const zhCN: LocaleMessages = {
  PASSWORD_LENGTH_ERR: {
    pass: '口令长度正确',
    fail: '口令长度不正确'
  },
  NOT_CONTAIN_DIGIT: {
    pass: '口令中包含数字',
    fail: '口令中不包含数字'
  },
  NOT_CONTAIN_CASE: {
    pass: '口令中包含字母',
    fail: '口令中不包含字母'
  },
  NOT_CONTAIN_LOWER_CASE: {
    pass: '口令中包含小写字母',
    fail: '口令中不包含小写字母'
  },
  NOT_CONTAIN_UPPER_CASE: {
    pass: '口令中包含大写字母',
    fail: '口令中不包含大写字母'
  },
  NOT_CONTAIN_SPECIAL_CHAR: {
    pass: '口令中包含特殊字符',
    fail: '口令中不包含特殊字符'
  },
  HAS_KEYBOARD_SEQUENTIAL: {
    pass: '口令中不包含键盘横向字符',
    fail: '口令中包含键盘横向字符'
  },
  HAS_KEYBOARD_SLANT: {
    pass: '口令中不包含键盘斜向字符',
    fail: '口令中包含键盘斜向字符'
  },
  HAS_SEQUENTIAL_CHAR: {
    pass: '口令中不包含逻辑连续字符',
    fail: '口令中包含逻辑连续字符'
  },
  HAS_SEQUENTIAL_SAME_CHAR: {
    pass: '口令中不包含连续相同字符',
    fail: '口令中包含连续相同字符'
  }
};

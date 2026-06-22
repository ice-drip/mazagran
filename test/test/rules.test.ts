import { lengthRule } from '@kaffee/mazagran/rules/length.rule';
import { digitRule } from '@kaffee/mazagran/rules/digit.rule';
import { caseRule, lowerCaseRule, upperCaseRule } from '@kaffee/mazagran/rules/case.rule';
import { specialRule } from '@kaffee/mazagran/rules/special.rule';
import { horizontalKeyboardRule, slantKeyboardRule } from '@kaffee/mazagran/rules/keyboard.rule';
import { logicSequentialRule, sameCharRule } from '@kaffee/mazagran/rules/sequential.rule';
import { builtinRules, findRule } from '@kaffee/mazagran/rules/index';

const defaultConfig = {
  minLength: 8,
  maxLength: 20,
  specialChars: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
  locale: 'zh-CN',
  limitHorizontalNumKey: 3,
  limitSlopeNumKey: 3,
  limitLogicNumChar: 3,
  limitNumSameChar: 3,
  keyboardHorizontalArr: ["`1234567890-=", "qwertyuiop[]\\", "asdfghjkl;'", "zxcvbnm,./"],
  keyboardSlopeArr: ["1qaz", "2wsx", "3edc", "4rfv", "5tgb"],
  keyboardLogicArr: ["abcdefghijklmnopqrstuvwxyz", "01234567890"]
};

describe('Length Rule', () => {
  test('should pass for valid length', () => {
    expect(lengthRule.check('password', defaultConfig)).toBe(true);
  });

  test('should fail for too short password', () => {
    expect(lengthRule.check('short', defaultConfig)).toBe(false);
  });

  test('should fail for too long password', () => {
    expect(lengthRule.check('a'.repeat(21), defaultConfig)).toBe(false);
  });

  test('should pass for exact min length', () => {
    expect(lengthRule.check('12345678', defaultConfig)).toBe(true);
  });

  test('should pass for exact max length', () => {
    expect(lengthRule.check('a'.repeat(20), defaultConfig)).toBe(true);
  });

  test('should have correct type', () => {
    expect(lengthRule.type).toBe('PASSWORD_LENGTH');
  });

  test('should have correct error key', () => {
    expect(lengthRule.errorKey).toBe('PASSWORD_LENGTH_ERR');
  });
});

describe('Digit Rule', () => {
  test('should pass when password contains digit', () => {
    expect(digitRule.check('password123', defaultConfig)).toBe(true);
  });

  test('should fail when password has no digits', () => {
    expect(digitRule.check('password', defaultConfig)).toBe(false);
  });

  test('should pass for password with only digits', () => {
    expect(digitRule.check('12345678', defaultConfig)).toBe(true);
  });

  test('should have correct type', () => {
    expect(digitRule.type).toBe('CONTAIN_DIGIT');
  });
});

describe('Case Rule', () => {
  test('should pass when password contains letters', () => {
    expect(caseRule.check('password123', defaultConfig)).toBe(true);
  });

  test('should fail when password has no letters', () => {
    expect(caseRule.check('12345678', defaultConfig)).toBe(false);
  });

  test('should pass for mixed case', () => {
    expect(caseRule.check('Password123', defaultConfig)).toBe(true);
  });
});

describe('Lower Case Rule', () => {
  test('should pass when password contains lowercase', () => {
    expect(lowerCaseRule.check('password123', defaultConfig)).toBe(true);
  });

  test('should fail when password has no lowercase', () => {
    expect(lowerCaseRule.check('PASSWORD123', defaultConfig)).toBe(false);
  });
});

describe('Upper Case Rule', () => {
  test('should pass when password contains uppercase', () => {
    expect(upperCaseRule.check('Password123', defaultConfig)).toBe(true);
  });

  test('should fail when password has no uppercase', () => {
    expect(upperCaseRule.check('password123', defaultConfig)).toBe(false);
  });
});

describe('Special Char Rule', () => {
  test('should pass when password contains special char', () => {
    expect(specialRule.check('password!', defaultConfig)).toBe(true);
  });

  test('should fail when password has no special chars', () => {
    expect(specialRule.check('password123', defaultConfig)).toBe(false);
  });

  test('should pass for various special chars', () => {
    expect(specialRule.check('pass@word', defaultConfig)).toBe(true);
    expect(specialRule.check('pass#word', defaultConfig)).toBe(true);
    expect(specialRule.check('pass$word', defaultConfig)).toBe(true);
  });
});

describe('Horizontal Keyboard Rule', () => {
  test('should fail for horizontal keyboard sequence', () => {
    expect(horizontalKeyboardRule.check('qwer1234', defaultConfig)).toBe(false);
  });

  test('should pass for non-sequential password', () => {
    expect(horizontalKeyboardRule.check('axbycz12', defaultConfig)).toBe(true);
  });

  test('should detect reverse sequences', () => {
    expect(horizontalKeyboardRule.check('rewq4321', defaultConfig)).toBe(false);
  });
});

describe('Slant Keyboard Rule', () => {
  test('should fail for slant keyboard sequence', () => {
    expect(slantKeyboardRule.check('1qaz2wsx', defaultConfig)).toBe(false);
  });

  test('should pass for non-sequential password', () => {
    expect(slantKeyboardRule.check('axbycz12', defaultConfig)).toBe(true);
  });
});

describe('Logic Sequential Rule', () => {
  test('should fail for logic sequence abc', () => {
    expect(logicSequentialRule.check('abc12345', defaultConfig)).toBe(false);
  });

  test('should fail for logic sequence 123', () => {
    expect(logicSequentialRule.check('password123', defaultConfig)).toBe(false);
  });

  test('should pass for non-sequential password', () => {
    expect(logicSequentialRule.check('axbycz12', defaultConfig)).toBe(true);
  });
});

describe('Same Char Rule', () => {
  test('should fail for repeated characters', () => {
    expect(sameCharRule.check('aaa12345', defaultConfig)).toBe(false);
  });

  test('should pass for non-repeated characters', () => {
    expect(sameCharRule.check('abcdefg1', defaultConfig)).toBe(true);
  });

  test('should fail for repeated digits', () => {
    expect(sameCharRule.check('111abcdef', defaultConfig)).toBe(false);
  });
});

describe('Builtin Rules Registry', () => {
  test('should export all builtin rules', () => {
    expect(builtinRules).toHaveLength(10);
  });

  test('should find rule by type', () => {
    expect(findRule('PASSWORD_LENGTH')?.type).toBe('PASSWORD_LENGTH');
    expect(findRule('CONTAIN_DIGIT')?.type).toBe('CONTAIN_DIGIT');
    expect(findRule('CASE')?.type).toBe('CASE');
    expect(findRule('LOWER_CASE')?.type).toBe('LOWER_CASE');
    expect(findRule('UPPER_CASE')?.type).toBe('UPPER_CASE');
    expect(findRule('SPECIAL_CHAR')?.type).toBe('SPECIAL_CHAR');
    expect(findRule('HORIZONTAL_KEY_SEQUENTIAL')?.type).toBe('HORIZONTAL_KEY_SEQUENTIAL');
    expect(findRule('SLANT_KEY_SEQUENTIAL')?.type).toBe('SLANT_KEY_SEQUENTIAL');
    expect(findRule('LOGIC_SEQUENTIAL')?.type).toBe('LOGIC_SEQUENTIAL');
    expect(findRule('SEQUENTIAL_CHAR_SAME')?.type).toBe('SEQUENTIAL_CHAR_SAME');
  });

  test('should return undefined for unknown type', () => {
    expect(findRule('UNKNOWN_TYPE')).toBeUndefined();
  });
});

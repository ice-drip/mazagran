import { zhCN, enUS, getMessages } from '@kaffee/mazagran/locales';

describe('zhCN locale', () => {
  test('has all required error keys', () => {
    const expectedKeys = [
      'PASSWORD_LENGTH_ERR',
      'NOT_CONTAIN_DIGIT',
      'NOT_CONTAIN_CASE',
      'NOT_CONTAIN_LOWER_CASE',
      'NOT_CONTAIN_UPPER_CASE',
      'NOT_CONTAIN_SPECIAL_CHAR',
      'HAS_KEYBOARD_SEQUENTIAL',
      'HAS_KEYBOARD_SLANT',
      'HAS_SEQUENTIAL_CHAR',
      'HAS_SEQUENTIAL_SAME_CHAR'
    ];
    expectedKeys.forEach((key) => {
      expect(zhCN[key]).toBeDefined();
      expect(zhCN[key].pass).toBeDefined();
      expect(zhCN[key].fail).toBeDefined();
    });
  });

  test('provides Chinese messages', () => {
    expect(zhCN.PASSWORD_LENGTH_ERR.pass).toBe('口令长度正确');
    expect(zhCN.PASSWORD_LENGTH_ERR.fail).toBe('口令长度不正确');
    expect(zhCN.NOT_CONTAIN_DIGIT.pass).toBe('口令中包含数字');
    expect(zhCN.NOT_CONTAIN_DIGIT.fail).toBe('口令中不包含数字');
  });
});

describe('enUS locale', () => {
  test('has all required error keys', () => {
    const expectedKeys = [
      'PASSWORD_LENGTH_ERR',
      'NOT_CONTAIN_DIGIT',
      'NOT_CONTAIN_CASE',
      'NOT_CONTAIN_LOWER_CASE',
      'NOT_CONTAIN_UPPER_CASE',
      'NOT_CONTAIN_SPECIAL_CHAR',
      'HAS_KEYBOARD_SEQUENTIAL',
      'HAS_KEYBOARD_SLANT',
      'HAS_SEQUENTIAL_CHAR',
      'HAS_SEQUENTIAL_SAME_CHAR'
    ];
    expectedKeys.forEach((key) => {
      expect(enUS[key]).toBeDefined();
      expect(enUS[key].pass).toBeDefined();
      expect(enUS[key].fail).toBeDefined();
    });
  });

  test('provides English messages', () => {
    expect(enUS.PASSWORD_LENGTH_ERR.pass).toBe('Password length is valid');
    expect(enUS.PASSWORD_LENGTH_ERR.fail).toBe('Password length is invalid');
    expect(enUS.NOT_CONTAIN_DIGIT.pass).toBe('Contains digit');
    expect(enUS.NOT_CONTAIN_DIGIT.fail).toBe('Must contain digit');
  });
});

describe('getMessages', () => {
  test('returns zhCN for "zh" locale', () => {
    const messages = getMessages('zh');
    expect(messages).toBe(zhCN);
  });

  test('returns zhCN for "zh-CN" locale', () => {
    const messages = getMessages('zh-CN');
    expect(messages).toBe(zhCN);
  });

  test('returns enUS for "en" locale', () => {
    const messages = getMessages('en');
    expect(messages).toBe(enUS);
  });

  test('returns enUS for "en-US" locale', () => {
    const messages = getMessages('en-US');
    expect(messages).toBe(enUS);
  });

  test('falls back to zhCN for unknown locale', () => {
    const messages = getMessages('fr');
    expect(messages).toBe(zhCN);
  });

  test('merges custom messages when provided', () => {
    const custom = {
      en: {
        PASSWORD_LENGTH_ERR: {
          pass: 'Custom pass',
          fail: 'Custom fail'
        }
      }
    };
    const messages = getMessages('en', custom);
    expect(messages.PASSWORD_LENGTH_ERR.pass).toBe('Custom pass');
    expect(messages.PASSWORD_LENGTH_ERR.fail).toBe('Custom fail');
    // Other keys should remain from enUS
    expect(messages.NOT_CONTAIN_DIGIT.pass).toBe('Contains digit');
  });

  test('returns base when customMessages has no matching locale', () => {
    const custom = {
      fr: {
        PASSWORD_LENGTH_ERR: {
          pass: 'Custom pass',
          fail: 'Custom fail'
        }
      }
    };
    const messages = getMessages('en', custom);
    expect(messages).toBe(enUS);
  });

  test('returns base when customMessages is undefined', () => {
    const messages = getMessages('en', undefined);
    expect(messages).toBe(enUS);
  });
});

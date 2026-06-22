import type { ResolvedConfig } from "@kaffee/mazagran";

/**
 * 默认测试配置
 * 与 packages/mazagran/src/config.ts 中的默认值保持一致
 */
export const DEFAULT_CONFIG: ResolvedConfig = {
  minLength: 8,
  maxLength: 20,
  specialChars: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
  locale: "zh",
  limitHorizontalNumKey: 3,
  limitSlopeNumKey: 3,
  limitLogicNumChar: 3,
  limitNumSameChar: 3,
  keyboardHorizontalArr: [
    "`1234567890-=",
    "~!@#$%^&*()_+",
    "qwertyuiop[]\\",
    "qwertyuiop{}|",
    "asdfghjkl;'",
    'asdfghjkl;"',
    "zxcvbnM<>?",
    "zxcvbnm,./"
  ],
  keyboardSlopeArr: [
    "1qaz", "!qaz", "2wsx", "@wsx", "3edc", "#edc",
    "4rfv", "$rfv", "5tgb", "%tgb", "6yhn", "^yhn",
    "7ujm", "&ujm", "8ik,", "*ik,", "9ol.", "(ol.",
    "0p;/", ")P:?", "=[;.", "+[;.", "-pl,", "_pl,",
    "0okm", ")okm", "9ijn", "(ijn", "8uhb", "*uhb",
    "7ygv", "&ygv", "6tfc", "^tfc", "5rdx", "%rdx",
    "4esz", "$esz"
  ],
  keyboardLogicArr: [
    "abcdefghijklmnopqrstuvwxyz",
    "zyxwvutsrqponmlkjihgfedcba",
    "01234567890",
    "9876543210",
    "147258369"
  ]
};

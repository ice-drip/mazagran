export class MazagranConfig {
  /**
   * 是否检测密码口令长度标识
   */
  public CHECK_PASSWORD_LENGTH: boolean = false;
  /**
   * 密码最小长度，默认为8
   */
  public MIN_LENGTH: number = 8;
  /**
   * 密码最大长度，默认为20
   */
  public MAX_LENGTH: number = 20;
  /**
   * 是否包含数字
   */
  public CHECK_CONTAIN_DIGIT: boolean = false;

  /**
   * 是否包含字母
   */
  public CHECK_CASE: boolean = false;
  /**
   * 是否包含小写字母
   */
  public CHECK_LOWER_CASE: boolean = false;
  /**
   * 是否包含大写字母
   */
  public CHECK_UPPER_CASE: boolean = false;
  /**
   * 是否包含特殊符号
   */
  public CHECK_CONTAIN_SPECIAL_CHAR: boolean = false;
  /**
   * 特殊符号集合
   */
  public SPECIAL_CHAR: string = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  /**
   * 是否检测键盘按键横向连续
   */
  public CHECK_HORIZONTAL_KEY_SEQUENTIAL: boolean = false;
  /**
   * 键盘物理位置横向不允许最小的连续个数
   */
  public LIMIT_HORIZONTAL_NUM_KEY: number = 3;

  /**
   * 是否检测键盘按键斜向连续
   */
  public CHECK_SLANT_KEY_SEQUENTIAL: boolean = false;
  /**
   * 键盘物理位置斜向不允许最小的连续个数
   */
  public LIMIT_SLOPE_NUM_KEY: number = 3;

  /**
   * 是否检测逻辑位置连续
   */
  public CHECK_LOGIC_SEQUENTIAL: boolean = false;
  /**
   * 密码口令中字符在逻辑位置上不允许最小的连续个数
   */
  public LIMIT_LOGIC_NUM_CHAR: number = 3;
  /**
   * 密码中的逻辑字符
   */
  public KEYBOARD_LOGIC_ARR: string[] = ["abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", "01234567890", "9876543210", "147258369"];

  /**
   * 是否检测连续字符相同
   */
  public CHECK_SEQUENTIAL_CHAR_SAME: boolean = false;
  /**
   * 密码口令中相同字符不允许最小的连续个数
   */
  public LIMIT_NUM_SAME_CHAR: number = 3;
  /**
   * 键盘横向方向规则
   */
  public KEYBOARD_HORIZONTAL_ARR: string[] = ["`1234567890-=", "~!@#$%^&*()_+", "qwertyuiop[]\\", "op{}|", "asdfghjkl;'", "kl;'", "nM<>?", "zxcvbnm,./"];
  /**
   * 键盘斜线方向规则
   */
  public KEYBOARD_SLOPE_ARR: string[] = [
    "1qaz",
    "!qaz",
    "2wsx",
    "@wsx",
    "3edc",
    "#edc",
    "4rfv",
    "$rfv",
    "5tgb",
    "%tgb",
    "6yhn",
    "^yhn",
    "7ujm",
    "&ujm",
    "8ik,",
    "*ik,",
    "9ol.",
    "(ol.",
    "0p;/",
    ")P:?",
    "=[;.",
    "+[;.",
    "-pl,",
    "_pl,",
    "0okm",
    ")okm",
    "9ijn",
    "(ijn",
    "8uhb",
    "*uhb",
    "7ygv",
    "&ygv",
    "6tfc",
    "^tfc",
    "5rdx",
    "%rdx",
    "4esz",
    "$esz"
  ];
}

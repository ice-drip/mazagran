import { MazagranConfig } from "./config";
import { uniq } from "lodash";

type CheckType =
  | "PASSWORD_LENGTH"
  | "CONTAIN_DIGIT"
  | "CASE"
  | "LOWER_CASE"
  | "UPPER_CASE"
  | "SPECIAL_CHAR"
  | "HORIZONTAL_KEY_SEQUENTIAL"
  | "SLANT_KEY_SEQUENTIAL"
  | "LOGIC_SEQUENTIAL"
  | "SEQUENTIAL_CHAR_SAME";
type ErrType =
  | "PASSWORD_LENGTH_ERR"
  | "NOT_CONTAIN_DIGIT"
  | "NOT_CONTAIN_CASE"
  | "NOT_CONTAIN_LOWER_CASE"
  | "NOT_CONTAIN_UPPER_CASE"
  | "NOT_CONTAIN_SPECIAL_CHAR"
  | "HAS_KEYBOARD_SEQUENTIAL"
  | "HAS_KEYBOARD_SLANT"
  | "HAS_SEQUENTIAL_CHAR"
  | "HAS_SEQUENTIAL_SAME_CHAR";
class Mazagran {
  private config: MazagranConfig;
  private types: CheckType[];

  constructor(
    types: CheckType[] = [
      "PASSWORD_LENGTH",
      "CONTAIN_DIGIT",
      "CASE",
      "LOWER_CASE",
      "UPPER_CASE",
      "SPECIAL_CHAR",
      "HORIZONTAL_KEY_SEQUENTIAL",
      "SLANT_KEY_SEQUENTIAL",
      "LOGIC_SEQUENTIAL",
      "SEQUENTIAL_CHAR_SAME"
    ],
    override?: MazagranConfig
  ) {
    if (override) {
      this.config = override;
    } else {
      this.config = new MazagranConfig();
    }
    this.types = types;
    this.init();
  }

  private init() {
    this.types.some((type) => {
      switch (type) {
        case "PASSWORD_LENGTH":
          this.config.CHECK_PASSWORD_LENGTH = true;
          break;
        case "CONTAIN_DIGIT":
          this.config.CHECK_CONTAIN_DIGIT = true;
          break;
        case "SPECIAL_CHAR":
          this.config.CHECK_CONTAIN_SPECIAL_CHAR = true;
          break;
        case "HORIZONTAL_KEY_SEQUENTIAL":
          this.config.CHECK_HORIZONTAL_KEY_SEQUENTIAL = true;
          break;
        case "LOGIC_SEQUENTIAL":
          this.config.CHECK_LOGIC_SEQUENTIAL = true;
          break;
        case "LOWER_CASE":
          this.config.CHECK_LOWER_CASE = true;
          break;
        case "SEQUENTIAL_CHAR_SAME":
          this.config.CHECK_SEQUENTIAL_CHAR_SAME = true;
          break;
        case "SLANT_KEY_SEQUENTIAL":
          this.config.CHECK_SLANT_KEY_SEQUENTIAL = true;
          break;
        case "UPPER_CASE":
          this.config.CHECK_UPPER_CASE = true;
          break;
        case "CASE":
          this.config.CHECK_CASE = true;
          break;
      }
    });
  }
  private checkOne(
    type: CheckType,
    errEnum: ErrType,
    checkFunction: (password: string) => boolean,
    typeSet: Set<CheckType>,
    password: string,
    errList: ErrType[],
    passList: ErrType[]
  ) {
    if (typeSet.has(type)) {
      if (!checkFunction(password)) {
        errList.push(errEnum);
      } else {
        passList.push(errEnum);
      }
    }
  }
  public checkAll(password: string) {
    const errList: ErrType[] = [];
    const passList: ErrType[] = [];
    const typeSet = new Set(this.types);
    this.checkOne("PASSWORD_LENGTH", "PASSWORD_LENGTH_ERR", (pass) => this.checkPasswordLength(pass), typeSet, password, errList, passList);
    this.checkOne("CONTAIN_DIGIT", "NOT_CONTAIN_DIGIT", (pass) => this.checkContainDigit(pass), typeSet, password, errList, passList);
    this.checkOne("CASE", "NOT_CONTAIN_CASE", (pass) => this.checkContainCase(pass), typeSet, password, errList, passList);
    this.checkOne("LOWER_CASE", "NOT_CONTAIN_LOWER_CASE", (pass) => this.checkContainLowerCase(pass), typeSet, password, errList, passList);
    this.checkOne("UPPER_CASE", "NOT_CONTAIN_UPPER_CASE", (pass) => this.checkContainUpperCase(pass), typeSet, password, errList, passList);
    this.checkOne("SPECIAL_CHAR", "NOT_CONTAIN_SPECIAL_CHAR", (pass) => this.checkContainSpecialChar(pass), typeSet, password, errList, passList);
    this.checkOne("HORIZONTAL_KEY_SEQUENTIAL", "HAS_KEYBOARD_SEQUENTIAL", (pass) => this.checkLateralKeyboardSite(pass), typeSet, password, errList, passList);
    this.checkOne("SLANT_KEY_SEQUENTIAL", "HAS_KEYBOARD_SLANT", (pass) => this.checkKeyboardSlantSite(pass), typeSet, password, errList, passList);
    this.checkOne("LOGIC_SEQUENTIAL", "HAS_SEQUENTIAL_CHAR", (pass) => this.checkSequentialChars(pass), typeSet, password, errList, passList);
    this.checkOne("SEQUENTIAL_CHAR_SAME", "HAS_SEQUENTIAL_SAME_CHAR", (pass) => this.checkSequentialSameChars(pass), typeSet, password, errList, passList);

    return {
      error: errList,
      pass: passList
    };
  }

  /**
   * 检测 密码中字符长度
   *
   * @param {string} password 密码字符串
   * @return {*}  {boolean}
   * @memberof CheckPWD
   */
  private checkPasswordLength(password: string): boolean {
    if (!this.config.CHECK_PASSWORD_LENGTH) {
      return true;
    } else {
      if (password.length >= this.config.MIN_LENGTH && password.length <= this.config.MAX_LENGTH) {
        return true;
      }
    }
    return false;
  }

  /**
   * 检测密码中是否包含数字
   *
   * @param {string} password 密码字符串
   * @return {*}  {boolean}
   * @memberof CheckPWD
   */
  private checkContainDigit(password: string): boolean {
    if (!this.config.CHECK_CONTAIN_DIGIT) {
      return true;
    } else {
      return /\d/.test(password);
    }
  }

  /**
   * 密码中是否包含字母
   *
   * @param {string} password 密码字符串
   * @return {*}  {boolean}
   * @memberof CheckPWD
   */
  private checkContainCase(password: string): boolean {
    return /[a-z,A-Z]/.test(password);
  }

  /**
   * 密码中是否包含小写字母
   *
   * @param {string} password 密码字符串
   * @return {*}  {boolean}
   * @memberof CheckPWD
   */
  private checkContainLowerCase(password: string): boolean {
    if (!this.config.CHECK_LOWER_CASE) {
      return true;
    }
    return /[a-z]/.test(password);
  }

  /**
   * 密码中是否包含大写字母
   *
   * @param {string} password 密码字符串
   * @return {*}  {boolean}
   * @memberof CheckPWD
   */
  private checkContainUpperCase(password: string): boolean {
    if (!this.config.CHECK_UPPER_CASE) {
      return true;
    }
    return /[A-Z]/.test(password);
  }

  /**
   * 检测密码中是否包含特殊符号
   *
   * @param {string} password 密码字符串
   * @return {*}  {boolean}
   * @memberof CheckPWD
   */
  private checkContainSpecialChar(password: string): boolean {
    if (!this.config.CHECK_CONTAIN_SPECIAL_CHAR) {
      return true;
    }
    return password.split("").find((char) => this.config.SPECIAL_CHAR.includes(char)) !== undefined;
  }

  /**
   * 键盘规则匹配器 横向连续检测
   *
   * @param {string} password 密码字符串
   * @return {*}  {boolean}
   * @memberof CheckPWD
   */
  private checkLateralKeyboardSite(password: string): boolean {
    if (!this.config.CHECK_HORIZONTAL_KEY_SEQUENTIAL) {
      return true;
    }
    const maxLength = this.config.LIMIT_HORIZONTAL_NUM_KEY;
    const lower = password.toLowerCase();
    const filterArr = [...this.config.KEYBOARD_HORIZONTAL_ARR, ...this.config.KEYBOARD_HORIZONTAL_ARR.map(this.stringReverse)];
    const arrList = uniq(filterArr.flatMap((str: string) => this.createSplitArr(str, maxLength)));
    return arrList.find((str: string) => lower.includes(str)) === undefined;
  }

  private stringReverse(str: string): string {
    return str.split("").reverse().join("");
  }

  /**
   * 键盘规则匹配器 斜向规则检测
   *
   * @param {string} password 密码字符串
   * @return {*}  {boolean}
   * @memberof CheckPWD
   */
  private checkKeyboardSlantSite(password: string): boolean {
    if (!this.config.CHECK_SLANT_KEY_SEQUENTIAL) {
      return true;
    }
    const maxLength = this.config.LIMIT_SLOPE_NUM_KEY;
    const lower = password.toLowerCase();
    const strArr = [...this.config.KEYBOARD_SLOPE_ARR, ...this.config.KEYBOARD_SLOPE_ARR.map(this.stringReverse)];
    const arrList = uniq(strArr.flatMap((str) => this.createSplitArr(str, maxLength)));
    return arrList.find((str: string) => lower.includes(str)) === undefined;
  }

  /**
   * 评估a-z,z-a这样的连续字符
   *
   * @param {string} password 密码字符串
   * @return {*}  {boolean}
   * @memberof CheckPWD
   */
  private checkSequentialChars(password: string): boolean {
    if (!this.config.CHECK_LOGIC_SEQUENTIAL) {
      return true;
    }
    const maxLength = this.config.LIMIT_LOGIC_NUM_CHAR;
    const lower = password.toLowerCase();
    const arrList = uniq(this.config.KEYBOARD_LOGIC_ARR.flatMap((str: string) => this.createSplitArr(str, maxLength)));
    return arrList.find((str: string) => lower.includes(str)) === undefined;
  }

  /**
   * 评估aaaa,1111这样的相同连续字符
   *
   * @private
   * @param {string} password 密码字符串
   * @return {*}  {boolean}
   * @memberof CheckPWD
   */
  private checkSequentialSameChars(password: string): boolean {
    if (!this.config.CHECK_SEQUENTIAL_CHAR_SAME) {
      return true;
    }
    const maxLength = this.config.LIMIT_NUM_SAME_CHAR;
    const lower = password.toLowerCase().split("");
    let sameLength = 0;
    let nowChar = "";
    lower.some((char) => {
      if (nowChar === char) {
        sameLength++;
        if (sameLength === maxLength) {
          return true;
        }
      } else {
        nowChar = char;
        sameLength = 0;
      }
    });
    return sameLength < maxLength;
  }

  /**
   * 分割连续字符串为固定大小
   *
   * @private
   * @param {string} str 连续字符串
   * @param {number} length 长度
   * @return {*}
   * @memberof CheckPWD
   */
  private createSplitArr(str: string, length: number): string[] {
    return Array(str.length - (length - 1))
      .fill("")
      .map((_, index) => str.substring(index, index + length));
  }
}

export { MazagranConfig, Mazagran };
export * from "./constant";

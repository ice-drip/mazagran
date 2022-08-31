import { Config } from "./config";

import { uniq } from "lodash-es";

export class CheckPWD {
  private config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  /**
   * 检测 密码中字符长度
   *
   * @param {string} password 密码字符串
   * @return {*}  {boolean}
   * @memberof CheckPWD
   */
  public checkPasswordLength(password: string): boolean {
    if (!this.config.CHECK_PASSWORD_LENGTH) {
      return true;
    } else {
      if (
        password.length > this.config.MIN_LENGTH &&
        password.length < this.config.MAX_LENGTH
      ) {
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
  public checkContainDigit(password: string): boolean {
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
  public checkContainCase(password: string): boolean {
    return /[a-z,A-Z]/.test(password);
  }

  /**
   * 密码中是否包含小写字母
   *
   * @param {string} password 密码字符串
   * @return {*}  {boolean}
   * @memberof CheckPWD
   */
  public checkContainLowerCase(password: string): boolean {
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
  public checkContainUpperCase(password: string): boolean {
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
  public checkContainSpecialChar(password: string): boolean {
    if (!this.config.CHECK_CONTAIN_SPECIAL_CHAR) {
      return true;
    }
    return (
      password
        .split("")
        .find((char) => this.config.SPECIAL_CHAR.includes(char)) === undefined
    );
  }

  /**
   * 键盘规则匹配器 横向连续检测
   *
   * @param {string} password 密码字符串
   * @return {*}  {boolean}
   * @memberof CheckPWD
   */
  public checkLateralKeyboardSite(password: string): boolean {
    if (!this.config.CHECK_HORIZONTAL_KEY_SEQUENTIAL) {
      return true;
    }
    const maxLength = this.config.LIMIT_HORIZONTAL_NUM_KEY;
    const lower = password.toLowerCase();
    const arrList = uniq(
      this.config.KEYBOARD_HORIZONTAL_ARR.flatMap((str) =>
        this.createSplitArr(str, maxLength)
      )
    );
    return arrList.find((str) => lower.includes(str)) === undefined;
  }

  /**
   * 键盘规则匹配器 斜向规则检测
   *
   * @param {string} password 密码字符串
   * @return {*}  {boolean}
   * @memberof CheckPWD
   */
  public checkKeyboardSlantSite(password: string): boolean {
    if (!this.config.CHECK_SLOPE_KEY_SEQUENTIAL) {
      return true;
    }
    const maxLength = this.config.LIMIT_SLOPE_NUM_KEY;
    const lower = password.toLowerCase();
    const arrList = uniq(
      this.config.KEYBOARD_SLOPE_ARR.flatMap((str) =>
        this.createSplitArr(str, maxLength)
      )
    );
    return arrList.find((str) => lower.includes(str)) === undefined;
  }

  /**
   * 评估a-z,z-a这样的连续字符
   *
   * @param {string} password 密码字符串
   * @return {*}  {boolean}
   * @memberof CheckPWD
   */
  public checkSequentialChars(password: string): boolean {
    if (!this.config.CHECK_LOGIC_SEQUENTIAL) {
      return true;
    }
    const maxLength = this.config.LIMIT_LOGIC_NUM_CHAR;
    const lower = password.toLowerCase();
    const arrList = uniq(
      this.config.KEYBOARD_LOGIC_ARR.flatMap((str) =>
        this.createSplitArr(str, maxLength)
      )
    );
    return arrList.find((str) => lower.includes(str)) === undefined;
  }

  public checkSequentialSameChars(password: string): boolean {
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
    return sameLength<=maxLength
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

import { Component } from "@angular/core";
import { Mazagran, ERR_DICT_CN, PASS_DICT_CN, MazagranConfig } from "@kaffee/mazagran";
import { Clipboard } from "@angular/cdk/clipboard";
import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: false
})
export class AppComponent {
  public password = "";
  public advanced = false;
  public errList: ErrItem[] = [];
  public get process() {
    if (this.errList.length > 0) {
      return (this.errList.filter((item) => item.type === "pass").length / this.errList.length) * 100;
    }
    return 0;
  }
  private mazagran = new Mazagran(this.getQuickRule());
  public commonConfig = new MazagranConfig();

  constructor(private clipboard: Clipboard, private snackBar: MatSnackBar) {
    this.commonConfig.CHECK_PASSWORD_LENGTH = true;
    this.commonConfig.CHECK_CONTAIN_DIGIT = true;
    this.commonConfig.CHECK_CONTAIN_SPECIAL_CHAR = true;
    this.commonConfig.CHECK_HORIZONTAL_KEY_SEQUENTIAL = true;
    this.commonConfig.CHECK_LOGIC_SEQUENTIAL = true;
    this.commonConfig.CHECK_LOWER_CASE = true;
    this.commonConfig.CHECK_SEQUENTIAL_CHAR_SAME = true;
    this.commonConfig.CHECK_SLANT_KEY_SEQUENTIAL = true;
    this.commonConfig.CHECK_UPPER_CASE = true;
    this.commonConfig.CHECK_CASE = true;
  }

  public handlePasswordChange() {
    if (this.password) {
      const result = this.mazagran.checkAll(this.password);
      const errorList = result.error.map((key) => ({ key, label: ERR_DICT_CN[key], type: "error" }));
      const passList = result.pass.map((key) => ({ key, label: PASS_DICT_CN[key], type: "pass" }));
      this.errList = [...errorList, ...passList].sort((x, y) => x.key.localeCompare(y.key));
    } else {
      this.errList = [];
    }
  }

  public handleCopyAdvanced() {
    const commonConfig: Record<string, string | boolean | number | string[]> = { ...this.commonConfig };
    const ignore = new Set(["KEYBOARD_HORIZONTAL_ARR", "KEYBOARD_LOGIC_ARR", "KEYBOARD_SLOPE_ARR"]);
    const config = Object.keys(commonConfig)
      .filter((key) => !ignore.has(key))
      .map((key: string) => {
        if (typeof commonConfig[key] === "string") {
          return `config.${key} = "${commonConfig[key]}";`;
        }
        if (typeof commonConfig[key] === "boolean" || typeof commonConfig[key] === "number") {
          return `config.${key} = ${commonConfig[key]};`;
        }
        return "";
      })
      .filter(Boolean)
      .join("\n");
    const quickRule = `[${this.getQuickRule()
      .map((rule) => `"${rule}"`)
      .join(",")}]`;
    const textConfig = `import { Mazagran, MazagranConfig } from "@kaffee/mazagran";
const config = new MazagranConfig();
${config}
const mazagran = new Mazagran(${quickRule},config);
`;
    this.clipboard.copy(textConfig);
    this.snackBar.open("复制配置成功");
  }

  public handleChangeAdvanced() {
    console.log(this.advanced);
    if (this.advanced === false) {
      this.mazagran = new Mazagran(this.getQuickRule());
      this.handlePasswordChange();
    } else {
      this.mazagran = new Mazagran(this.getQuickRule(), this.commonConfig);
      this.handlePasswordChange();
    }
  }

  private getQuickRule(): any[] {
    const rule: string[] = [];
    if (this.advanced === false) {
      return [
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
      ];
    }
    if (this.commonConfig.CHECK_PASSWORD_LENGTH) {
      rule.push("PASSWORD_LENGTH");
    }
    if (this.commonConfig.CHECK_CONTAIN_DIGIT) {
      rule.push("CONTAIN_DIGIT");
    }
    if (this.commonConfig.CHECK_CASE) {
      rule.push("CASE");
    }
    if (this.commonConfig.CHECK_LOWER_CASE) {
      rule.push("LOWER_CASE");
    }
    if (this.commonConfig.CHECK_UPPER_CASE) {
      rule.push("UPPER_CASE");
    }
    if (this.commonConfig.CHECK_CONTAIN_SPECIAL_CHAR) {
      rule.push("SPECIAL_CHAR");
    }
    if (this.commonConfig.CHECK_HORIZONTAL_KEY_SEQUENTIAL) {
      rule.push("HORIZONTAL_KEY_SEQUENTIAL");
    }
    if (this.commonConfig.CHECK_SLANT_KEY_SEQUENTIAL) {
      rule.push("SLANT_KEY_SEQUENTIAL");
    }
    if (this.commonConfig.CHECK_LOGIC_SEQUENTIAL) {
      rule.push("LOGIC_SEQUENTIAL");
    }
    if (this.commonConfig.CHECK_SEQUENTIAL_CHAR_SAME) {
      rule.push("SEQUENTIAL_CHAR_SAME");
    }
    return rule;
  }
}

interface ErrItem {
  key: string;
  label: string;
  type: string;
}

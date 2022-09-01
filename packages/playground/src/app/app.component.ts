import { Component } from "@angular/core";
import { Mazagran, ERR_DICT_CN, PASS_DICT_CN } from "@kaffee/mazagran/dist/esm";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
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
  private mazagran = new Mazagran();
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
}

interface ErrItem {
  key: string;
  label: string;
  type: string;
}

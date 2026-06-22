import { Mazagran } from "@kaffee/mazagran";
import type { ValidationRule } from "@kaffee/mazagran";

describe("Plugin system", () => {
  const noBirthYearRule: ValidationRule = {
    type: "NO_BIRTH_YEAR",
    check: (pwd) => !/19\d{2}|20\d{2}/.test(pwd),
    errorKey: "HAS_BIRTH_YEAR",
    weight: 15,
  };

  test("should register and execute custom rule", () => {
    const mazagran = new Mazagran();
    mazagran.registerRule(noBirthYearRule);

    const result = mazagran.checkAll("password1990");
    expect(result.errors).toContain("HAS_BIRTH_YEAR");
  });

  test("should remove custom rule", () => {
    const mazagran = new Mazagran();
    mazagran.registerRule(noBirthYearRule);
    mazagran.removeRule("NO_BIRTH_YEAR");

    const result = mazagran.checkAll("password1990");
    expect(result.errors).not.toContain("HAS_BIRTH_YEAR");
  });

  test("should support chain calls", () => {
    const mazagran = new Mazagran();
    const result = mazagran
      .registerRule(noBirthYearRule)
      .registerRule({
        type: "NO_COMMON_PASSWORD",
        check: (pwd) =>
          !["password", "123456"].some((p) =>
            pwd.toLowerCase().includes(p)
          ),
        errorKey: "IS_COMMON_PASSWORD",
        weight: 20,
      })
      .checkAll("password1990");

    expect(result.errors).toContain("HAS_BIRTH_YEAR");
    expect(result.errors).toContain("IS_COMMON_PASSWORD");
  });
});

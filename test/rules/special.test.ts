import { specialRule } from "@kaffee/mazagran/rules/special.rule";
import { DEFAULT_CONFIG } from "../helpers";

describe("specialRule", () => {
  test("should pass when password contains special char", () => {
    expect(specialRule.check("password!", DEFAULT_CONFIG)).toBe(true);
  });

  test("should fail when password has no special char", () => {
    expect(specialRule.check("password123", DEFAULT_CONFIG)).toBe(false);
  });

  test("should pass for various special chars", () => {
    expect(specialRule.check("pass@word", DEFAULT_CONFIG)).toBe(true);
    expect(specialRule.check("pass#word", DEFAULT_CONFIG)).toBe(true);
    expect(specialRule.check("pass$word", DEFAULT_CONFIG)).toBe(true);
    expect(specialRule.check("pass%word", DEFAULT_CONFIG)).toBe(true);
    expect(specialRule.check("pass^word", DEFAULT_CONFIG)).toBe(true);
    expect(specialRule.check("pass&word", DEFAULT_CONFIG)).toBe(true);
  });

  test("should fail for password with only letters and digits", () => {
    expect(specialRule.check("MyPassword1", DEFAULT_CONFIG)).toBe(false);
  });

  test("should have correct type", () => {
    expect(specialRule.type).toBe("SPECIAL_CHAR");
  });

  test("should have correct errorKey", () => {
    expect(specialRule.errorKey).toBe("NOT_CONTAIN_SPECIAL_CHAR");
  });
});

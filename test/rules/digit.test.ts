import { digitRule } from "@kaffee/mazagran/rules/digit.rule";
import { DEFAULT_CONFIG } from "../helpers";

describe("digitRule", () => {
  test("should pass when password contains digit", () => {
    expect(digitRule.check("password123", DEFAULT_CONFIG)).toBe(true);
  });

  test("should fail when password has no digit", () => {
    expect(digitRule.check("abcdefgh", DEFAULT_CONFIG)).toBe(false);
  });

  test("should pass for password with only digits", () => {
    expect(digitRule.check("12345678", DEFAULT_CONFIG)).toBe(true);
  });

  test("should pass for password with single digit", () => {
    expect(digitRule.check("abcdefgh1", DEFAULT_CONFIG)).toBe(true);
  });

  test("should have correct type", () => {
    expect(digitRule.type).toBe("CONTAIN_DIGIT");
  });

  test("should have correct errorKey", () => {
    expect(digitRule.errorKey).toBe("NOT_CONTAIN_DIGIT");
  });
});

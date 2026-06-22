import { lengthRule } from "@kaffee/mazagran/rules/length.rule";
import { DEFAULT_CONFIG } from "../helpers";

describe("lengthRule", () => {
  test("should pass for valid length", () => {
    expect(lengthRule.check("password123", DEFAULT_CONFIG)).toBe(true);
  });

  test("should fail for too short password", () => {
    expect(lengthRule.check("Ab1!", DEFAULT_CONFIG)).toBe(false);
  });

  test("should fail for too long password", () => {
    const longPassword = "A".repeat(21);
    expect(lengthRule.check(longPassword, DEFAULT_CONFIG)).toBe(false);
  });

  test("should pass for exact min length (8 chars)", () => {
    expect(lengthRule.check("12345678", DEFAULT_CONFIG)).toBe(true);
  });

  test("should pass for exact max length (20 chars)", () => {
    expect(lengthRule.check("a".repeat(20), DEFAULT_CONFIG)).toBe(true);
  });

  test("should fail for length just below min", () => {
    expect(lengthRule.check("1234567", DEFAULT_CONFIG)).toBe(false);
  });

  test("should fail for length just above max", () => {
    expect(lengthRule.check("a".repeat(21), DEFAULT_CONFIG)).toBe(false);
  });

  test("should have correct type", () => {
    expect(lengthRule.type).toBe("PASSWORD_LENGTH");
  });

  test("should have correct errorKey", () => {
    expect(lengthRule.errorKey).toBe("PASSWORD_LENGTH_ERR");
  });
});

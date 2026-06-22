import { caseRule, lowerCaseRule, upperCaseRule } from "@kaffee/mazagran/rules/case.rule";
import { DEFAULT_CONFIG } from "../helpers";

describe("caseRule", () => {
  test("should pass when password contains letter", () => {
    expect(caseRule.check("password123", DEFAULT_CONFIG)).toBe(true);
  });

  test("should fail when password has no letter", () => {
    expect(caseRule.check("12345678", DEFAULT_CONFIG)).toBe(false);
  });

  test("should pass for mixed case", () => {
    expect(caseRule.check("Password123", DEFAULT_CONFIG)).toBe(true);
  });

  test("should have correct type", () => {
    expect(caseRule.type).toBe("CASE");
  });

  test("should have correct errorKey", () => {
    expect(caseRule.errorKey).toBe("NOT_CONTAIN_CASE");
  });
});

describe("lowerCaseRule", () => {
  test("should pass when password contains lowercase", () => {
    expect(lowerCaseRule.check("password123", DEFAULT_CONFIG)).toBe(true);
  });

  test("should fail when password has no lowercase", () => {
    expect(lowerCaseRule.check("PASSWORD123", DEFAULT_CONFIG)).toBe(false);
  });

  test("should pass for mixed with single lowercase", () => {
    expect(lowerCaseRule.check("ABCDEFGH1a", DEFAULT_CONFIG)).toBe(true);
  });

  test("should have correct type", () => {
    expect(lowerCaseRule.type).toBe("LOWER_CASE");
  });

  test("should have correct errorKey", () => {
    expect(lowerCaseRule.errorKey).toBe("NOT_CONTAIN_LOWER_CASE");
  });
});

describe("upperCaseRule", () => {
  test("should pass when password contains uppercase", () => {
    expect(upperCaseRule.check("Password123", DEFAULT_CONFIG)).toBe(true);
  });

  test("should fail when password has no uppercase", () => {
    expect(upperCaseRule.check("password123", DEFAULT_CONFIG)).toBe(false);
  });

  test("should pass for mixed with single uppercase", () => {
    expect(upperCaseRule.check("abcdefghA1", DEFAULT_CONFIG)).toBe(true);
  });

  test("should have correct type", () => {
    expect(upperCaseRule.type).toBe("UPPER_CASE");
  });

  test("should have correct errorKey", () => {
    expect(upperCaseRule.errorKey).toBe("NOT_CONTAIN_UPPER_CASE");
  });
});

import { logicSequentialRule, sameCharRule } from "@kaffee/mazagran/rules/sequential.rule";
import { DEFAULT_CONFIG } from "../helpers";

describe("logicSequentialRule", () => {
  test("should fail when password contains abc sequence", () => {
    expect(logicSequentialRule.check("abc12345", DEFAULT_CONFIG)).toBe(false);
  });

  test("should fail when password contains 123 sequence", () => {
    expect(logicSequentialRule.check("password123", DEFAULT_CONFIG)).toBe(false);
  });

  test("should pass when password has no logical sequence", () => {
    expect(logicSequentialRule.check("axbycz12", DEFAULT_CONFIG)).toBe(true);
  });

  test("should detect reverse sequence (cba)", () => {
    expect(logicSequentialRule.check("cba12345", DEFAULT_CONFIG)).toBe(false);
  });

  test("should detect reverse numeric sequence (321)", () => {
    expect(logicSequentialRule.check("pass321abc", DEFAULT_CONFIG)).toBe(false);
  });

  test("should have correct type", () => {
    expect(logicSequentialRule.type).toBe("LOGIC_SEQUENTIAL");
  });

  test("should have correct errorKey", () => {
    expect(logicSequentialRule.errorKey).toBe("HAS_SEQUENTIAL_CHAR");
  });
});

describe("sameCharRule", () => {
  test("should fail when password has repeated characters", () => {
    expect(sameCharRule.check("aaa12345", DEFAULT_CONFIG)).toBe(false);
  });

  test("should pass when password has no repeated characters", () => {
    expect(sameCharRule.check("abcdefg1", DEFAULT_CONFIG)).toBe(true);
  });

  test("should fail for repeated digits", () => {
    expect(sameCharRule.check("111abcdef", DEFAULT_CONFIG)).toBe(false);
  });

  test("should pass for two consecutive same chars (below limit)", () => {
    expect(sameCharRule.check("aa123456", DEFAULT_CONFIG)).toBe(true);
  });

  test("should fail for three consecutive same chars (at limit)", () => {
    expect(sameCharRule.check("aaa12345", DEFAULT_CONFIG)).toBe(false);
  });

  test("should have correct type", () => {
    expect(sameCharRule.type).toBe("SEQUENTIAL_CHAR_SAME");
  });

  test("should have correct errorKey", () => {
    expect(sameCharRule.errorKey).toBe("HAS_SEQUENTIAL_SAME_CHAR");
  });
});

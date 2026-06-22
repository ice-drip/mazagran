import { horizontalKeyboardRule, slantKeyboardRule } from "@kaffee/mazagran/rules/keyboard.rule";
import { DEFAULT_CONFIG } from "../helpers";

describe("horizontalKeyboardRule", () => {
  test("should fail when password contains horizontal sequence", () => {
    expect(horizontalKeyboardRule.check("qwerty123", DEFAULT_CONFIG)).toBe(false);
  });

  test("should pass when password has no horizontal sequence", () => {
    expect(horizontalKeyboardRule.check("MyP@ssw0rd", DEFAULT_CONFIG)).toBe(true);
  });

  test("should detect reverse horizontal sequences", () => {
    expect(horizontalKeyboardRule.check("rewq4321", DEFAULT_CONFIG)).toBe(false);
  });

  test("should detect asdf sequence", () => {
    expect(horizontalKeyboardRule.check("asdf1234", DEFAULT_CONFIG)).toBe(false);
  });

  test("should pass for non-sequential password", () => {
    expect(horizontalKeyboardRule.check("axbycz12", DEFAULT_CONFIG)).toBe(true);
  });

  test("should have correct type", () => {
    expect(horizontalKeyboardRule.type).toBe("HORIZONTAL_KEY_SEQUENTIAL");
  });

  test("should have correct errorKey", () => {
    expect(horizontalKeyboardRule.errorKey).toBe("HAS_KEYBOARD_SEQUENTIAL");
  });
});

describe("slantKeyboardRule", () => {
  test("should fail when password contains slant sequence", () => {
    expect(slantKeyboardRule.check("1qaz2wsx", DEFAULT_CONFIG)).toBe(false);
  });

  test("should pass when password has no slant sequence", () => {
    expect(slantKeyboardRule.check("MyP@ssw0rd", DEFAULT_CONFIG)).toBe(true);
  });

  test("should detect reverse slant sequences", () => {
    expect(slantKeyboardRule.check("zaq12wsx", DEFAULT_CONFIG)).toBe(false);
  });

  test("should pass for non-sequential password", () => {
    expect(slantKeyboardRule.check("axbycz12", DEFAULT_CONFIG)).toBe(true);
  });

  test("should have correct type", () => {
    expect(slantKeyboardRule.type).toBe("SLANT_KEY_SEQUENTIAL");
  });

  test("should have correct errorKey", () => {
    expect(slantKeyboardRule.errorKey).toBe("HAS_KEYBOARD_SLANT");
  });
});

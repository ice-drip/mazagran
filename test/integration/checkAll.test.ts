import { Mazagran, CheckType } from "@kaffee/mazagran";

describe("Mazagran.checkAll", () => {
  test("should run all checks by default", () => {
    const mazagran = new Mazagran();
    const result = mazagran.checkAll("MyP@ssw0rd!");

    expect(result.errors).toBeInstanceOf(Array);
    expect(result.passes).toBeInstanceOf(Array);
    expect(result.messages).toBeDefined();
  });

  test("should run only enabled checks", () => {
    const mazagran = new Mazagran({
      checks: [CheckType.PasswordLength, CheckType.ContainDigit],
    });
    const result = mazagran.checkAll("12345678");

    expect(result.passes).toContain("PASSWORD_LENGTH_ERR");
    expect(result.passes).toContain("NOT_CONTAIN_DIGIT");
    expect(result.errors).toHaveLength(0);
  });

  test("should detect errors correctly", () => {
    const mazagran = new Mazagran({
      checks: [CheckType.PasswordLength],
    });
    const result = mazagran.checkAll("short");

    expect(result.errors).toContain("PASSWORD_LENGTH_ERR");
    expect(result.passes).toHaveLength(0);
  });
});

describe("Mazagran.validate", () => {
  test("should return valid result for strong password", () => {
    const result = Mazagran.validate("MyP@ssw0rd!2024", {
      checks: [CheckType.PasswordLength, CheckType.ContainDigit],
    });

    expect(result.valid).toBe(true);
    expect(result.result.errors).toHaveLength(0);
  });

  test("should return invalid result for weak password", () => {
    const result = Mazagran.validate("123", {
      checks: [CheckType.PasswordLength],
    });

    expect(result.valid).toBe(false);
    expect(result.result.errors.length).toBeGreaterThan(0);
  });
});

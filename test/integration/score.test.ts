import { Mazagran, CheckType } from "@kaffee/mazagran";

describe("Score system", () => {
  test("should not include score when disabled", () => {
    const mazagran = new Mazagran();
    const result = mazagran.checkAll("MyP@ssw0rd!");

    expect(result.score).toBeUndefined();
    expect(result.level).toBeUndefined();
  });

  test("should calculate score when enabled", () => {
    const mazagran = new Mazagran({
      score: { enabled: true },
    });
    const result = mazagran.checkAll("MyP@ssw0rd!");

    expect(result.score).toBeDefined();
    expect(result.score).toBeGreaterThanOrEqual(0);
    expect(result.score).toBeLessThanOrEqual(100);
    expect(result.level).toBeDefined();
  });

  test("should return correct strength level", () => {
    const mazagran = new Mazagran({
      checks: [CheckType.PasswordLength],
      score: { enabled: true },
    });

    const weakResult = mazagran.checkAll("short");
    expect(weakResult.level).toBe("weak");

    const strongResult = mazagran.checkAll("MyPassword123");
    expect(["fair", "good", "strong"]).toContain(strongResult.level);
  });

  test("should support custom weights", () => {
    const mazagran = new Mazagran({
      checks: [CheckType.PasswordLength, CheckType.ContainDigit],
      score: {
        enabled: true,
        weights: {
          PASSWORD_LENGTH: 50,
          CONTAIN_DIGIT: 50,
        },
      },
    });

    const result = mazagran.checkAll("MyPassword123");
    expect(result.score).toBe(100);
  });
});

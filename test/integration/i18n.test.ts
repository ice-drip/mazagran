import { Mazagran, CheckType } from "@kaffee/mazagran";

describe("i18n support", () => {
  test("should use Chinese messages by default", () => {
    const mazagran = new Mazagran({
      checks: [CheckType.PasswordLength],
    });
    const result = mazagran.checkAll("short");

    expect(result.messages?.["PASSWORD_LENGTH_ERR"]).toBe("口令长度不正确");
  });

  test("should use English messages when locale is en", () => {
    const mazagran = new Mazagran({
      checks: [CheckType.PasswordLength],
      locale: "en",
    });
    const result = mazagran.checkAll("short");

    expect(result.messages?.["PASSWORD_LENGTH_ERR"]).toBe(
      "Password length is invalid"
    );
  });

  test("should support custom messages", () => {
    const mazagran = new Mazagran({
      checks: [CheckType.PasswordLength],
      locale: "en",
      customMessages: {
        en: {
          PASSWORD_LENGTH_ERR: {
            pass: "Length OK",
            fail: "Too short!",
          },
        },
      },
    });
    const result = mazagran.checkAll("short");

    expect(result.messages?.["PASSWORD_LENGTH_ERR"]).toBe("Too short!");
  });
});

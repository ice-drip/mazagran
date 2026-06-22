import { Mazagran } from "@kaffee/mazagran";

test("[error]password: 1234 (min_length:10)", () => {
  const mazagran = new Mazagran({ checks: ["PASSWORD_LENGTH"], minLength: 10 });
  const result = mazagran.checkAll("1234");
  expect(result.errors.includes("PASSWORD_LENGTH_ERR")).toBe(true);
  expect(result.passes.includes("PASSWORD_LENGTH_ERR")).toBe(false);
});
test("[error]password: 123456789 (max_length:6)", () => {
  const mazagran = new Mazagran({ checks: ["PASSWORD_LENGTH"], maxLength: 6, minLength: 2 });
  expect(mazagran.checkAll("123456789").errors.includes("PASSWORD_LENGTH_ERR")).toBe(true);
});

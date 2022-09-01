import { Mazagran, MazagranConfig } from "@kaffee/mazagran";

test("[error]password: 1234 (min_length:10)", () => {
  const config = new MazagranConfig();
  config.MIN_LENGTH = 10;
  const mazagran = new Mazagran(["PASSWORD_LENGTH"], config);
  const result = mazagran.checkAll("1234");
  expect(result.error.includes("PASSWORD_LENGTH_ERR")).toBe(true);
  expect(result.pass.includes("PASSWORD_LENGTH_ERR")).toBe(false);
});
test("[error]password: 123456789 (max_length:6)", () => {
  const config = new MazagranConfig();
  config.MAX_LENGTH = 6;
  config.MIN_LENGTH = 2;
  const mazagran = new Mazagran(["PASSWORD_LENGTH"], config);
  expect(mazagran.checkAll("123456789").error.includes("PASSWORD_LENGTH_ERR")).toBe(true);
});

import { Mazagran, MazagranConfig } from "@kaffee/mazagran";

test("not check", () => {
  const config = new MazagranConfig();
  config.MIN_LENGTH = 10;
  const mazagran = new Mazagran([], config);
  expect(mazagran.checkAll("1234").error.includes("PASSWORD_LENGTH_ERR")).toBe(false);
});

test("min length", () => {
  const config = new MazagranConfig();
  config.MIN_LENGTH = 10;
  const mazagran = new Mazagran(["PASSWORD_LENGTH"], config);
  expect(mazagran.checkAll("1234").error.includes("PASSWORD_LENGTH_ERR")).toBe(true);
});
test("max length", () => {
  const config = new MazagranConfig();
  config.MAX_LENGTH = 6;
  config.MIN_LENGTH = 2;
  const mazagran = new Mazagran(["PASSWORD_LENGTH"], config);
  expect(mazagran.checkAll("123456789").error.includes("PASSWORD_LENGTH_ERR")).toBe(true);
});

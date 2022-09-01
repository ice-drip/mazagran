import { Mazagran } from "@kaffee/mazagran";
const mazagran = new Mazagran();

test("test run", () => {
  expect(mazagran.checkAll("1234567890").error instanceof Array).toBe(true);
});

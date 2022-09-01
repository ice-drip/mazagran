import { Mazagran, MazagranConfig } from "@kaffee/mazagran";

test("[error]password: qwert", () => {
  const mazagran = new Mazagran(["HORIZONTAL_KEY_SEQUENTIAL"]);
  const result = mazagran.checkAll("qwert");
  expect(result.error.includes("HAS_KEYBOARD_SEQUENTIAL")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SEQUENTIAL")).toBe(false);
});

test("[error]password: dfghjkl", () => {
  const mazagran = new Mazagran(["HORIZONTAL_KEY_SEQUENTIAL"]);
  const result = mazagran.checkAll("dfghjkl");
  expect(result.error.includes("HAS_KEYBOARD_SEQUENTIAL")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SEQUENTIAL")).toBe(false);
});

test("[error]password: ahxcvbnk", () => {
  const mazagran = new Mazagran(["HORIZONTAL_KEY_SEQUENTIAL"]);
  const result = mazagran.checkAll("ahxcvbnk");
  expect(result.error.includes("HAS_KEYBOARD_SEQUENTIAL")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SEQUENTIAL")).toBe(false);
});

test("[error]password: 135ertyuiop5", () => {
  const mazagran = new Mazagran(["HORIZONTAL_KEY_SEQUENTIAL"]);
  const result = mazagran.checkAll("135ertyuiop5");
  expect(result.error.includes("HAS_KEYBOARD_SEQUENTIAL")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SEQUENTIAL")).toBe(false);
});

test("[error]password: !@#$%^&*(", () => {
  const mazagran = new Mazagran(["HORIZONTAL_KEY_SEQUENTIAL"]);
  const result = mazagran.checkAll("!@#$%^&*(");
  expect(result.error.includes("HAS_KEYBOARD_SEQUENTIAL")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SEQUENTIAL")).toBe(false);
});

test("[error]password: poiuytr", () => {
  const mazagran = new Mazagran(["HORIZONTAL_KEY_SEQUENTIAL"]);
  const result = mazagran.checkAll("poiuytr");
  expect(result.error.includes("HAS_KEYBOARD_SEQUENTIAL")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SEQUENTIAL")).toBe(false);
});

test("[error]password: ';lkjhgf'", () => {
  const mazagran = new Mazagran(["HORIZONTAL_KEY_SEQUENTIAL"]);
  const result = mazagran.checkAll("';lkjhgf'");
  expect(result.error.includes("HAS_KEYBOARD_SEQUENTIAL")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SEQUENTIAL")).toBe(false);
});
test("[error]password: zxcvbnm", () => {
  const mazagran = new Mazagran(["HORIZONTAL_KEY_SEQUENTIAL"]);
  const result = mazagran.checkAll("zxcvbnm");
  expect(result.error.includes("HAS_KEYBOARD_SEQUENTIAL")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SEQUENTIAL")).toBe(false);
});
test("[error]password: mnbvcxz", () => {
  const mazagran = new Mazagran(["HORIZONTAL_KEY_SEQUENTIAL"]);
  const result = mazagran.checkAll("mnbvcxz");
  expect(result.error.includes("HAS_KEYBOARD_SEQUENTIAL")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SEQUENTIAL")).toBe(false);
});
test("[error]password: dfghjkloiuytr", () => {
  const mazagran = new Mazagran(["HORIZONTAL_KEY_SEQUENTIAL"]);
  const result = mazagran.checkAll("dfghjkloiuytr");
  expect(result.error.includes("HAS_KEYBOARD_SEQUENTIAL")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SEQUENTIAL")).toBe(false);
});
test("[error]password: jhgfd", () => {
  const mazagran = new Mazagran(["HORIZONTAL_KEY_SEQUENTIAL"]);
  const result = mazagran.checkAll("dfghjkloiuytr");
  expect(result.error.includes("HAS_KEYBOARD_SEQUENTIAL")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SEQUENTIAL")).toBe(false);
});
test("[error]password: 123455678", () => {
  const mazagran = new Mazagran(["HORIZONTAL_KEY_SEQUENTIAL"]);
  const result = mazagran.checkAll("123455678");
  expect(result.error.includes("HAS_KEYBOARD_SEQUENTIAL")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SEQUENTIAL")).toBe(false);
});
test("[error]password: 987654", () => {
  const mazagran = new Mazagran(["HORIZONTAL_KEY_SEQUENTIAL"]);
  const result = mazagran.checkAll("987654");
  expect(result.error.includes("HAS_KEYBOARD_SEQUENTIAL")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SEQUENTIAL")).toBe(false);
});

test("[error]password: 1asdf3 (limit:5)", () => {
  const config = new MazagranConfig();
  config.LIMIT_HORIZONTAL_NUM_KEY = 5;
  const mazagran = new Mazagran(["HORIZONTAL_KEY_SEQUENTIAL"], config);
  const result = mazagran.checkAll("asdf");
  expect(result.error.includes("HAS_KEYBOARD_SEQUENTIAL")).toBe(false);
  expect(result.pass.includes("HAS_KEYBOARD_SEQUENTIAL")).toBe(true);
});

test("[pass]password: qetyi", () => {
  const mazagran = new Mazagran(["HORIZONTAL_KEY_SEQUENTIAL"]);
  const result = mazagran.checkAll("qetyi");
  expect(result.error.includes("HAS_KEYBOARD_SEQUENTIAL")).toBe(false);
  expect(result.pass.includes("HAS_KEYBOARD_SEQUENTIAL")).toBe(true);
});

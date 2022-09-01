import { Mazagran } from "@kaffee/mazagran";

test("[error]password: 1234567890", () => {
  const mazagran = new Mazagran(["LOGIC_SEQUENTIAL"]);
  const result = mazagran.checkAll("1234567890");
  expect(result.error.includes("HAS_SEQUENTIAL_CHAR")).toBe(true);
  expect(result.pass.includes("HAS_SEQUENTIAL_CHAR")).toBe(false);
});

test("[error]password: 9876543210", () => {
  const mazagran = new Mazagran(["LOGIC_SEQUENTIAL"]);
  const result = mazagran.checkAll("9876543210");
  expect(result.error.includes("HAS_SEQUENTIAL_CHAR")).toBe(true);
  expect(result.pass.includes("HAS_SEQUENTIAL_CHAR")).toBe(false);
});
test("[error]password: abcdefghijk", () => {
  const mazagran = new Mazagran(["LOGIC_SEQUENTIAL"]);
  const result = mazagran.checkAll("abcdefghijk");
  expect(result.error.includes("HAS_SEQUENTIAL_CHAR")).toBe(true);
  expect(result.pass.includes("HAS_SEQUENTIAL_CHAR")).toBe(false);
});

test("[error]password: utsrqponmlkjihgfed", () => {
  const mazagran = new Mazagran(["LOGIC_SEQUENTIAL"]);
  const result = mazagran.checkAll("utsrqponmlkjihgfed");
  expect(result.error.includes("HAS_SEQUENTIAL_CHAR")).toBe(true);
  expect(result.pass.includes("HAS_SEQUENTIAL_CHAR")).toBe(false);
});

test("[error]password: 98765", () => {
  const mazagran = new Mazagran(["LOGIC_SEQUENTIAL"]);
  const result = mazagran.checkAll("98765");
  expect(result.error.includes("HAS_SEQUENTIAL_CHAR")).toBe(true);
  expect(result.pass.includes("HAS_SEQUENTIAL_CHAR")).toBe(false);
});

test("[error]password: 147", () => {
  const mazagran = new Mazagran(["LOGIC_SEQUENTIAL"]);
  const result = mazagran.checkAll("147");
  expect(result.error.includes("HAS_SEQUENTIAL_CHAR")).toBe(true);
  expect(result.pass.includes("HAS_SEQUENTIAL_CHAR")).toBe(false);
});

test("[pass]password: 135", () => {
  const mazagran = new Mazagran(["LOGIC_SEQUENTIAL"]);
  const result = mazagran.checkAll("135");
  expect(result.error.includes("HAS_SEQUENTIAL_CHAR")).toBe(false);
  expect(result.pass.includes("HAS_SEQUENTIAL_CHAR")).toBe(true);
});

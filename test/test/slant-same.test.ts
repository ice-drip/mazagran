import { Mazagran } from "@kaffee/mazagran";
const mazagran = new Mazagran(["SLANT_KEY_SEQUENTIAL"]);

test("[error]password: 1qaz", () => {
  const result = mazagran.checkAll("1qaz");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: 2wsx", () => {
  const result = mazagran.checkAll("2wsx");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: 3edc", () => {
  const result = mazagran.checkAll("3edc");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: 4rfv", () => {
  const result = mazagran.checkAll("4rfv");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: 5tgb", () => {
  const result = mazagran.checkAll("5tgb");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: 6yhn", () => {
  const result = mazagran.checkAll("6yhn");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: 7ujm", () => {
  const result = mazagran.checkAll("7ujm");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: 8ik,", () => {
  const result = mazagran.checkAll("8ik,");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: 9ol.", () => {
  const result = mazagran.checkAll("9ol.,");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: 0p;/", () => {
  const result = mazagran.checkAll("0p;/");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: =[;.", () => {
  const result = mazagran.checkAll("=[;.");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: -pl,", () => {
  const result = mazagran.checkAll("-pl,");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: 0okm", () => {
  const result = mazagran.checkAll("0okm");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: 9ijn", () => {
  const result = mazagran.checkAll("9ijn");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: 8uhb", () => {
  const result = mazagran.checkAll("8uhb");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: 7ygv", () => {
  const result = mazagran.checkAll("7ygv");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: 6tfc", () => {
  const result = mazagran.checkAll("6tfc");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: 5rdx", () => {
  const result = mazagran.checkAll("5rdx");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: 4esz", () => {
  const result = mazagran.checkAll("4esz");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: !QAZ", () => {
  const result = mazagran.checkAll("!QAZ");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: @WSX", () => {
  const result = mazagran.checkAll("@WSX");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: #EDC", () => {
  const result = mazagran.checkAll("#EDC");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: $RFV", () => {
  const result = mazagran.checkAll("$RFV");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: %TGB", () => {
  const result = mazagran.checkAll("%TGB");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: ^YHN", () => {
  const result = mazagran.checkAll("^YHN");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: &UJM", () => {
  const result = mazagran.checkAll("&UJM");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: *IK<", () => {
  const result = mazagran.checkAll("*IK<");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: (OL>", () => {
  const result = mazagran.checkAll("(OL>");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: zaq1", () => {
  const result = mazagran.checkAll("zaq1");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: xsw2", () => {
  const result = mazagran.checkAll("xsw2");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: cde3", () => {
  const result = mazagran.checkAll("cde3");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: vfr4", () => {
  const result = mazagran.checkAll("vfr4");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: bgt5", () => {
  const result = mazagran.checkAll("bgt5");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: nhy6", () => {
  const result = mazagran.checkAll("nhy6");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: mju7", () => {
  const result = mazagran.checkAll("mju7");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: ,ki8", () => {
  const result = mazagran.checkAll(",ki8");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: .lo9", () => {
  const result = mazagran.checkAll(".lo9");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});
test("[error]password: /;p0", () => {
  const result = mazagran.checkAll("/;p0");
  expect(result.error.includes("HAS_KEYBOARD_SLANT")).toBe(true);
  expect(result.pass.includes("HAS_KEYBOARD_SLANT")).toBe(false);
});

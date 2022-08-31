import { Mazagran, MazagranConfig } from "@kaffee/mazagran";
const mazagran = new Mazagran(new MazagranConfig())
test("default test",()=>{
    expect(mazagran.checkAll("1234567890")).toEqual([
        'NOT_CONTAIN_CASE',
        'NOT_CONTAIN_LOWER_CASE',
        'NOT_CONTAIN_UPPER_CASE',
        'HAS_KEYBOARD_LATERAL',
        'HAS_SEQUENTIAL_CHAR'
      ])
})
# @kaffee/mazagran

强壮口令检验

## Support

* [x] 口令的长度和是否在指定字符集合内
* [x] 口令字符逻辑相邻的能力，如aBc，abC等
* [x] 口令字符键盘物理位置相邻的能力，包括横向和左右斜线方向的相邻，如qwer 1qaz 0okm等
* [x] 口令是否出现在弱口令库中的能力
* [x] 相邻单字符多次重复
* [x] 口令应为英文字母(区分大小写)+数字+特殊字符三者的组合
* [x] 口令最大最小长度
* [x] 口令特殊字符集

## Installation

Install with npm

```bash
  npm install --dev @kaffee/mazagran
```

Install with yarn

```bash
  yarn add --dev @kaffee/mazagran
```

Install with pnpm

```bash
  pnpm add -D @kaffee/mazagran
```

## Online Demo

[Online Check Demo](https://mazagran.rikka.cc/)

## Usage/Examples

### Base Usage
```typescript
  const mazagran = new Mazagran();
  mazagran.checkAll("password") // return err dict
```

## License

[GPL](https://choosealicense.com/licenses/gpl-3.0/)

## Contributors

<a href="https://github.com/Muromi-Rikka" >
  <img style="border-radius:200px;" src="https://github.com/Muromi-Rikka.png?size=50">
</a>

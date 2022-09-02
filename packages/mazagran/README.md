# @kaffee/mazagran

Enhance password strength

## Support

* [x] The length and whether the password is in the specified character set
* [x] The ability of password characters to be logically adjacent, such as aBc, abC, etc.
* [x] The ability to be adjacent to the physical position of the password character keyboard, including the adjacent horizontal and left and right slash directions, such as qwer 1qaz 0okm, etc.
* [x] Ability to see if a password is present in a weak password pool
* [x] Adjacent single character repeated multiple times
* [x] The password should be a combination of English letters (case sensitive) + numbers + special characters
* [x] Password maximum and minimum length
* [x] Password special character set

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

### Config

|  check type   | description  |
|  ----  | ----  |
| PASSWORD_LENGTH | check password length |
| CONTAIN_DIGIT | check password contains numbers |
| CASE | check password contains case |
| LOWER_CASE | check password contains lower case |
| UPPER_CASE | check password contains upper case |
| SPECIAL_CHAR | check password contains special char |
| HORIZONTAL_KEY_SEQUENTIAL | check password contains horizontal keyboard key |
| SLANT_KEY_SEQUENTIAL | check password contains slant keyboard key |
| LOGIC_SEQUENTIAL | check password contains logic char |
| SEQUENTIAL_CHAR_SAME | check password contains same char |
## License

[GPL](https://choosealicense.com/licenses/gpl-3.0/)

## Contributors

<a href="https://github.com/Muromi-Rikka" >
  <img style="border-radius:200px;" src="https://github.com/Muromi-Rikka.png?size=50">
</a>

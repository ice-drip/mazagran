# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

`@kaffee/mazagran` is a TypeScript library for password strength validation with plugin support, internationalization, and strength scoring. It checks passwords against configurable rules including length, character types, keyboard patterns (horizontal/slant), logical sequences, and repeated characters.

## Commands

```bash
# Build the library
pnpm build

# Run all tests
pnpm test

# Build playground only
pnpm --filter @mazagran/playground build

# Run tests in watch mode (from test/ directory)
cd test && pnpm test -- --watch
```

## Architecture

### Monorepo Structure (pnpm workspaces)

- `packages/mazagran` - Core library (npm: `@kaffee/mazagran`)
- `packages/playground` - Angular 19 demo app
- `test/` - Jest test suite

### Core Library (`packages/mazagran/src/`)

- **`mazagran.ts`** - `Mazagran` class with validation logic, plugin system, and scoring
- **`types.ts`** - TypeScript enums, interfaces, and type definitions
- **`rules/`** - Built-in validation rules (length, digit, case, special, keyboard, sequential)
- **`locales/`** - i18n message dictionaries (zh-CN, en-US)
- **`utils/`** - Utility functions (score calculation, string helpers)

### Key Features

1. **Plugin System**: Register custom validation rules via `registerRule()` / `removeRule()`
2. **Internationalization**: Built-in zh-CN and en-US locale support, extensible via `customMessages`
3. **Strength Scoring**: Optional 0-100 score with weak/fair/good/strong levels
4. **Static Validation**: Quick validation via `Mazagran.validate()` static method

### Validation Flow

1. `Mazagran` constructor accepts optional `MazagranConfig` object
2. `checkAll(password)` runs enabled checks and returns `CheckResult` with `errors`, `passes`, `messages`, and optional `score`/`level`
3. Each rule implements `ValidationRule` interface with `check()` method
4. `Mazagran.validate(password, config?)` provides static one-call validation

### Check Types

| CheckType | Error Key | Description |
|-----------|-----------|-------------|
| `PasswordLength` | `PASSWORD_LENGTH_ERR` | Min/max length validation |
| `ContainDigit` | `NOT_CONTAIN_DIGIT` | Must contain digits |
| `Case` | `NOT_CONTAIN_CASE` | Must contain letters |
| `LowerCase` | `NOT_CONTAIN_LOWER_CASE` | Must contain lowercase |
| `UpperCase` | `NOT_CONTAIN_UPPER_CASE` | Must contain uppercase |
| `SpecialChar` | `NOT_CONTAIN_SPECIAL_CHAR` | Must contain special chars |
| `HorizontalKeySequential` | `HAS_KEYBOARD_SEQUENTIAL` | Keyboard horizontal sequences (qwer) |
| `SlantKeySequential` | `HAS_KEYBOARD_SLANT` | Keyboard slant sequences (1qaz) |
| `LogicSequential` | `HAS_SEQUENTIAL_CHAR` | Logical sequences (abc, 123) |
| `SequentialCharSame` | `HAS_SEQUENTIAL_SAME_CHAR` | Repeated characters (aaa) |

### Build Output

tsup generates two formats:
- `dist/index.js` - CommonJS
- `dist/esm/index.js` - ES Module

## Code Style

- Chinese comments in source code (documentation purpose)
- Chinese error messages in `locales/zh-CN.ts`
- Prettier configured: double quotes, no trailing commas, 180 print width

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

`@kaffee/mazagran` is a TypeScript library for password strength validation. It checks passwords against configurable rules including length, character types, keyboard patterns (horizontal/slant), logical sequences, and repeated characters.

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

- **`index.ts`** - `Mazagran` class with all validation logic
- **`config.ts`** - `MazagranConfig` class with all configurable options (thresholds, character sets, keyboard patterns)
- **`locales/`** - i18n message dictionaries (zh-CN, en-US)

### Validation Flow

1. `Mazagran` constructor accepts `CheckType[]` and optional `MazagranConfig`
2. `init()` maps `CheckType` enum values to config flags
3. `checkAll(password)` runs enabled checks and returns `{ error: ErrType[], pass: ErrType[] }`
4. Each check method returns `true` if password passes, `false` if it fails

### Check Types

| CheckType | Error Key | Description |
|-----------|-----------|-------------|
| `PASSWORD_LENGTH` | `PASSWORD_LENGTH_ERR` | Min/max length validation |
| `CONTAIN_DIGIT` | `NOT_CONTAIN_DIGIT` | Must contain digits |
| `CASE` | `NOT_CONTAIN_CASE` | Must contain letters |
| `LOWER_CASE` | `NOT_CONTAIN_LOWER_CASE` | Must contain lowercase |
| `UPPER_CASE` | `NOT_CONTAIN_UPPER_CASE` | Must contain uppercase |
| `SPECIAL_CHAR` | `NOT_CONTAIN_SPECIAL_CHAR` | Must contain special chars |
| `HORIZONTAL_KEY_SEQUENTIAL` | `HAS_KEYBOARD_SEQUENTIAL` | Keyboard horizontal sequences (qwer) |
| `SLANT_KEY_SEQUENTIAL` | `HAS_KEYBOARD_SLANT` | Keyboard slant sequences (1qaz) |
| `LOGIC_SEQUENTIAL` | `HAS_SEQUENTIAL_CHAR` | Logical sequences (abc, 123) |
| `SEQUENTIAL_CHAR_SAME` | `HAS_SEQUENTIAL_SAME_CHAR` | Repeated characters (aaa) |

### Build Output

tsup generates three formats:
- `dist/index.js` - CommonJS
- `dist/esm/index.js` - ES Module
- `dist/iife/index.js` - IIFE (for browser)

## Code Style

- Chinese comments in source code (documentation purpose)
- Chinese error messages in `locales/zh-CN.ts`
- Prettier configured: double quotes, no trailing commas, 180 print width

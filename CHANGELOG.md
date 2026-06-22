# Changelog

## [2.0.0] - 2026-06-22

### Added
- Plugin/custom rule system (`registerRule`, `removeRule`)
- Internationalization support (zh-CN/en-US built-in locale packs)
- Strength scoring system (0-100 score, weak/fair/good/strong levels)
- Static method `Mazagran.validate()` for quick validation
- `ValidationRule` interface for custom rule implementation
- `ScoreConfig` interface for scoring configuration
- `StrengthLevel` type for strength categorization
- `LocaleMessages` interface for i18n message structure

### Changed
- Type system modernization: use `enum` instead of string unions
- Configuration mode: use `MazagranConfig` object instead of array parameters
- Return value: `error` → `errors`, added `messages` field
- Architecture: modular rule system in `rules/` directory
- Project structure: moved types to `types.ts`, removed `config.ts` and `constant.ts`

### Breaking Changes

**Keyboard horizontal patterns broadened**: `KEYBOARD_HORIZONTAL_ARR` was expanded from short partial patterns (e.g., `"qwer"`, `"asdf"`) to full-row patterns (e.g., `"qwertyuiop[]\\"`, `"asdfghjkl;'"`). Passwords containing keyboard row sequences that previously passed may now fail the `HORIZONTAL_KEY_SEQUENTIAL` check. To restore v1 behavior, override `keyboardHorizontalArr` in your `MazagranConfig`.

**Same-char rule threshold semantics changed**: In v1, `LIMIT_NUM_SAME_CHAR=3` meant "fail at 4 or more consecutive identical characters." In v2, `limitNumSameChar=3` means "fail at 3 or more consecutive identical characters" (i.e., the limit is now inclusive). If you relied on the old behavior, set `limitNumSameChar` to your previous value + 1.

### Removed
- IIFE build output format
- Legacy `config.ts` (merged into `types.ts`)
- Legacy `constant.ts` (merged into `locales/`)

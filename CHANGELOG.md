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

### Removed
- IIFE build output format
- Legacy `config.ts` (merged into `types.ts`)
- Legacy `constant.ts` (merged into `locales/`)

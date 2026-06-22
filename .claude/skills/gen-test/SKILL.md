---
name: gen-test
description: Generate Jest test cases for Mazagran password checks
disable-model-invocation: true
---

# Generate Tests

Generate comprehensive Jest test cases for Mazagran password strength checks.

## Usage

```
/gen-test <check-type>
```

## Instructions

When invoked with a check type:

1. Read existing test files in `test/test/` for patterns
2. Generate both error and pass cases
3. Include edge cases and boundary conditions
4. Use `MazagranConfig` for custom configurations
5. Output the test file content

## Supported Check Types

- `PASSWORD_LENGTH` - Length validation
- `CONTAIN_DIGIT` - Digit presence
- `CASE` - Letter presence
- `LOWER_CASE` - Lowercase letter presence
- `UPPER_CASE` - Uppercase letter presence
- `SPECIAL_CHAR` - Special character presence
- `HORIZONTAL_KEY_SEQUENTIAL` - Keyboard horizontal sequences
- `SLANT_KEY_SEQUENTIAL` - Keyboard slant sequences
- `LOGIC_SEQUENTIAL` - Logic sequences (abc, 123)
- `SEQUENTIAL_CHAR_SAME` - Repeated characters (aaa)

## Output Format

Generate a test file following this pattern:

```typescript
import { Mazagran, MazagranConfig } from "@kaffee/mazagran";

// Error cases - passwords that should fail
test("[error]password: <password>", () => {
  const mazagran = new Mazagran(["<CHECK_TYPE>"]);
  const result = mazagran.checkAll("<password>");
  expect(result.error.includes("<ERROR_KEY>")).toBe(true);
  expect(result.pass.includes("<ERROR_KEY>")).toBe(false);
});

// Pass cases - passwords that should pass
test("[pass]password: <password>", () => {
  const mazagran = new Mazagran(["<CHECK_TYPE>"]);
  const result = mazagran.checkAll("<password>");
  expect(result.error.includes("<ERROR_KEY>")).toBe(false);
  expect(result.pass.includes("<ERROR_KEY>")).toBe(true);
});
```

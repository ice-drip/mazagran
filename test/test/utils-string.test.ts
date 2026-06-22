import { reverseString, unique, createSubstrings } from '@kaffee/mazagran/utils/string';

describe('reverseString', () => {
  test('reverses a simple string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('reverses an empty string', () => {
    expect(reverseString('')).toBe('');
  });

  test('reverses a single character', () => {
    expect(reverseString('a')).toBe('a');
  });

  test('reverses a palindrome', () => {
    expect(reverseString('racecar')).toBe('racecar');
  });

  test('reverses string with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });
});

describe('unique', () => {
  test('removes duplicate numbers', () => {
    expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
  });

  test('removes duplicate strings', () => {
    expect(unique(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
  });

  test('returns empty array for empty input', () => {
    expect(unique([])).toEqual([]);
  });

  test('returns same array if no duplicates', () => {
    expect(unique([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('handles single element', () => {
    expect(unique([1])).toEqual([1]);
  });
});

describe('createSubstrings', () => {
  test('creates substrings of length 2', () => {
    expect(createSubstrings('abcde', 2)).toEqual(['ab', 'bc', 'cd', 'de']);
  });

  test('creates substrings of length 3', () => {
    expect(createSubstrings('abcde', 3)).toEqual(['abc', 'bcd', 'cde']);
  });

  test('returns empty array when length exceeds string length', () => {
    expect(createSubstrings('ab', 3)).toEqual([]);
  });

  test('returns full string when length equals string length', () => {
    expect(createSubstrings('abc', 3)).toEqual(['abc']);
  });

  test('returns empty array for empty string', () => {
    expect(createSubstrings('', 1)).toEqual([]);
  });

  test('creates substrings of length 1', () => {
    expect(createSubstrings('abc', 1)).toEqual(['a', 'b', 'c']);
  });
});

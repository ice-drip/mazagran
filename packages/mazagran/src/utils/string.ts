/**
 * 反转字符串
 */
export function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

/**
 * 数组去重
 */
export function unique<T>(arr: readonly T[]): T[] {
  return [...new Set(arr)];
}

/**
 * 生成滑动窗口子串数组
 */
export function createSubstrings(str: string, length: number): string[] {
  if (length > str.length) return [];
  return Array.from(
    { length: str.length - length + 1 },
    (_, i) => str.substring(i, i + length)
  );
}

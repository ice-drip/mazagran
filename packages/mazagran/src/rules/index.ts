import type { ValidationRule } from '../types';
import { lengthRule } from './length.rule';
import { digitRule } from './digit.rule';
import { caseRule, lowerCaseRule, upperCaseRule } from './case.rule';
import { specialRule } from './special.rule';
import { horizontalKeyboardRule, slantKeyboardRule } from './keyboard.rule';
import { logicSequentialRule, sameCharRule } from './sequential.rule';

/**
 * 内置规则列表
 */
export const builtinRules: readonly ValidationRule[] = Object.freeze([
  lengthRule,
  digitRule,
  caseRule,
  lowerCaseRule,
  upperCaseRule,
  specialRule,
  horizontalKeyboardRule,
  slantKeyboardRule,
  logicSequentialRule,
  sameCharRule
]);

/**
 * 按类型查找规则
 */
export function findRule(type: string): ValidationRule | undefined {
  return builtinRules.find(rule => rule.type === type);
}

export { lengthRule } from './length.rule';
export { digitRule } from './digit.rule';
export { caseRule, lowerCaseRule, upperCaseRule } from './case.rule';
export { specialRule } from './special.rule';
export { horizontalKeyboardRule, slantKeyboardRule } from './keyboard.rule';
export { logicSequentialRule, sameCharRule } from './sequential.rule';

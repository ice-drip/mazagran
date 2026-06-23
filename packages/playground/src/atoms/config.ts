import { atom } from "jotai";
import { CheckType } from "@kaffee/mazagran";
import type { ValidationRule } from "@kaffee/mazagran";

export const checksAtom = atom<CheckType[]>([
  CheckType.PasswordLength,
  CheckType.ContainDigit,
  CheckType.Case,
  CheckType.LowerCase,
  CheckType.UpperCase,
  CheckType.SpecialChar,
  CheckType.HorizontalKeySequential,
  CheckType.SlantKeySequential,
  CheckType.LogicSequential,
  CheckType.SequentialCharSame
]);

export const advancedModeAtom = atom(false);

export const configAtom = atom({
  minLength: 8,
  maxLength: 20,
  limitHorizontalNumKey: 3,
  limitSlopeNumKey: 3,
  limitLogicNumChar: 3,
  limitNumSameChar: 3
});

export const customRulesAtom = atom<ValidationRule[]>([]);

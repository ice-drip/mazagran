import { useAtomValue } from "jotai";
import { useMemo } from "react";
import { Mazagran } from "@kaffee/mazagran";
import { passwordAtom, checksAtom, configAtom, localeAtom, customRulesAtom } from "@/atoms";

export function useMazagran() {
  const password = useAtomValue(passwordAtom);
  const checks = useAtomValue(checksAtom);
  const config = useAtomValue(configAtom);
  const locale = useAtomValue(localeAtom);
  const customRules = useAtomValue(customRulesAtom);

  const mazagran = useMemo(() => {
    const instance = new Mazagran({
      checks,
      ...config,
      locale,
      score: { enabled: true }
    });
    customRules.forEach((rule) => instance.registerRule(rule));
    return instance;
  }, [checks, config, locale, customRules]);

  const result = useMemo(() => {
    if (!password) return null;
    return mazagran.checkAll(password);
  }, [mazagran, password]);

  return {
    password,
    errors: result?.errors ?? [],
    passes: result?.passes ?? [],
    messages: result?.messages ?? {},
    score: result?.score ?? 0,
    level: result?.level ?? "weak",
    isValid: result ? result.errors.length === 0 : false
  };
}

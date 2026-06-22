import type { LocaleMessages } from '../types';
import { zhCN } from './zh-CN';
import { enUS } from './en-US';

const localeMap: Record<string, LocaleMessages> = {
  zh: zhCN,
  'zh-CN': zhCN,
  en: enUS,
  'en-US': enUS
};

/**
 * 获取语言包
 */
export function getMessages(locale: string, customMessages?: Partial<Record<string, LocaleMessages>>): LocaleMessages {
  const base = localeMap[locale] ?? zhCN;

  if (!customMessages) return base;

  const custom = customMessages[locale];
  if (!custom) return base;

  return { ...base, ...custom };
}

export { zhCN } from './zh-CN';
export { enUS } from './en-US';

import { useAtom } from "jotai";
import { Button } from "@/components/ui/button";
import { localeAtom } from "@/atoms";

export function LocaleSwitch() {
  const [locale, setLocale] = useAtom(localeAtom);

  return (
    <Button variant="ghost" size="sm" onClick={() => setLocale(locale === "zh" ? "en" : "zh")}>
      <span className="icon-[lucide--globe] w-4 h-4 mr-2" />
      {locale === "zh" ? "中文" : "English"}
    </Button>
  );
}

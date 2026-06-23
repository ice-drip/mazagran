import { useAtom } from "jotai";
import { Button } from "@/components/ui/button";
import { themeAtom } from "@/atoms";
import { useEffect } from "react";

export function ThemeSwitch() {
  const [theme, setTheme] = useAtom(themeAtom);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <span className="icon-[lucide--sun] w-4 h-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <span className="icon-[lucide--moon] absolute w-4 h-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}

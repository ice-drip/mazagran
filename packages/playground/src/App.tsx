import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PasswordInput } from "@/components/PasswordInput";
import { StrengthMeter } from "@/components/StrengthMeter";
import { RuleList } from "@/components/RuleList";
import { AdvancedOptions } from "@/components/AdvancedOptions";
import { CustomRuleForm } from "@/components/CustomRuleForm";
import { LocaleSwitch } from "@/components/LocaleSwitch";
import { ThemeSwitch } from "@/components/ThemeSwitch";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="flex justify-between items-center p-4 border-b">
        <h1 className="text-lg font-semibold">Mazagran Playground</h1>
        <div className="flex items-center space-x-2">
          <LocaleSwitch />
          <ThemeSwitch />
        </div>
      </header>
      <main className="max-w-md mx-auto p-6">
        <Card>
          <CardHeader>
            <CardTitle>密码强度检测</CardTitle>
          </CardHeader>
          <CardContent>
            <PasswordInput />
            <StrengthMeter />
            <RuleList />
            <AdvancedOptions />
            <CustomRuleForm />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

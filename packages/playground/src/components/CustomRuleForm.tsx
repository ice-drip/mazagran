import { useState } from "react";
import { useAtom } from "jotai";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { customRulesAtom } from "@/atoms";
import type { ValidationRule } from "@kaffee/mazagran";

export function CustomRuleForm() {
  const [customRules, setCustomRules] = useAtom(customRulesAtom);
  const [newRule, setNewRule] = useState({
    type: "",
    errorKey: "",
    pattern: "",
    weight: 10
  });

  const handleAddRule = () => {
    if (!newRule.type || !newRule.pattern) return;

    const rule: ValidationRule = {
      type: newRule.type,
      errorKey: newRule.errorKey || newRule.type,
      check: (password: string) => !new RegExp(newRule.pattern).test(password),
      weight: newRule.weight
    };

    setCustomRules([...customRules, rule]);
    setNewRule({ type: "", errorKey: "", pattern: "", weight: 10 });
  };

  const handleRemoveRule = (type: string) => {
    setCustomRules(customRules.filter((r) => r.type !== type));
  };

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>自定义规则</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="ruleType">规则类型</Label>
            <Input
              id="ruleType"
              value={newRule.type}
              onChange={(e) => setNewRule({ ...newRule, type: e.target.value })}
              placeholder="NO_BIRTH_YEAR"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="errorKey">错误键名</Label>
            <Input
              id="errorKey"
              value={newRule.errorKey}
              onChange={(e) => setNewRule({ ...newRule, errorKey: e.target.value })}
              placeholder="HAS_BIRTH_YEAR"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="pattern">正则表达式</Label>
            <Input
              id="pattern"
              value={newRule.pattern}
              onChange={(e) => setNewRule({ ...newRule, pattern: e.target.value })}
              placeholder="19\\d{2}|20\\d{2}"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="weight">权重</Label>
            <Input
              id="weight"
              type="number"
              value={newRule.weight}
              onChange={(e) => setNewRule({ ...newRule, weight: Number(e.target.value) })}
            />
          </div>
        </div>

        <Button onClick={handleAddRule} disabled={!newRule.type || !newRule.pattern}>
          添加规则
        </Button>

        {customRules.length > 0 && (
          <div className="space-y-2">
            <Label>已添加的规则：</Label>
            {customRules.map((rule) => (
              <div key={rule.type} className="flex items-center justify-between p-2 bg-muted rounded">
                <span className="text-sm">{rule.type}</span>
                <Button variant="ghost" size="sm" onClick={() => handleRemoveRule(rule.type)}>
                  <span className="icon-[lucide--trash-2] w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

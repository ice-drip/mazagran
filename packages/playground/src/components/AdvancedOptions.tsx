import { useAtom } from "jotai";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { advancedModeAtom, configAtom } from "@/atoms";

export function AdvancedOptions() {
  const [advancedMode, setAdvancedMode] = useAtom(advancedModeAtom);
  const [config, setConfig] = useAtom(configAtom);

  if (!advancedMode) {
    return (
      <div className="mt-4">
        <div className="flex items-center space-x-2">
          <Switch checked={advancedMode} onCheckedChange={setAdvancedMode} />
          <Label>高级选项</Label>
        </div>
      </div>
    );
  }

  return (
    <Card className="mt-4">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>高级选项</CardTitle>
          <Switch checked={advancedMode} onCheckedChange={setAdvancedMode} />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="minLength">最小长度</Label>
            <Input
              id="minLength"
              type="number"
              value={config.minLength}
              onChange={(e) => setConfig({ ...config, minLength: Number(e.target.value) })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="maxLength">最大长度</Label>
            <Input
              id="maxLength"
              type="number"
              value={config.maxLength}
              onChange={(e) => setConfig({ ...config, maxLength: Number(e.target.value) })}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

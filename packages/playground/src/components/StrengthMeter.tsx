import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useMazagran } from "@/hooks/useMazagran";

const levelColors: Record<string, string> = {
  weak: "bg-red-500",
  fair: "bg-orange-500",
  good: "bg-yellow-500",
  strong: "bg-green-500"
};

const levelLabels: Record<string, string> = {
  weak: "弱",
  fair: "一般",
  good: "良好",
  strong: "强"
};

export function StrengthMeter() {
  const { score, level, password } = useMazagran();

  if (!password) return null;

  return (
    <div className="space-y-2 mt-4">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">强度评分</span>
        <span className="text-2xl font-bold">{score}</span>
      </div>
      <Progress value={score} className="h-2" />
      <div className="flex justify-between items-center">
        <Badge variant="secondary">{levelLabels[level]}</Badge>
        <span className="text-xs text-muted-foreground">{score}/100</span>
      </div>
    </div>
  );
}

import { useAtom } from "jotai";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { passwordAtom } from "@/atoms";

export function PasswordInput() {
  const [password, setPassword] = useAtom(passwordAtom);

  return (
    <div className="space-y-2">
      <Label htmlFor="password">密码</Label>
      <Input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="请输入密码"
      />
    </div>
  );
}

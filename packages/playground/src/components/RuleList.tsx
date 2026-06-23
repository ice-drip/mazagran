import { useMazagran } from "@/hooks/useMazagran";

export function RuleList() {
  const { errors, passes, messages, password } = useMazagran();

  if (!password) return null;

  return (
    <div className="space-y-2 mt-4">
      {errors.map((key) => (
        <div key={key} className="flex items-center text-sm text-red-500">
          <span className="icon-[lucide--x-circle] w-4 h-4 mr-2 shrink-0" />
          <span>{messages[key]}</span>
        </div>
      ))}
      {passes.map((key) => (
        <div key={key} className="flex items-center text-sm text-green-500">
          <span className="icon-[lucide--check-circle] w-4 h-4 mr-2 shrink-0" />
          <span>{messages[key]}</span>
        </div>
      ))}
    </div>
  );
}

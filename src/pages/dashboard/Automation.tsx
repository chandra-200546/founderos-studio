import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { PageHeader, SectionHeader } from "@/components/Common";
import { automationRules } from "@/lib/mock-data";
import { Zap, Plus } from "lucide-react";
import { toast } from "sonner";

export default function Automation() {
  const [rules, setRules] = useState(automationRules);

  const toggle = (id: number) => {
    setRules(rules.map((r) => r.id === id ? { ...r, enabled: !r.enabled } : r));
    toast.success("Rule updated");
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Automation"
        description="Autonomous rules that improve your business 24/7."
        action={<Button className="bg-gradient-aurora text-white shadow-glow hover:opacity-90"><Plus className="h-4 w-4 mr-2" /> New rule</Button>}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {rules.map((r) => (
          <Card key={r.id} className="p-5 glass border-border">
            <div className="flex items-start justify-between mb-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-aurora/10 ring-1 ring-primary/20 grid place-items-center">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <Switch checked={r.enabled} onCheckedChange={() => toggle(r.id)} />
            </div>
            <div className="font-display font-semibold mb-1">{r.name}</div>
            <p className="text-sm text-muted-foreground mb-4">{r.description}</p>
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">{r.runs} runs</span>
              <span className={r.enabled ? "text-success" : "text-muted-foreground"}>{r.enabled ? "● Active" : "○ Paused"}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

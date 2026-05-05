import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageHeader, SectionHeader } from "@/components/Common";
import { Check } from "lucide-react";

const plans = [
  { name: "Free", price: "₹0", period: "forever", current: false, features: ["1 business", "Limited AI generations", "Basic blueprint", "Community support"] },
  { name: "Pro", price: "₹999", period: "/mo", current: true, features: ["5 businesses", "All AI agents", "Website builder", "Marketing campaigns", "Export content"], highlight: true },
  { name: "Agency", price: "₹2,999", period: "/mo", current: false, features: ["Unlimited businesses", "Client workspaces", "Export full code", "Advanced automation", "Priority AI"] },
];

export default function Billing() {
  return (
    <div className="space-y-6">
      <PageHeader title="Billing" description="Manage your plan and invoices." />

      <Card className="p-6 glass border-border">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-sm text-muted-foreground">Current plan</div>
            <div className="font-display text-2xl font-bold mt-1 flex items-center gap-2">Pro <Badge className="bg-gradient-aurora text-white border-0">Active</Badge></div>
            <div className="text-sm text-muted-foreground mt-1">₹999/mo · Renews on Jun 1, 2026</div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Manage payment</Button>
            <Button variant="outline">Cancel plan</Button>
          </div>
        </div>
      </Card>

      <div className="grid md:grid-cols-3 gap-4">
        {plans.map((p) => (
          <Card key={p.name} className={`p-6 ${p.highlight ? "ring-2 ring-primary shadow-elegant glass-strong" : "glass border-border"} relative`}>
            {p.highlight && <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-gradient-aurora text-white border-0">Current</Badge>}
            <div className="font-display font-semibold">{p.name}</div>
            <div className="flex items-baseline gap-1 mt-3 mb-4">
              <span className="font-display text-4xl font-bold">{p.price}</span>
              <span className="text-xs text-muted-foreground">{p.period}</span>
            </div>
            <ul className="space-y-2 mb-6">
              {p.features.map((f) => <li key={f} className="flex gap-2 text-sm"><Check className="h-4 w-4 text-primary mt-0.5" />{f}</li>)}
            </ul>
            <Button className={`w-full ${p.highlight ? "bg-gradient-aurora text-white" : ""}`} variant={p.highlight ? "default" : "outline"} disabled={p.current}>
              {p.current ? "Current plan" : `Switch to ${p.name}`}
            </Button>
          </Card>
        ))}
      </div>

      <Card className="p-6 glass border-border">
        <SectionHeader title="Recent invoices" />
        <div className="space-y-2">
          {["May 1, 2026", "Apr 1, 2026", "Mar 1, 2026"].map((d) => (
            <div key={d} className="flex items-center justify-between p-3 rounded-xl bg-muted/30 border border-border text-sm">
              <span>{d}</span>
              <span>Pro · ₹999</span>
              <Badge variant="outline" className="text-success border-success/30">Paid</Badge>
              <Button variant="ghost" size="sm">Download</Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

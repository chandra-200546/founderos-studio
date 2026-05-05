import { Card } from "@/components/ui/card";
import { PageHeader, SectionHeader } from "@/components/Common";
import { performanceData } from "@/lib/mock-data";
import { Sparkles, Users, Target, DollarSign, TrendingUp } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from "recharts";

const stats = [
  { label: "Visitors", value: "12,482", icon: Users, color: "from-violet-500 to-fuchsia-500" },
  { label: "Leads", value: "1,240", icon: Target, color: "from-blue-500 to-cyan-500" },
  { label: "Conversion", value: "3.4%", icon: TrendingUp, color: "from-emerald-500 to-teal-500" },
  { label: "Revenue", value: "$48K", icon: DollarSign, color: "from-amber-500 to-orange-500" },
  { label: "Profit", value: "$31K", icon: TrendingUp, color: "from-pink-500 to-rose-500" },
  { label: "Ad spend", value: "$12K", icon: DollarSign, color: "from-indigo-500 to-violet-500" },
  { label: "ROI", value: "287%", icon: Sparkles, color: "from-cyan-500 to-blue-500" },
  { label: "CAC", value: "$24", icon: Users, color: "from-purple-500 to-pink-500" },
];

const campaigns = [
  { name: "IG Reels - Adaptive AI", spend: "$3.2K", clicks: 8420, conv: 312, cpa: "$10", roi: "412%" },
  { name: "Meta - Founders 25-40", spend: "$2.8K", clicks: 6240, conv: 198, cpa: "$14", roi: "284%" },
  { name: "Google - AI fitness", spend: "$2.1K", clicks: 4120, conv: 124, cpa: "$17", roi: "198%" },
  { name: "LinkedIn - Pros", spend: "$1.4K", clicks: 1820, conv: 42, cpa: "$33", roi: "112%" },
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      <PageHeader title="Analytics" description="Performance across all your channels." />

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3">
        {stats.map((s) => (
          <Card key={s.label} className="p-4 glass border-border">
            <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${s.color} grid place-items-center mb-2`}><s.icon className="h-4 w-4 text-white" /></div>
            <div className="text-xs text-muted-foreground">{s.label}</div>
            <div className="font-display font-bold text-xl">{s.value}</div>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6 glass border-border">
          <SectionHeader title="Revenue trend" />
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ background: "hsl(var(--popover))", border: "1px solid hsl(var(--border))", borderRadius: 12, fontSize: 12 }} />
                <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ fill: "hsl(var(--primary))", r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card className="p-6 glass border-border">
          <SectionHeader title="Conversion funnel" />
          <div className="space-y-3 mt-2">
            {[
              { label: "Visitors", value: 12482, pct: 100 },
              { label: "Engaged", value: 5240, pct: 42 },
              { label: "Leads", value: 1240, pct: 10 },
              { label: "Trials", value: 580, pct: 4.6 },
              { label: "Paid", value: 220, pct: 1.8 },
            ].map((f) => (
              <div key={f.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">{f.label}</span>
                  <span className="font-medium">{f.value.toLocaleString()} <span className="text-muted-foreground">({f.pct}%)</span></span>
                </div>
                <div className="h-3 rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-gradient-aurora rounded-full" style={{ width: `${f.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6 glass border-border">
        <SectionHeader title="Campaign performance" />
        <div className="overflow-x-auto -mx-2">
          <table className="w-full text-sm">
            <thead><tr className="text-xs text-muted-foreground uppercase tracking-wider">
              {["Campaign", "Spend", "Clicks", "Conversions", "CPA", "ROI"].map((h) => <th key={h} className="text-left font-medium px-2 py-2">{h}</th>)}
            </tr></thead>
            <tbody>
              {campaigns.map((c) => (
                <tr key={c.name} className="border-t border-border hover:bg-muted/30">
                  <td className="px-2 py-3 font-medium">{c.name}</td>
                  <td className="px-2 py-3">{c.spend}</td>
                  <td className="px-2 py-3">{c.clicks.toLocaleString()}</td>
                  <td className="px-2 py-3">{c.conv}</td>
                  <td className="px-2 py-3">{c.cpa}</td>
                  <td className="px-2 py-3 font-medium text-success">{c.roi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="p-6 glass border-border">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-8 w-8 rounded-lg bg-gradient-aurora grid place-items-center"><Sparkles className="h-4 w-4 text-white" /></div>
          <div>
            <div className="font-display font-semibold">AI insights</div>
            <div className="text-xs text-muted-foreground">From the Analytics Agent</div>
          </div>
        </div>
        <ul className="space-y-2">
          {[
            "Your landing page conversion is 1.8% — below benchmark. Consider clearer headline copy.",
            "Pricing may be too high for the 25-30 segment. Test a $9 entry tier.",
            "Instagram reels are converting 3.2x better than static posts. Shift budget allocation.",
            "Your 7-day funnel drops 41% on day 3. Add a personalized nudge.",
          ].map((r) => (
            <li key={r} className="flex gap-3 p-3 rounded-xl bg-gradient-aurora/5 border border-primary/20 text-sm">
              <Sparkles className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />{r}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

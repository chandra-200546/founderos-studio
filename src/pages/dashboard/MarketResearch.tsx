import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader, SectionHeader } from "@/components/Common";
import { competitors } from "@/lib/mock-data";
import { TrendingUp, AlertTriangle, Lightbulb, Users, Sparkles } from "lucide-react";

export default function MarketResearch() {
  const insights = [
    "Demand is up 34% year-over-year for AI-personalized fitness solutions.",
    "Users on average switch fitness apps every 4 months — opportunity for retention play.",
    "Competitor TrainAI just raised $12M — pricing pressure expected in next quarter.",
  ];

  const pains = [
    "Generic workout plans that don't adapt",
    "Boring static content with no community",
    "Hidden upsells and confusing pricing tiers",
    "Lack of accountability and progress tracking",
  ];

  return (
    <div className="space-y-6">
      <PageHeader title="Market Research" description="Live data from your Market Research and Competitor agents." />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Demand level", value: "High", icon: TrendingUp, gradient: "from-emerald-500 to-teal-500" },
          { label: "Trend score", value: "8.4 / 10", icon: Sparkles, gradient: "from-violet-500 to-fuchsia-500" },
          { label: "Audience size", value: "12.4M", icon: Users, gradient: "from-blue-500 to-cyan-500" },
          { label: "Risk level", value: "Medium", icon: AlertTriangle, gradient: "from-amber-500 to-orange-500" },
        ].map((s) => (
          <Card key={s.label} className="p-5 glass border-border">
            <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${s.gradient} grid place-items-center mb-3`}><s.icon className="h-5 w-5 text-white" /></div>
            <div className="text-xs text-muted-foreground">{s.label}</div>
            <div className="font-display font-bold text-2xl mt-1">{s.value}</div>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6 glass border-border">
          <SectionHeader title="Target audience" description="Who you're building for" />
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-muted/30 border border-border">
              <div className="font-medium text-sm mb-1">Working professionals 25-40</div>
              <p className="text-xs text-muted-foreground">High income, low time. Seeking efficient, personalized fitness with measurable results.</p>
            </div>
            <div className="p-4 rounded-xl bg-muted/30 border border-border">
              <div className="font-medium text-sm mb-1">New parents 28-45</div>
              <p className="text-xs text-muted-foreground">Want to get back in shape with home workouts that adapt to their changing schedule.</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 glass border-border">
          <SectionHeader title="Customer pain points" />
          <ul className="space-y-2">
            {pains.map((p, i) => (
              <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-muted/30">
                <div className="h-6 w-6 rounded-full bg-destructive/10 text-destructive grid place-items-center text-xs flex-shrink-0">!</div>
                <span className="text-sm">{p}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className="p-6 glass border-border">
        <SectionHeader title="Competitor landscape" description="Top 4 competitors and where you can win" />
        <div className="overflow-x-auto -mx-2">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-muted-foreground uppercase tracking-wider">
                <th className="text-left font-medium px-2 py-2">Competitor</th>
                <th className="text-left font-medium px-2 py-2">Strength</th>
                <th className="text-left font-medium px-2 py-2 hidden sm:table-cell">Weakness</th>
                <th className="text-left font-medium px-2 py-2">Pricing</th>
                <th className="text-left font-medium px-2 py-2 hidden md:table-cell">Opportunity gap</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((c) => (
                <tr key={c.name} className="border-t border-border hover:bg-muted/30">
                  <td className="px-2 py-3 font-medium">{c.name}</td>
                  <td className="px-2 py-3 text-muted-foreground">{c.strength}</td>
                  <td className="px-2 py-3 text-muted-foreground hidden sm:table-cell">{c.weakness}</td>
                  <td className="px-2 py-3 font-medium">{c.pricing}</td>
                  <td className="px-2 py-3 hidden md:table-cell"><Badge variant="outline" className="bg-gradient-aurora/5 border-primary/30 text-primary">{c.gap}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6 glass border-border">
          <SectionHeader title="Risks" />
          <ul className="space-y-2">
            {["Big-tech entrants in AI fitness space", "User churn after first 30 days", "Compute costs of AI personalization at scale"].map((r) => (
              <li key={r} className="flex gap-3 text-sm p-3 rounded-xl bg-destructive/5 border border-destructive/20"><AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />{r}</li>
            ))}
          </ul>
        </Card>
        <Card className="p-6 glass border-border">
          <SectionHeader title="Opportunities" />
          <ul className="space-y-2">
            {["Underserved segment: working parents", "AI nutrition tie-in with workout plans", "B2B partnerships with corporate wellness programs"].map((r) => (
              <li key={r} className="flex gap-3 text-sm p-3 rounded-xl bg-success/5 border border-success/20"><Lightbulb className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />{r}</li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className="p-6 glass border-border">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-8 w-8 rounded-lg bg-gradient-aurora grid place-items-center"><Sparkles className="h-4 w-4 text-white" /></div>
          <div>
            <div className="font-display font-semibold">AI recommendations</div>
            <div className="text-xs text-muted-foreground">From the Market Research Agent</div>
          </div>
        </div>
        <ul className="space-y-2">
          {insights.map((r) => (
            <li key={r} className="flex gap-3 p-3 rounded-xl bg-gradient-aurora/5 border border-primary/20 text-sm">
              <Sparkles className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              {r}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

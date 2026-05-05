import { Card } from "@/components/ui/card";
import { PageHeader, SectionHeader } from "@/components/Common";
import { CopyButton } from "@/components/ActionButtons";

const canvas = [
  { title: "Customer segments", items: ["Busy professionals 25-40", "New parents", "Fitness beginners"] },
  { title: "Value propositions", items: ["AI plans that adapt daily", "Real coach-level personalization", "Habit-forming streaks"] },
  { title: "Channels", items: ["Instagram organic", "Google search ads", "Influencer partnerships"] },
  { title: "Customer relationships", items: ["AI coach chat", "Weekly check-ins", "Community challenges"] },
  { title: "Revenue streams", items: ["Subscription $19/mo", "Annual plan $149", "Add-on nutrition"] },
  { title: "Key resources", items: ["AI training models", "Content library", "Coach network"] },
  { title: "Key activities", items: ["Plan generation", "Community building", "Content creation"] },
  { title: "Key partners", items: ["Wearable companies", "Nutrition brands", "Influencer creators"] },
  { title: "Cost structure", items: ["AI compute", "Content production", "Marketing spend"] },
];

const roadmap = [
  { day: "Day 1-3", items: ["Lock down brand", "Buy domain", "Set up analytics"] },
  { day: "Day 4-7", items: ["Ship landing page", "Launch waitlist", "Start content"] },
  { day: "Day 8-14", items: ["First Instagram campaign", "Email sequence live", "Beta sign-ups"] },
  { day: "Day 15-21", items: ["Open beta", "Gather testimonials", "Iterate copy"] },
  { day: "Day 22-30", items: ["Public launch", "Paid ads on", "Optimize funnels"] },
];

export default function Strategy() {
  return (
    <div className="space-y-6">
      <PageHeader title="Strategy" description="Your AI-built business model and 30-day launch plan." />

      <Card className="p-6 glass border-border">
        <SectionHeader title="Business model canvas" />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {canvas.map((c) => (
            <div key={c.title} className="p-4 rounded-xl bg-muted/30 border border-border">
              <div className="text-xs uppercase tracking-wider font-semibold text-primary mb-2">{c.title}</div>
              <ul className="space-y-1">
                {c.items.map((i) => <li key={i} className="text-sm">{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {[
          { title: "Revenue model", content: "Freemium SaaS with $19/mo Pro tier and $149/yr annual. Target ARPU $25 with 35% annual conversion." },
          { title: "Unique selling proposition", content: "The only fitness app that uses 24/7 AI to redesign your plan after every workout, life event, or skipped session." },
          { title: "Positioning", content: "Premium yet accessible. 'A real personal trainer for the price of a coffee — that never sleeps.'" },
          { title: "Pricing strategy", content: "Anchor with annual plan. Free 7-day trial. Heavy emphasis on $19 monthly to remove price objections." },
          { title: "Go-to-market plan", content: "Launch with influencer-driven Instagram + organic content. Layer in Meta retargeting after week 2. Email funnel converts trial to paid." },
        ].map((s) => (
          <Card key={s.title} className="p-6 glass border-border relative">
            <div className="absolute top-3 right-3"><CopyButton text={s.content} /></div>
            <div className="font-display font-semibold mb-2">{s.title}</div>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.content}</p>
          </Card>
        ))}
      </div>

      <Card className="p-6 glass border-border">
        <SectionHeader title="30-day launch roadmap" />
        <div className="space-y-4">
          {roadmap.map((r, i) => (
            <div key={r.day} className="grid sm:grid-cols-[120px_1fr] gap-4 pb-4 last:pb-0 border-b border-border last:border-0">
              <div className="font-display font-semibold text-primary">{r.day}</div>
              <div className="grid sm:grid-cols-3 gap-2">
                {r.items.map((it) => (
                  <div key={it} className="flex items-start gap-2 p-2 rounded-lg bg-muted/30 border border-border text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-aurora mt-2 flex-shrink-0" />
                    {it}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

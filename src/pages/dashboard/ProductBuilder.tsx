import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageHeader, SectionHeader } from "@/components/Common";
import { CopyButton, RegenerateButton } from "@/components/ActionButtons";
import { Check, Sparkles } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const packages = [
  { name: "Starter", price: "₹0", period: "free", description: "Try it out", features: ["3 AI workouts/week", "Basic plan", "Community access"], highlight: false },
  { name: "Pro", price: "₹1,499", period: "/ month", description: "Most popular", features: ["Unlimited AI workouts", "Adaptive nutrition", "Live AI coach chat", "Progress analytics"], highlight: true },
  { name: "Coach+", price: "₹4,999", period: "/ month", description: "For serious athletes", features: ["Everything in Pro", "1:1 monthly call", "Wearable integration", "Custom meal plans"], highlight: false },
];

const features = ["Adaptive AI plans", "24/7 AI coach chat", "Wearable sync", "Community challenges", "Habit streaks", "Nutrition guidance"];
const benefits = ["Save 10+ hours weekly", "See results in 30 days", "Never plateau again", "Build lifelong habits"];

export default function ProductBuilder() {
  return (
    <div className="space-y-6">
      <PageHeader title="Product Builder" description="Your offerings, packaged for conversion." />

      <Card className="p-6 glass border-border">
        <SectionHeader title="Product description" action={<><CopyButton text="..." /><RegenerateButton /></>} />
        <p className="text-base leading-relaxed">FitFlow AI is an autonomous personal trainer that builds, adapts, and re-personalizes your fitness journey in real time. Every workout, meal, and habit is powered by AI that learns from your performance, energy, and goals — so you never plateau and never train alone.</p>
      </Card>

      <Card className="p-6 glass border-border">
        <SectionHeader title="Pricing packages" action={<RegenerateButton />} />
        <div className="grid md:grid-cols-3 gap-4">
          {packages.map((p) => (
            <Card key={p.name} className={`p-5 relative ${p.highlight ? "ring-2 ring-primary shadow-elegant" : "border-border"}`}>
              {p.highlight && <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-gradient-aurora text-white border-0">Best value</Badge>}
              <div className="font-display font-semibold">{p.name}</div>
              <div className="text-xs text-muted-foreground mb-3">{p.description}</div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-display text-3xl font-bold">{p.price}</span>
                <span className="text-xs text-muted-foreground">{p.period}</span>
              </div>
              <ul className="space-y-2 mb-4">
                {p.features.map((f) => <li key={f} className="flex items-start gap-2 text-sm"><Check className="h-3.5 w-3.5 text-primary mt-1 flex-shrink-0" />{f}</li>)}
              </ul>
              <Button className={`w-full ${p.highlight ? "bg-gradient-aurora text-white" : ""}`} variant={p.highlight ? "default" : "outline"}>Choose plan</Button>
            </Card>
          ))}
        </div>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6 glass border-border">
          <SectionHeader title="Features" action={<RegenerateButton />} />
          <div className="grid grid-cols-2 gap-2">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-2 p-3 rounded-xl bg-muted/30 border border-border text-sm">
                <Sparkles className="h-3.5 w-3.5 text-primary" />{f}
              </div>
            ))}
          </div>
        </Card>
        <Card className="p-6 glass border-border">
          <SectionHeader title="Benefits" action={<RegenerateButton />} />
          <ul className="space-y-2">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3 p-3 rounded-xl bg-success/5 border border-success/20 text-sm"><Check className="h-4 w-4 text-success" />{b}</li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className="p-6 glass border-border">
        <SectionHeader title="Customer transformation" action={<CopyButton text="..." />} />
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-destructive/5 border border-destructive/20">
            <div className="text-xs uppercase tracking-wider font-semibold text-destructive mb-2">Before</div>
            <p className="text-sm">Stuck doing the same workouts. No clear progress. Constant motivation drops. Plateaus after week 3.</p>
          </div>
          <div className="p-5 rounded-xl bg-success/5 border border-success/20">
            <div className="text-xs uppercase tracking-wider font-semibold text-success mb-2">After</div>
            <p className="text-sm">A coach in your pocket that adapts daily. Visible progress every week. Habit-forming streaks. No more plateaus.</p>
          </div>
        </div>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6 glass border-border">
          <SectionHeader title="Upsell ideas" action={<RegenerateButton />} />
          <ul className="space-y-2">
            {["Annual plan upgrade with 30% savings", "Premium nutrition add-on (₹499/mo)", "1:1 monthly coach call ($49)", "Workout gear bundles"].map((u) => (
              <li key={u} className="flex gap-3 p-3 rounded-xl bg-muted/30 border border-border text-sm"><Sparkles className="h-4 w-4 text-primary" />{u}</li>
            ))}
          </ul>
        </Card>
        <Card className="p-6 glass border-border">
          <SectionHeader title="FAQ generator" action={<RegenerateButton />} />
          <Accordion type="single" collapsible>
            {[
              { q: "Do I need any equipment?", a: "No. Plans adapt to whatever you have — even just bodyweight." },
              { q: "What if I miss a workout?", a: "AI re-plans your week. No guilt, no broken streaks." },
              { q: "Can I cancel anytime?", a: "Yes. One click. No questions." },
            ].map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-border">
                <AccordionTrigger className="text-sm font-medium hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </div>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PageHeader } from "@/components/Common";
import { Check, Sparkles, ArrowLeft, ArrowRight, Bot } from "lucide-react";
import { agents } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const stepLabels = ["Basic Details", "Business Goal", "Preferences", "Review & Generate"];

export default function NewBusiness() {
  const [step, setStep] = useState(0);
  const [generating, setGenerating] = useState(false);
  const [form, setForm] = useState({
    name: "", industry: "SaaS", mode: "online", location: "Bengaluru, India", budget: "Medium ($1K-$5K)", skills: "", experience: "intermediate",
    goal: "", audience: "", revenue: "$10K MRR in 6 months", timeline: "3 months",
    budgetTier: "medium", launch: "fast", productType: "saas", team: "solo",
  });
  const navigate = useNavigate();

  const update = (k: string, v: string) => setForm({ ...form, [k]: v });

  if (generating) return <GeneratingScreen onDone={() => navigate("/app/businesses")} />;

  return (
    <div>
      <PageHeader title="Create new business" description="Tell our AI agents what you want to build." />

      <div className="grid lg:grid-cols-[280px_1fr] gap-8">
        {/* Stepper */}
        <Card className="p-5 glass border-border h-fit lg:sticky lg:top-24">
          <div className="space-y-1">
            {stepLabels.map((label, i) => (
              <button key={i} onClick={() => i < step && setStep(i)} className={cn("w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all text-left", i === step ? "bg-gradient-aurora/10 ring-1 ring-primary/30" : i < step ? "text-muted-foreground" : "text-muted-foreground/60")}>
                <div className={cn("h-6 w-6 rounded-full grid place-items-center text-xs font-semibold flex-shrink-0", i < step ? "bg-gradient-aurora text-white" : i === step ? "bg-gradient-aurora text-white shadow-glow" : "bg-muted")}>
                  {i < step ? <Check className="h-3 w-3" /> : i + 1}
                </div>
                <span className={cn(i === step && "text-foreground font-medium")}>{label}</span>
              </button>
            ))}
          </div>
        </Card>

        <Card className="p-6 lg:p-8 glass border-border">
          <AnimatePresence mode="wait">
            <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
              {step === 0 && (
                <div className="space-y-5">
                  <div>
                    <h2 className="font-display text-xl font-semibold">Basic details</h2>
                    <p className="text-sm text-muted-foreground mt-1">Help us understand your starting point.</p>
                  </div>
                  <Field label="Business name (optional)"><Input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="e.g. FitFlow AI" /></Field>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Industry / niche">
                      <Select value={form.industry} onValueChange={(v) => update("industry", v)}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>{["SaaS", "E-commerce", "EdTech", "Health & Fitness", "Food & Beverage", "FinTech", "Creator Economy"].map((x) => <SelectItem key={x} value={x}>{x}</SelectItem>)}</SelectContent>
                      </Select>
                    </Field>
                    <Field label="Business mode">
                      <RadioGroup value={form.mode} onValueChange={(v) => update("mode", v)} className="flex gap-2">
                        {["online", "offline", "both"].map((m) => (
                          <label key={m} className={cn("flex-1 cursor-pointer rounded-lg border px-3 py-2 text-sm capitalize text-center transition", form.mode === m ? "bg-gradient-aurora/10 border-primary text-primary" : "border-border")}>
                            <RadioGroupItem value={m} className="sr-only" />{m}
                          </label>
                        ))}
                      </RadioGroup>
                    </Field>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Location"><Input value={form.location} onChange={(e) => update("location", e.target.value)} /></Field>
                    <Field label="Budget">
                      <Select value={form.budget} onValueChange={(v) => update("budget", v)}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>{["Bootstrap (<$1K)", "Medium ($1K-$5K)", "High ($5K-$25K)", "Funded ($25K+)"].map((x) => <SelectItem key={x} value={x}>{x}</SelectItem>)}</SelectContent>
                      </Select>
                    </Field>
                  </div>
                  <Field label="Your skills"><Textarea rows={2} value={form.skills} onChange={(e) => update("skills", e.target.value)} placeholder="e.g. marketing, product, design..." /></Field>
                  <Field label="Experience level">
                    <RadioGroup value={form.experience} onValueChange={(v) => update("experience", v)} className="grid grid-cols-3 gap-2">
                      {["beginner", "intermediate", "expert"].map((m) => (
                        <label key={m} className={cn("cursor-pointer rounded-lg border px-3 py-2 text-sm capitalize text-center transition", form.experience === m ? "bg-gradient-aurora/10 border-primary text-primary" : "border-border")}>
                          <RadioGroupItem value={m} className="sr-only" />{m}
                        </label>
                      ))}
                    </RadioGroup>
                  </Field>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-5">
                  <div>
                    <h2 className="font-display text-xl font-semibold">What do you want to build?</h2>
                    <p className="text-sm text-muted-foreground mt-1">The clearer your goal, the better the AI plan.</p>
                  </div>
                  <Field label="Business goal"><Textarea rows={4} value={form.goal} onChange={(e) => update("goal", e.target.value)} placeholder="e.g. An AI personal trainer app for busy professionals..." /></Field>
                  <Field label="Target audience"><Input value={form.audience} onChange={(e) => update("audience", e.target.value)} placeholder="e.g. Working professionals 25-40 with low workout time" /></Field>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Revenue goal"><Input value={form.revenue} onChange={(e) => update("revenue", e.target.value)} /></Field>
                    <Field label="Timeline">
                      <Select value={form.timeline} onValueChange={(v) => update("timeline", v)}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>{["1 month", "3 months", "6 months", "1 year"].map((x) => <SelectItem key={x} value={x}>{x}</SelectItem>)}</SelectContent>
                      </Select>
                    </Field>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-display text-xl font-semibold">Your preferences</h2>
                    <p className="text-sm text-muted-foreground mt-1">We'll tune our agents to your style.</p>
                  </div>
                  <Field label="Budget tier">
                    <RadioGroup value={form.budgetTier} onValueChange={(v) => update("budgetTier", v)} className="grid grid-cols-3 gap-2">
                      {[{ v: "low", l: "Low budget" }, { v: "medium", l: "Medium budget" }, { v: "high", l: "High budget" }].map((m) => (
                        <label key={m.v} className={cn("cursor-pointer rounded-lg border px-3 py-3 text-sm text-center transition", form.budgetTier === m.v ? "bg-gradient-aurora/10 border-primary text-primary" : "border-border")}>
                          <RadioGroupItem value={m.v} className="sr-only" />{m.l}
                        </label>
                      ))}
                    </RadioGroup>
                  </Field>
                  <Field label="Approach">
                    <RadioGroup value={form.launch} onValueChange={(v) => update("launch", v)} className="grid grid-cols-2 gap-2">
                      {[{ v: "fast", l: "Fast launch" }, { v: "longterm", l: "Long-term brand" }].map((m) => (
                        <label key={m.v} className={cn("cursor-pointer rounded-lg border px-3 py-3 text-sm text-center transition", form.launch === m.v ? "bg-gradient-aurora/10 border-primary text-primary" : "border-border")}>
                          <RadioGroupItem value={m.v} className="sr-only" />{m.l}
                        </label>
                      ))}
                    </RadioGroup>
                  </Field>
                  <Field label="Product type">
                    <RadioGroup value={form.productType} onValueChange={(v) => update("productType", v)} className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[{ v: "digital", l: "Digital" }, { v: "physical", l: "Physical" }, { v: "saas", l: "SaaS" }, { v: "service", l: "Service" }].map((m) => (
                        <label key={m.v} className={cn("cursor-pointer rounded-lg border px-3 py-3 text-sm text-center transition", form.productType === m.v ? "bg-gradient-aurora/10 border-primary text-primary" : "border-border")}>
                          <RadioGroupItem value={m.v} className="sr-only" />{m.l}
                        </label>
                      ))}
                    </RadioGroup>
                  </Field>
                  <Field label="Team">
                    <RadioGroup value={form.team} onValueChange={(v) => update("team", v)} className="grid grid-cols-2 gap-2">
                      {[{ v: "solo", l: "Solo founder" }, { v: "team", l: "Team" }].map((m) => (
                        <label key={m.v} className={cn("cursor-pointer rounded-lg border px-3 py-3 text-sm text-center transition", form.team === m.v ? "bg-gradient-aurora/10 border-primary text-primary" : "border-border")}>
                          <RadioGroupItem value={m.v} className="sr-only" />{m.l}
                        </label>
                      ))}
                    </RadioGroup>
                  </Field>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-5">
                  <div>
                    <h2 className="font-display text-xl font-semibold">Review & generate</h2>
                    <p className="text-sm text-muted-foreground mt-1">Our agents will go to work the moment you click below.</p>
                  </div>
                  <Card className="p-5 bg-muted/30 border-border space-y-3 text-sm">
                    {[
                      ["Business", form.name || "Untitled"],
                      ["Industry", form.industry],
                      ["Mode", form.mode],
                      ["Location", form.location],
                      ["Budget", form.budget],
                      ["Goal", form.goal || "—"],
                      ["Audience", form.audience || "—"],
                      ["Revenue target", form.revenue],
                      ["Timeline", form.timeline],
                      ["Product type", form.productType],
                      ["Team", form.team],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-3 border-b border-border last:border-0 pb-2 last:pb-0">
                        <span className="text-muted-foreground">{k}</span>
                        <span className="font-medium text-right">{v}</span>
                      </div>
                    ))}
                  </Card>
                  <Button onClick={() => setGenerating(true)} className="w-full h-12 bg-gradient-aurora text-white shadow-glow hover:opacity-90 text-base">
                    <Sparkles className="h-4 w-4 mr-2" /> Generate Business Blueprint
                  </Button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between pt-6 mt-6 border-t border-border">
            <Button variant="ghost" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}>
              <ArrowLeft className="h-4 w-4 mr-1" /> Back
            </Button>
            <span className="text-xs text-muted-foreground">Step {step + 1} of {stepLabels.length}</span>
            {step < 3 ? (
              <Button onClick={() => setStep(Math.min(3, step + 1))} className="bg-gradient-aurora text-white shadow-glow hover:opacity-90">Continue <ArrowRight className="h-4 w-4 ml-1" /></Button>
            ) : <div />}
          </div>
        </Card>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label className="text-sm">{label}</Label>
      {children}
    </div>
  );
}

function GeneratingScreen({ onDone }: { onDone: () => void }) {
  const usedAgents = agents.slice(0, 7);
  const [progress, setProgress] = useState(0);

  useState(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= usedAgents.length) {
          clearInterval(interval);
          setTimeout(() => { toast.success("Business blueprint ready!"); onDone(); }, 800);
          return p;
        }
        return p + 1;
      });
    }, 900);
    return () => clearInterval(interval);
  });

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <Card className="p-8 lg:p-12 glass-strong border-border max-w-2xl w-full relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-50" />
        <div className="relative">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="h-16 w-16 mx-auto rounded-2xl bg-gradient-aurora flex items-center justify-center shadow-glow">
            <Bot className="h-8 w-8 text-white" />
          </motion.div>
          <h2 className="font-display text-2xl font-bold text-center mt-6 mb-2">Generating your business blueprint</h2>
          <p className="text-center text-muted-foreground mb-8">7 AI agents are collaborating to ship your business.</p>

          <div className="space-y-3">
            {usedAgents.map((a, i) => (
              <motion.div
                key={a.id}
                initial={{ opacity: 0.4 }}
                animate={{ opacity: i < progress ? 1 : i === progress ? 1 : 0.4 }}
                className={cn("flex items-center gap-3 p-3 rounded-xl border transition-all", i < progress ? "border-success/30 bg-success/5" : i === progress ? "border-primary/30 bg-gradient-aurora/5" : "border-border")}
              >
                <div className={cn("h-9 w-9 rounded-lg grid place-items-center bg-gradient-to-br", a.color)}>
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{a.name}</div>
                  <div className="text-xs text-muted-foreground">{i < progress ? "Completed" : i === progress ? "Running..." : "Queued"}</div>
                </div>
                {i < progress ? (
                  <div className="h-6 w-6 rounded-full bg-success grid place-items-center"><Check className="h-3.5 w-3.5 text-white" /></div>
                ) : i === progress ? (
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="h-6 w-6 rounded-full border-2 border-primary border-t-transparent" />
                ) : (
                  <div className="h-6 w-6 rounded-full bg-muted" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

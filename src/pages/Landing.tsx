import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import {
  ArrowRight, Play, Sparkles, Search, Target, Compass, Palette, Package,
  Layout, Megaphone, Filter, BarChart3, Zap, Check, Star, ChevronDown, Menu, Bot, Globe
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScoreRing } from "@/components/ScoreRing";
import { agents, faqs, testimonials } from "@/lib/mock-data";
import { useTheme } from "@/providers/theme-provider";
import { cn } from "@/lib/utils";
import { Sun, Moon } from "lucide-react";

const agentIcons: Record<string, any> = { Search, Target, Compass, Palette, Package, Layout, Megaphone, Filter, BarChart3, Sparkles };

const steps = [
  { n: "01", title: "Enter your business goal", desc: "Describe what you want to build in plain English. Industry, audience, budget — anything." },
  { n: "02", title: "AI researches & validates", desc: "Agents scan markets, competitors and demand signals to validate your idea in minutes." },
  { n: "03", title: "AI builds brand & website", desc: "From naming and identity to a fully designed, conversion-ready landing page." },
  { n: "04", title: "AI generates campaigns", desc: "Instagram, LinkedIn, Meta ads, email funnels, content calendars — ready to ship." },
  { n: "05", title: "AI tracks & improves", desc: "Optimization agents monitor performance and continuously improve every part of your business." },
];

const features = [
  { icon: Bot, title: "10 specialized agents", desc: "Each agent is an expert at one part of your business — and they collaborate." },
  { icon: Zap, title: "Autopilot optimization", desc: "Continuous A/B testing, copy improvements, and budget reallocation — automatically." },
  { icon: Globe, title: "Publish anywhere", desc: "Export production-ready React code or publish directly to your custom domain." },
  { icon: Layout, title: "Visual everything", desc: "Edit AI-generated brand kits, websites, and campaigns visually with full control." },
];

const plans = [
  { name: "Free", price: "₹0", period: "forever", description: "For trying things out", features: ["1 business", "Limited AI generations", "Basic business blueprint", "Community support"], cta: "Start free", highlight: false },
  { name: "Pro", price: "₹999", period: "/ month", description: "For serious founders", features: ["5 businesses", "All AI agents", "Website builder & publishing", "Marketing campaigns", "Export content & code", "Priority support"], cta: "Upgrade to Pro", highlight: true },
  { name: "Agency", price: "₹2,999", period: "/ month", description: "For teams & agencies", features: ["Unlimited businesses", "Client workspaces", "Export full React code", "Advanced automation rules", "Priority AI compute", "Dedicated success manager"], cta: "Contact sales", highlight: false },
];

export default function Landing() {
  const { theme, toggleTheme } = useTheme();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="container max-w-[1400px] px-4 lg:px-6">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mt-4 flex items-center justify-between rounded-full glass-strong px-4 lg:px-6 py-2.5 shadow-card"
          >
            <Link to="/"><Logo /></Link>
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
              <a href="#features" className="hover:text-foreground transition-colors">Features</a>
              <a href="#agents" className="hover:text-foreground transition-colors">Agents</a>
              <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
              <a href="#demo" className="hover:text-foreground transition-colors">Demo</a>
              <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full hidden sm:flex">
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Link to="/login" className="hidden sm:block">
                <Button variant="ghost" size="sm">Login</Button>
              </Link>
              <Link to="/signup">
                <Button size="sm" className="bg-gradient-aurora hover:opacity-90 text-white rounded-full shadow-glow">
                  Get Started <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Hero */}
      <section ref={heroRef} className="relative pt-36 pb-32 overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-60" />
        <div className="absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
        <motion.div style={{ y, opacity }} className="container max-w-[1400px] relative px-4 lg:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge variant="outline" className="rounded-full px-4 py-1.5 backdrop-blur-md bg-card/50 mb-6 gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
              <span className="text-xs">Now with 10 autonomous AI agents</span>
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight max-w-5xl mx-auto leading-[1.05]"
          >
            Build, Launch & Optimize <br className="hidden sm:block" />
            Businesses with{" "}
            <span className="gradient-text">Autonomous AI Agents</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            FounderOS researches markets, creates business plans, builds landing pages, generates marketing campaigns, and improves your business — automatically.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link to="/signup">
              <Button size="lg" className="bg-gradient-aurora hover:opacity-90 text-white rounded-full shadow-elegant px-7 h-12 text-base">
                Start Building <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="rounded-full h-12 px-7 text-base backdrop-blur-md bg-card/50">
              <Play className="mr-2 h-4 w-4" /> Watch Demo
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-6 text-xs text-muted-foreground">
            No credit card needed · Free forever plan · Cancel anytime
          </motion.div>
        </motion.div>

        {/* Dashboard preview mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 relative max-w-6xl mx-auto px-4"
        >
          <div className="absolute -inset-x-20 -top-10 -bottom-10 bg-gradient-aurora opacity-20 blur-3xl rounded-full" />
          <div className="relative rounded-2xl glass-strong shadow-elegant overflow-hidden ring-1 ring-border">
            <div className="flex items-center gap-2 px-4 h-10 border-b border-border bg-muted/30">
              <div className="h-3 w-3 rounded-full bg-destructive/60" />
              <div className="h-3 w-3 rounded-full bg-warning/60" />
              <div className="h-3 w-3 rounded-full bg-success/60" />
              <div className="ml-4 text-xs text-muted-foreground font-mono">app.founderos.ai/dashboard</div>
            </div>
            <div className="p-6 grid grid-cols-12 gap-4">
              <div className="col-span-3 hidden md:block">
                <div className="h-4 w-20 rounded bg-muted mb-4" />
                {[...Array(8)].map((_, i) => (
                  <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 + i * 0.05 }} className={cn("h-7 rounded-lg mb-1.5", i === 0 ? "bg-gradient-aurora/15 ring-1 ring-primary/30" : "bg-muted/50")} />
                ))}
              </div>
              <div className="col-span-12 md:col-span-9 space-y-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    { label: "Active", value: "4", color: "from-violet-500 to-fuchsia-500" },
                    { label: "AI Tasks", value: "1.2K", color: "from-blue-500 to-cyan-500" },
                    { label: "Readiness", value: "78%", color: "from-emerald-500 to-teal-500" },
                    { label: "Revenue", value: "$48K", color: "from-amber-500 to-orange-500" },
                  ].map((s, i) => (
                    <motion.div key={i} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 + i * 0.08 }} className="rounded-xl border border-border p-3 bg-card/60 backdrop-blur">
                      <div className={cn("h-1 w-8 rounded-full bg-gradient-to-r mb-2", s.color)} />
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{s.label}</div>
                      <div className="font-display font-bold text-lg">{s.value}</div>
                    </motion.div>
                  ))}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="lg:col-span-2 rounded-xl border border-border p-4 bg-card/60 h-44 relative overflow-hidden">
                    <div className="text-xs text-muted-foreground mb-2">Performance</div>
                    <svg viewBox="0 0 400 100" className="w-full h-24">
                      <defs>
                        <linearGradient id="line-grad" x1="0" x2="1">
                          <stop offset="0%" stopColor="hsl(var(--primary))" />
                          <stop offset="100%" stopColor="hsl(var(--accent))" />
                        </linearGradient>
                        <linearGradient id="area-grad" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.2 }} d="M0,80 C50,75 80,50 120,55 C160,60 200,30 240,25 C280,20 320,40 360,15 L400,10" stroke="url(#line-grad)" strokeWidth="2.5" fill="none" />
                      <path d="M0,80 C50,75 80,50 120,55 C160,60 200,30 240,25 C280,20 320,40 360,15 L400,10 L400,100 L0,100 Z" fill="url(#area-grad)" />
                    </svg>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="rounded-xl border border-border p-4 bg-card/60 flex items-center justify-center h-44">
                    <ScoreRing score={87} label="Autopilot" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          {/* Floating agent badges */}
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="hidden lg:flex absolute -left-6 top-1/3 glass-strong rounded-full px-4 py-2 items-center gap-2 shadow-elegant">
            <Bot className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium">Marketing Agent running</span>
          </motion.div>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="hidden lg:flex absolute -right-6 bottom-1/4 glass-strong rounded-full px-4 py-2 items-center gap-2 shadow-elegant">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-xs font-medium">+23% conversions</span>
          </motion.div>
        </motion.div>
      </section>

      {/* AI Agents */}
      <section id="agents" className="py-24 relative">
        <div className="container max-w-[1400px] px-4 lg:px-6">
          <SectionTitle eyebrow="AI Agents" title={<>10 specialized agents. <span className="gradient-text">One autonomous team.</span></>} description="Each agent is an expert at one part of your business. Together they build, ship, and optimize." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {agents.map((a, i) => {
              const Icon = agentIcons[a.icon] || Sparkles;
              return (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                >
                  <Card className="group p-5 h-full glass border-border hover:shadow-elegant transition-all relative overflow-hidden">
                    <div className={cn("absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br opacity-20 blur-2xl group-hover:opacity-40 transition", a.color)} />
                    <div className="relative">
                      <div className={cn("h-10 w-10 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4", a.color)}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="font-display font-semibold mb-1">{a.name}</div>
                      <div className="text-sm text-muted-foreground">{a.description}</div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="demo" className="py-24 relative">
        <div className="container max-w-[1400px] px-4 lg:px-6">
          <SectionTitle eyebrow="How it works" title={<>From idea to running business <span className="gradient-text">in 5 steps</span></>} />
          <div className="mt-16 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn("relative grid md:grid-cols-2 gap-8 items-center mb-12", i % 2 === 1 && "md:[&>div:first-child]:order-2")}
              >
                <div className={cn(i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12")}>
                  <div className="font-mono text-sm gradient-text font-semibold mb-2">STEP {s.n}</div>
                  <h3 className="font-display text-2xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground">{s.desc}</p>
                </div>
                <div className="relative h-48 rounded-2xl glass shadow-card overflow-hidden grid place-items-center">
                  <div className="absolute inset-0 mesh-bg opacity-50" />
                  <div className="font-display font-bold text-7xl gradient-text relative">{s.n}</div>
                </div>
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-gradient-aurora ring-4 ring-background" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 relative">
        <div className="container max-w-[1400px] px-4 lg:px-6">
          <SectionTitle eyebrow="Features" title={<>Built for founders who <span className="gradient-text">ship fast</span></>} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Card className="p-8 glass border-border h-full hover:shadow-elegant transition-all">
                    <div className="h-12 w-12 rounded-xl bg-gradient-aurora/10 ring-1 ring-primary/20 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-xl mb-2">{f.title}</h3>
                    <p className="text-muted-foreground">{f.desc}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Autopilot Score */}
      <section className="py-24 relative">
        <div className="container max-w-[1400px] px-4 lg:px-6">
          <Card className="relative overflow-hidden glass-strong border-border p-8 lg:p-16 grid lg:grid-cols-2 gap-12 items-center">
            <div className="absolute inset-0 mesh-bg opacity-40" />
            <div className="relative">
              <Badge variant="outline" className="mb-4 rounded-full">Autopilot Score</Badge>
              <h2 className="font-display text-3xl lg:text-5xl font-bold tracking-tight mb-4">
                Know exactly how <span className="gradient-text">launch-ready</span> you are
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                A real-time score from 0–100 that measures how complete, polished, and conversion-ready your business is. Updated every time an agent ships an improvement.
              </p>
              <div className="space-y-2">
                {["Idea & market validation", "Brand & website quality", "Marketing readiness", "Optimization momentum"].map((p) => (
                  <div key={p} className="flex items-center gap-2 text-sm">
                    <div className="h-5 w-5 rounded-full bg-gradient-aurora/20 ring-1 ring-primary/30 grid place-items-center">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    {p}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-aurora opacity-30 blur-3xl rounded-full" />
                <div className="relative">
                  <ScoreRing score={87} size={260} label="Autopilot" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24">
        <div className="container max-w-[1400px] px-4 lg:px-6">
          <SectionTitle eyebrow="Pricing" title={<>Simple, founder-friendly <span className="gradient-text">pricing</span></>} description="Start free. Upgrade when you're ready to ship." />
          <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
            {plans.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className={cn("relative p-8 h-full transition-all", p.highlight ? "glass-strong shadow-elegant ring-2 ring-primary/40 scale-[1.02]" : "glass border-border")}>
                  {p.highlight && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-aurora text-white border-0 shadow-glow">Most popular</Badge>
                  )}
                  <div className="font-display font-semibold text-lg mb-1">{p.name}</div>
                  <div className="text-sm text-muted-foreground mb-4">{p.description}</div>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="font-display text-5xl font-bold">{p.price}</span>
                    <span className="text-muted-foreground text-sm">{p.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/signup" className="block">
                    <Button className={cn("w-full rounded-full", p.highlight ? "bg-gradient-aurora text-white shadow-glow hover:opacity-90" : "")} variant={p.highlight ? "default" : "outline"}>
                      {p.cta}
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container max-w-[1400px] px-4 lg:px-6">
          <SectionTitle eyebrow="Loved by founders" title={<>Founders are <span className="gradient-text">shipping faster</span></>} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="p-6 glass border-border h-full">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-warning text-warning" />)}
                  </div>
                  <p className="text-sm leading-relaxed mb-4">"{t.quote}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="h-9 w-9 rounded-full bg-gradient-aurora flex items-center justify-center text-white text-xs font-semibold">{t.avatar}</div>
                    <div>
                      <div className="font-medium text-sm">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="container max-w-3xl px-4 lg:px-6">
          <SectionTitle eyebrow="FAQ" title={<>Questions, <span className="gradient-text">answered</span></>} />
          <Accordion type="single" collapsible className="mt-12">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="font-display font-medium text-left hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container max-w-[1400px] px-4 lg:px-6">
          <Card className="relative overflow-hidden glass-strong border-border p-12 lg:p-20 text-center">
            <div className="absolute inset-0 mesh-bg" />
            <div className="relative">
              <h2 className="font-display text-3xl lg:text-5xl font-bold tracking-tight mb-4 max-w-3xl mx-auto">
                Your next business is <span className="gradient-text">one prompt away.</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Stop planning. Start shipping. Let autonomous AI agents do the work.
              </p>
              <Link to="/signup">
                <Button size="lg" className="bg-gradient-aurora text-white rounded-full shadow-elegant px-7 h-12">
                  Start Building Free <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container max-w-[1400px] px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Logo />
              <p className="text-sm text-muted-foreground mt-4 max-w-xs">From idea to running business — powered by autonomous AI agents.</p>
            </div>
            {[
              { title: "Product", links: ["Features", "Agents", "Pricing", "Demo"] },
              { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
              { title: "Legal", links: ["Privacy", "Terms", "Security", "DPA"] },
            ].map((col) => (
              <div key={col.title}>
                <div className="font-display font-semibold mb-3">{col.title}</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {col.links.map((l) => <li key={l}><a href="#" className="hover:text-foreground transition-colors">{l}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <div>© 2026 FounderOS. All rights reserved.</div>
            <div>Built with ❤️ for ambitious founders.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: React.ReactNode; description?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
      <Badge variant="outline" className="rounded-full mb-4">{eyebrow}</Badge>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">{title}</h2>
      {description && <p className="text-muted-foreground mt-4 text-lg">{description}</p>}
    </motion.div>
  );
}

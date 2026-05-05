import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/StatCard";
import { PageHeader, SectionHeader } from "@/components/Common";
import { stats, businesses, activityFeed, suggestedActions, performanceData } from "@/lib/mock-data";
import { ArrowUpRight, ChevronRight, Sparkles, Wand2, Mail, Target, Instagram } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, AreaChart, Area, CartesianGrid } from "recharts";
import { cn } from "@/lib/utils";

const actionIcons: Record<string, any> = { Wand2, Instagram, Target, Mail };

export default function Overview() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Welcome back, Founder"
        description="Here's what your AI agents have been up to."
        action={
          <Link to="/app/new">
            <Button className="bg-gradient-aurora text-white shadow-glow hover:opacity-90 rounded-full">
              <Sparkles className="h-4 w-4 mr-2" /> New Business
            </Button>
          </Link>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <StatCard key={s.label} {...s} trend={s.trend as "up" | "down" | "neutral"} delay={i * 0.05} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-6 glass border-border">
          <SectionHeader title="Business performance" description="Combined performance across your businesses" action={<Badge variant="outline" className="rounded-full">Last 6 months</Badge>} />
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="leads" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ background: "hsl(var(--popover))", border: "1px solid hsl(var(--border))", borderRadius: 12, fontSize: 12 }} />
                <Area type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={2.5} fill="url(#rev)" />
                <Area type="monotone" dataKey="leads" stroke="hsl(var(--accent))" strokeWidth={2.5} fill="url(#leads)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6 glass border-border">
          <SectionHeader title="Suggested actions" description="AI-powered next steps" />
          <div className="space-y-2">
            {suggestedActions.map((a, i) => {
              const Icon = actionIcons[a.icon] || Sparkles;
              return (
                <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className="group p-3 rounded-xl border border-border hover:bg-muted/50 cursor-pointer transition-all">
                  <div className="flex items-start gap-3">
                    <div className={cn("h-8 w-8 rounded-lg flex-shrink-0 grid place-items-center", a.priority === "high" ? "bg-destructive/10 text-destructive" : a.priority === "medium" ? "bg-warning/10 text-warning" : "bg-muted text-muted-foreground")}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium">{a.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{a.description}</div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-6 glass border-border">
          <SectionHeader title="Recent businesses" description="Your latest projects" action={<Link to="/app/businesses"><Button variant="ghost" size="sm" className="gap-1">View all <ArrowUpRight className="h-3.5 w-3.5" /></Button></Link>} />
          <div className="overflow-x-auto -mx-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-muted-foreground uppercase tracking-wider">
                  <th className="text-left font-medium px-2 py-2">Business</th>
                  <th className="text-left font-medium px-2 py-2 hidden md:table-cell">Industry</th>
                  <th className="text-left font-medium px-2 py-2">Status</th>
                  <th className="text-left font-medium px-2 py-2 hidden sm:table-cell">Readiness</th>
                  <th className="text-left font-medium px-2 py-2 hidden md:table-cell">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {businesses.map((b) => (
                  <tr key={b.id} className="border-t border-border hover:bg-muted/30 transition">
                    <td className="px-2 py-3">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-lg bg-gradient-aurora/10 ring-1 ring-primary/20 grid place-items-center text-lg">{b.logo}</div>
                        <span className="font-medium">{b.name}</span>
                      </div>
                    </td>
                    <td className="px-2 py-3 text-muted-foreground hidden md:table-cell">{b.industry}</td>
                    <td className="px-2 py-3"><StatusBadge status={b.status} /></td>
                    <td className="px-2 py-3 hidden sm:table-cell">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-16 rounded-full bg-muted overflow-hidden">
                          <div className="h-full bg-gradient-aurora rounded-full" style={{ width: `${b.readiness}%` }} />
                        </div>
                        <span className="text-xs font-medium">{b.readiness}%</span>
                      </div>
                    </td>
                    <td className="px-2 py-3 font-medium hidden md:table-cell">{b.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="p-6 glass border-border">
          <SectionHeader title="AI agent activity" description="Live timeline" />
          <div className="space-y-1 -mr-2">
            {activityFeed.map((a, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className="relative pl-6 pb-4 last:pb-0">
                <div className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-gradient-aurora ring-4 ring-background" />
                {i !== activityFeed.length - 1 && <div className="absolute left-[3px] top-3.5 bottom-0 w-px bg-border" />}
                <div className="text-sm font-medium">{a.agent}</div>
                <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{a.action}</div>
                <div className="text-[10px] text-muted-foreground mt-1 font-mono uppercase">{a.time}</div>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    Live: "bg-success/10 text-success ring-success/30",
    Launching: "bg-warning/10 text-warning ring-warning/30",
    Building: "bg-primary/10 text-primary ring-primary/30",
    Validating: "bg-muted text-muted-foreground ring-border",
    Active: "bg-success/10 text-success ring-success/30",
    Trial: "bg-warning/10 text-warning ring-warning/30",
    Idle: "bg-muted text-muted-foreground ring-border",
  };
  return <span className={cn("inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium ring-1", map[status] || "bg-muted text-muted-foreground ring-border")}>
    <span className={cn("h-1.5 w-1.5 rounded-full", status === "Live" || status === "Active" ? "bg-success animate-pulse" : status === "Launching" || status === "Trial" ? "bg-warning" : status === "Building" ? "bg-primary" : "bg-muted-foreground")} />
    {status}
  </span>;
}

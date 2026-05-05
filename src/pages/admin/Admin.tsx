import { Outlet, NavLink, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/StatCard";
import { PageHeader, SectionHeader } from "@/components/Common";
import { Logo } from "@/components/Logo";
import { adminUsers, businesses } from "@/lib/mock-data";
import { StatusBadge } from "@/pages/dashboard/Overview";
import { ShieldCheck, Users, Briefcase, CreditCard, Bot, FileText, ArrowLeft } from "lucide-react";
import { useTheme } from "@/providers/theme-provider";
import { Sun, Moon } from "lucide-react";

const items = [
  { to: "/admin", label: "Dashboard", icon: ShieldCheck, end: true },
  { to: "/admin/users", label: "Users", icon: Users },
  { to: "/admin/businesses", label: "Businesses", icon: Briefcase },
  { to: "/admin/payments", label: "Payments", icon: CreditCard },
  { to: "/admin/ai", label: "AI usage", icon: Bot },
  { to: "/admin/templates", label: "Templates", icon: FileText },
];

export default function AdminLayout() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="min-h-screen flex bg-background">
      <aside className="hidden lg:flex flex-col w-60 border-r border-border bg-sidebar">
        <div className="h-16 flex items-center px-4 border-b border-border">
          <Logo size="sm" />
        </div>
        <nav className="flex-1 p-3 space-y-0.5">
          {items.map((i) => (
            <NavLink key={i.to} to={i.to} end={i.end} className={({ isActive }) => `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${isActive ? "bg-gradient-aurora/10 text-primary ring-1 ring-primary/20" : "text-sidebar-foreground hover:bg-sidebar-accent"}`}>
              <i.icon className="h-4 w-4" />{i.label}
            </NavLink>
          ))}
        </nav>
        <div className="p-3 border-t border-border">
          <Link to="/app"><Button variant="ghost" className="w-full justify-start"><ArrowLeft className="h-4 w-4 mr-2" /> Back to app</Button></Link>
        </div>
      </aside>
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-border flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <span className="font-display font-semibold">Admin Panel</span>
          </div>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>{theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}</Button>
        </header>
        <main className="flex-1 container max-w-[1400px] py-8"><Outlet /></main>
      </div>
    </div>
  );
}

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      <PageHeader title="Admin overview" description="Platform-wide metrics." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { label: "Total users", value: "12,482", icon: "Users", change: "+1,240 this month", trend: "up" as const },
          { label: "Paid users", value: "3,124", icon: "CreditCard", change: "+312 this month", trend: "up" as const },
          { label: "Monthly revenue", value: "$184K", icon: "DollarSign", change: "+22% MoM", trend: "up" as const },
          { label: "AI tokens used", value: "284M", icon: "Zap", change: "this month", trend: "neutral" as const },
          { label: "Active businesses", value: "8,420", icon: "Briefcase", change: "+612 this week", trend: "up" as const },
          { label: "Recent signups", value: "+428", icon: "UserPlus", change: "last 24h", trend: "up" as const },
        ].map((s, i) => <StatCard key={s.label} {...s} delay={i * 0.05} />)}
      </div>

      <Card className="p-6 glass border-border">
        <SectionHeader title="Recent signups" />
        <div className="overflow-x-auto -mx-2">
          <table className="w-full text-sm">
            <thead><tr className="text-xs text-muted-foreground uppercase tracking-wider">
              {["User", "Email", "Plan", "Businesses", "Joined", "Status"].map((h) => <th key={h} className="text-left font-medium px-2 py-2">{h}</th>)}
            </tr></thead>
            <tbody>
              {adminUsers.map((u) => (
                <tr key={u.id} className="border-t border-border hover:bg-muted/30">
                  <td className="px-2 py-3 font-medium">{u.name}</td>
                  <td className="px-2 py-3 text-muted-foreground">{u.email}</td>
                  <td className="px-2 py-3">{u.plan}</td>
                  <td className="px-2 py-3">{u.businesses}</td>
                  <td className="px-2 py-3 text-muted-foreground">{u.joined}</td>
                  <td className="px-2 py-3"><StatusBadge status={u.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

export function AdminUsers() {
  return (
    <div>
      <PageHeader title="Users" description="All platform users." />
      <Card className="p-6 glass border-border">
        <div className="overflow-x-auto -mx-2">
          <table className="w-full text-sm">
            <thead><tr className="text-xs text-muted-foreground uppercase tracking-wider">{["Name","Email","Plan","Businesses","Joined","Status"].map((h) => <th key={h} className="text-left font-medium px-2 py-2">{h}</th>)}</tr></thead>
            <tbody>{adminUsers.map((u) => (
              <tr key={u.id} className="border-t border-border hover:bg-muted/30">
                <td className="px-2 py-3 font-medium">{u.name}</td><td className="px-2 py-3 text-muted-foreground">{u.email}</td>
                <td className="px-2 py-3">{u.plan}</td><td className="px-2 py-3">{u.businesses}</td>
                <td className="px-2 py-3 text-muted-foreground">{u.joined}</td><td className="px-2 py-3"><StatusBadge status={u.status} /></td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

export function AdminBusinesses() {
  return (
    <div>
      <PageHeader title="Businesses" description="All businesses on the platform." />
      <Card className="p-6 glass border-border">
        <div className="overflow-x-auto -mx-2">
          <table className="w-full text-sm">
            <thead><tr className="text-xs text-muted-foreground uppercase tracking-wider">{["Business","Industry","Status","Readiness","Revenue","Created"].map((h) => <th key={h} className="text-left font-medium px-2 py-2">{h}</th>)}</tr></thead>
            <tbody>{businesses.map((b) => (
              <tr key={b.id} className="border-t border-border hover:bg-muted/30">
                <td className="px-2 py-3 font-medium">{b.logo} {b.name}</td><td className="px-2 py-3 text-muted-foreground">{b.industry}</td>
                <td className="px-2 py-3"><StatusBadge status={b.status} /></td><td className="px-2 py-3">{b.readiness}%</td>
                <td className="px-2 py-3">{b.revenue}</td><td className="px-2 py-3 text-muted-foreground">{b.created}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

export function AdminPayments() {
  const payments = [
    { id: "INV-2845", user: "Aarav Mehta", amount: "₹999", plan: "Pro", date: "May 1, 2026", status: "Paid" },
    { id: "INV-2844", user: "Priya Sharma", amount: "₹2,999", plan: "Agency", date: "May 1, 2026", status: "Paid" },
    { id: "INV-2843", user: "Daniel Cole", amount: "₹999", plan: "Pro", date: "Apr 30, 2026", status: "Paid" },
    { id: "INV-2842", user: "Liam Park", amount: "₹999", plan: "Pro", date: "Apr 30, 2026", status: "Failed" },
  ];
  return (
    <div>
      <PageHeader title="Payments" description="Transactions across the platform." />
      <Card className="p-6 glass border-border">
        <table className="w-full text-sm">
          <thead><tr className="text-xs text-muted-foreground uppercase tracking-wider">{["Invoice","User","Plan","Amount","Date","Status"].map((h) => <th key={h} className="text-left font-medium px-2 py-2">{h}</th>)}</tr></thead>
          <tbody>{payments.map((p) => (
            <tr key={p.id} className="border-t border-border hover:bg-muted/30">
              <td className="px-2 py-3 font-mono text-xs">{p.id}</td><td className="px-2 py-3 font-medium">{p.user}</td>
              <td className="px-2 py-3">{p.plan}</td><td className="px-2 py-3 font-medium">{p.amount}</td>
              <td className="px-2 py-3 text-muted-foreground">{p.date}</td><td className="px-2 py-3"><StatusBadge status={p.status === "Paid" ? "Active" : "Failed" as any} /></td>
            </tr>
          ))}</tbody>
        </table>
      </Card>
    </div>
  );
}

export function AdminAI() {
  return (
    <div>
      <PageHeader title="AI usage" description="Token usage by agent." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {["Marketing Agent", "Website Agent", "Research Agent", "Brand Agent", "Strategy Agent", "Analytics Agent", "Optimization Agent", "Product Agent"].map((a, i) => (
          <Card key={a} className="p-5 glass border-border">
            <div className="text-xs text-muted-foreground">{a}</div>
            <div className="font-display font-bold text-2xl mt-1">{(48 - i * 4).toFixed(1)}M</div>
            <div className="h-1.5 mt-2 rounded-full bg-muted overflow-hidden">
              <div className="h-full bg-gradient-aurora" style={{ width: `${100 - i * 9}%` }} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function AdminTemplates() {
  const templates = [
    { name: "SaaS Starter", category: "SaaS", uses: 1240 },
    { name: "Cloud Kitchen", category: "F&B", uses: 612 },
    { name: "EdTech Academy", category: "Education", uses: 484 },
    { name: "DTC E-commerce", category: "Commerce", uses: 1820 },
    { name: "Creator Brand", category: "Creator", uses: 932 },
    { name: "B2B Service", category: "Services", uses: 510 },
  ];
  return (
    <div>
      <PageHeader title="Templates" description="Business blueprint templates." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map((t) => (
          <Card key={t.name} className="p-5 glass border-border">
            <div className="aspect-video rounded-lg bg-gradient-aurora/20 mb-3 mesh-bg" />
            <div className="font-display font-semibold">{t.name}</div>
            <div className="text-xs text-muted-foreground">{t.category} · {t.uses} uses</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

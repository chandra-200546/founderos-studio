import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard, Plus, Briefcase, Bot, Search, Compass, Palette, Package, Layout,
  Megaphone, BarChart3, Zap, CreditCard, Settings, Bell, Sun, Moon, ChevronLeft, ChevronRight,
  Search as SearchIcon, ShieldCheck, Menu, X, LogOut, User
} from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useTheme } from "@/providers/theme-provider";
import { cn } from "@/lib/utils";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";

const navItems = [
  { to: "/app", label: "Overview", icon: LayoutDashboard, end: true },
  { to: "/app/new", label: "New Business", icon: Plus, accent: true },
  { to: "/app/businesses", label: "My Businesses", icon: Briefcase },
  { to: "/app/agents", label: "AI Agents", icon: Bot },
  { to: "/app/research", label: "Market Research", icon: Search },
  { to: "/app/strategy", label: "Strategy", icon: Compass },
  { to: "/app/brand", label: "Brand Kit", icon: Palette },
  { to: "/app/product", label: "Product Builder", icon: Package },
  { to: "/app/website", label: "Website Builder", icon: Layout },
  { to: "/app/marketing", label: "Marketing", icon: Megaphone },
  { to: "/app/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/app/automation", label: "Automation", icon: Zap },
  { to: "/app/billing", label: "Billing", icon: CreditCard },
  { to: "/app/settings", label: "Settings", icon: Settings },
];

const adminItems = [
  { to: "/admin", label: "Admin Panel", icon: ShieldCheck },
];

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const SidebarContent = (
    <>
      <div className={cn("flex items-center px-4 h-16 border-b border-sidebar-border", collapsed ? "justify-center" : "justify-between")}>
        {!collapsed && <Logo size="sm" />}
        {collapsed && (
          <div className="h-8 w-8 rounded-xl bg-gradient-aurora flex items-center justify-center shadow-glow">
            <span className="font-display font-bold text-white text-sm">F</span>
          </div>
        )}
        <Button variant="ghost" size="icon" onClick={() => setCollapsed(!collapsed)} className={cn("h-7 w-7 hidden lg:flex", collapsed && "absolute -right-3 top-5 bg-card border border-border rounded-full shadow-card z-10")}>
          {collapsed ? <ChevronRight className="h-3.5 w-3.5" /> : <ChevronLeft className="h-3.5 w-3.5" />}
        </Button>
      </div>
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5 scrollbar-hide">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                cn(
                  "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all",
                  isActive
                    ? "bg-gradient-aurora/10 text-primary ring-1 ring-primary/20"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  item.accent && !isActive && "text-primary"
                )
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && <motion.div layoutId="active-pill" className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1 bg-gradient-aurora rounded-r-full" />}
                  <Icon className={cn("h-4 w-4 flex-shrink-0", isActive && "text-primary")} />
                  {!collapsed && <span className="truncate">{item.label}</span>}
                  {!collapsed && item.accent && !isActive && <Badge variant="outline" className="ml-auto text-[10px] h-4 px-1.5 border-primary/30 text-primary">New</Badge>}
                </>
              )}
            </NavLink>
          );
        })}
        <div className="pt-4 mt-4 border-t border-sidebar-border space-y-0.5">
          {adminItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all",
                    isActive ? "bg-gradient-aurora/10 text-primary ring-1 ring-primary/20" : "text-sidebar-foreground hover:bg-sidebar-accent"
                  )
                }
              >
                <Icon className="h-4 w-4" />
                {!collapsed && <span>{item.label}</span>}
              </NavLink>
            );
          })}
        </div>
      </nav>
      {!collapsed && (
        <div className="m-3 p-4 rounded-xl bg-gradient-aurora/10 ring-1 ring-primary/20 relative overflow-hidden">
          <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-gradient-aurora opacity-30 blur-2xl" />
          <div className="relative">
            <div className="text-xs font-semibold text-primary mb-1">Pro plan</div>
            <div className="text-xs text-muted-foreground mb-3">Unlock unlimited AI generations</div>
            <Button size="sm" className="w-full bg-gradient-aurora hover:opacity-90 text-white shadow-glow">Upgrade</Button>
          </div>
        </div>
      )}
    </>
  );

  return (
    <div className="min-h-screen flex w-full bg-background">
      {/* Desktop sidebar */}
      <aside className={cn("hidden lg:flex flex-col bg-sidebar border-r border-sidebar-border transition-all duration-300 relative", collapsed ? "w-[72px]" : "w-64")}>
        {SidebarContent}
      </aside>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileOpen(false)} className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40" />
            <motion.aside initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }} transition={{ type: "spring", damping: 25 }} className="lg:hidden fixed inset-y-0 left-0 w-72 bg-sidebar border-r border-sidebar-border z-50 flex flex-col">
              {SidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-border bg-background/80 backdrop-blur-xl sticky top-0 z-30 flex items-center gap-4 px-4 lg:px-6">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex-1 max-w-md relative hidden md:block">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search businesses, agents, actions..." className="pl-9 bg-muted/50 border-transparent focus-visible:bg-background" />
          </div>
          <div className="flex-1 md:hidden" />
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full relative">
            <Bell className="h-4 w-4" />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-gradient-aurora animate-pulse-glow" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-2 px-2 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-gradient-aurora text-white text-xs font-semibold">FD</AvatarFallback>
                </Avatar>
                <span className="hidden sm:block text-sm font-medium">Founder</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="font-semibold">Founder Demo</div>
                <div className="text-xs text-muted-foreground font-normal">founder@founderos.ai</div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem><User className="h-4 w-4 mr-2" />Profile</DropdownMenuItem>
              <DropdownMenuItem><Settings className="h-4 w-4 mr-2" />Settings</DropdownMenuItem>
              <DropdownMenuItem><CreditCard className="h-4 w-4 mr-2" />Billing</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive"><LogOut className="h-4 w-4 mr-2" />Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex-1 overflow-x-hidden">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="container max-w-[1400px] py-6 lg:py-8"
          >
            <Outlet />
          </motion.div>
        </main>
      </div>
    </div>
  );
}

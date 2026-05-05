import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/Logo";
import { ArrowLeft, ArrowRight, Sparkles, Bot, Zap, Globe } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface AuthShellProps {
  variant: "login" | "signup" | "forgot";
}

const titles = {
  login: { title: "Welcome back", description: "Sign in to your FounderOS account", cta: "Sign in", footer: "Don't have an account?", footerLink: "/signup", footerLinkText: "Sign up" },
  signup: { title: "Start building today", description: "Create your free FounderOS account", cta: "Create account", footer: "Already have an account?", footerLink: "/login", footerLinkText: "Sign in" },
  forgot: { title: "Reset your password", description: "We'll email you a secure reset link", cta: "Send reset link", footer: "Remember your password?", footerLink: "/login", footerLinkText: "Sign in" },
};

export default function AuthShell({ variant }: AuthShellProps) {
  const navigate = useNavigate();
  const t = titles[variant];
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const email = data.get("email") as string;
    const password = data.get("password") as string;
    const newErrors: Record<string, string> = {};
    if (!email || !email.includes("@")) newErrors.email = "Please enter a valid email";
    if (variant !== "forgot" && (!password || password.length < 6)) newErrors.password = "Password must be at least 6 characters";
    setErrors(newErrors);
    if (Object.keys(newErrors).length) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (variant === "forgot") {
        toast.success("Password reset link sent");
      } else {
        toast.success("Welcome to FounderOS");
        navigate("/app");
      }
    }, 900);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      {/* Left side */}
      <div className="relative hidden lg:flex flex-col justify-between p-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-aurora" />
        <div className="absolute inset-0 mesh-bg opacity-50" />
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="relative z-10 flex flex-col justify-between h-full text-white">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <div className="space-y-8">
            <Logo size="lg" className="[&_span]:!text-white [&_.gradient-text]:!text-white/90 [&_.gradient-text]:!bg-none" />
            <h2 className="font-display text-4xl xl:text-5xl font-bold leading-tight max-w-md">
              From idea to running business, on autopilot.
            </h2>
            <p className="text-white/80 max-w-md">
              Join thousands of founders shipping businesses with the help of 10 autonomous AI agents.
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-md">
              {[
                { icon: Bot, label: "10 agents" },
                { icon: Zap, label: "24h launch" },
                { icon: Globe, label: "Auto-publish" },
              ].map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }} className="rounded-xl bg-white/10 backdrop-blur p-4 ring-1 ring-white/20">
                  <f.icon className="h-5 w-5 mb-2" />
                  <div className="text-xs font-medium">{f.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="text-xs text-white/60">© 2026 FounderOS · Built for founders.</div>
        </div>
        <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute right-12 top-1/3 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
        <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute right-24 bottom-1/3 h-24 w-24 rounded-full bg-cyan-300/30 blur-2xl" />
      </div>

      {/* Right side */}
      <div className="flex items-center justify-center p-6 lg:p-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-sm">
          <div className="lg:hidden mb-8">
            <Link to="/"><Logo /></Link>
          </div>
          <h1 className="font-display text-3xl font-bold tracking-tight">{t.title}</h1>
          <p className="text-muted-foreground mt-1.5">{t.description}</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            {variant !== "forgot" && (
              <Button type="button" variant="outline" className="w-full h-11 gap-2" onClick={() => { toast.success("Welcome to FounderOS"); navigate("/app"); }}>
                <svg className="h-4 w-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                Continue with Google
              </Button>
            )}
            {variant !== "forgot" && (
              <div className="relative">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
                <div className="relative flex justify-center text-xs"><span className="bg-background px-2 text-muted-foreground">or with email</span></div>
              </div>
            )}
            {variant === "signup" && (
              <div className="space-y-1.5">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" name="name" placeholder="Founder Demo" />
              </div>
            )}
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="founder@founderos.ai" className={cn(errors.email && "border-destructive")} />
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>
            {variant !== "forgot" && (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  {variant === "login" && <Link to="/forgot" className="text-xs text-primary hover:underline">Forgot?</Link>}
                </div>
                <Input id="password" name="password" type="password" placeholder="••••••••" className={cn(errors.password && "border-destructive")} />
                {errors.password && <p className="text-xs text-destructive">{errors.password}</p>}
              </div>
            )}
            <Button type="submit" className="w-full h-11 bg-gradient-aurora text-white shadow-glow hover:opacity-90" disabled={loading}>
              {loading ? <Sparkles className="h-4 w-4 animate-spin" /> : <>{t.cta} <ArrowRight className="ml-1 h-4 w-4" /></>}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            {t.footer} <Link to={t.footerLink} className="text-primary font-medium hover:underline">{t.footerLinkText}</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

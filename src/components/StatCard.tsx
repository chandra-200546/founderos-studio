import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  change?: string;
  icon?: string;
  trend?: "up" | "down" | "neutral";
  delay?: number;
}

export function StatCard({ label, value, change, icon = "Sparkles", trend = "neutral", delay = 0 }: StatCardProps) {
  const Icon = (Icons[icon as keyof typeof Icons] as LucideIcon) || Icons.Sparkles;
  const trendColor = trend === "up" ? "text-success" : trend === "down" ? "text-destructive" : "text-muted-foreground";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl glass p-6 shadow-card hover:shadow-elegant transition-all"
    >
      <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-aurora opacity-10 blur-3xl group-hover:opacity-20 transition-opacity" />
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className="h-10 w-10 rounded-xl bg-gradient-aurora/10 flex items-center justify-center ring-1 ring-primary/20">
            <Icon className="h-5 w-5 text-primary" />
          </div>
        </div>
        <div className="text-sm text-muted-foreground mb-1">{label}</div>
        <div className="text-3xl font-display font-bold tracking-tight">{value}</div>
        {change && <div className={cn("text-xs mt-2 font-medium", trendColor)}>{change}</div>}
      </div>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function EmptyState({ icon = "Inbox", title, description, action }: { icon?: string; title: string; description?: string; action?: React.ReactNode }) {
  const Icon = (Icons[icon as keyof typeof Icons] as LucideIcon) || Icons.Inbox;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center text-center py-16 px-6"
    >
      <div className="h-16 w-16 rounded-2xl bg-gradient-aurora/10 flex items-center justify-center ring-1 ring-primary/20 mb-4">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <h3 className="font-display font-semibold text-lg mb-2">{title}</h3>
      {description && <p className="text-sm text-muted-foreground max-w-sm mb-4">{description}</p>}
      {action}
    </motion.div>
  );
}

export function PageHeader({ title, description, action }: { title: string; description?: string; action?: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      <div>
        <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">{title}</h1>
        {description && <p className="text-muted-foreground mt-1">{description}</p>}
      </div>
      {action}
    </div>
  );
}

export function SectionHeader({ title, description, className, action }: { title: string; description?: string; className?: string; action?: React.ReactNode }) {
  return (
    <div className={cn("flex items-end justify-between gap-4 mb-4", className)}>
      <div>
        <h2 className="font-display text-lg font-semibold">{title}</h2>
        {description && <p className="text-sm text-muted-foreground mt-0.5">{description}</p>}
      </div>
      {action}
    </div>
  );
}

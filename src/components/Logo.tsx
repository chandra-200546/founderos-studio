import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Logo({ className, size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "text-lg", md: "text-xl", lg: "text-2xl" };
  const iconSize = { sm: "h-7 w-7", md: "h-8 w-8", lg: "h-10 w-10" };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <motion.div
        whileHover={{ rotate: 90, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className={cn("relative rounded-xl bg-gradient-aurora flex items-center justify-center shadow-glow", iconSize[size])}
      >
        <div className="absolute inset-[3px] rounded-[8px] bg-background/20 backdrop-blur-sm flex items-center justify-center">
          <span className="font-display font-bold text-white text-sm">F</span>
        </div>
      </motion.div>
      <span className={cn("font-display font-bold tracking-tight", sizes[size])}>
        Founder<span className="gradient-text">OS</span>
      </span>
    </div>
  );
}

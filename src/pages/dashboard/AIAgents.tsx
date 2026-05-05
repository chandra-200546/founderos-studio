import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/Common";
import { agents } from "@/lib/mock-data";
import * as Icons from "lucide-react";
import { Play, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export default function AIAgents() {
  return (
    <div>
      <PageHeader title="AI Agents" description="Your autonomous team. Always on, always learning." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {agents.map((a, i) => {
          const Icon = (Icons[a.icon as keyof typeof Icons] as any) || Sparkles;
          return (
            <motion.div key={a.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }} whileHover={{ y: -4 }}>
              <Card className="p-5 glass border-border h-full relative overflow-hidden hover:shadow-elegant transition">
                <div className={cn("absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br opacity-15 blur-2xl", a.color)} />
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={cn("h-12 w-12 rounded-xl bg-gradient-to-br grid place-items-center", a.color)}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <Badge variant="outline" className={cn("text-[10px]", a.status === "active" ? "border-success/40 text-success" : "border-border")}>
                      <span className={cn("h-1.5 w-1.5 rounded-full mr-1.5", a.status === "active" ? "bg-success animate-pulse" : "bg-muted-foreground")} />
                      {a.status}
                    </Badge>
                  </div>
                  <div className="font-display font-semibold">{a.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5 mb-4">{a.description}</div>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="p-2 rounded-lg bg-muted/30 border border-border">
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Tasks</div>
                      <div className="font-display font-bold">{a.tasks}</div>
                    </div>
                    <div className="p-2 rounded-lg bg-muted/30 border border-border">
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Quality</div>
                      <div className="font-display font-bold">{a.accuracy}%</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] text-muted-foreground font-mono uppercase">Last run · {a.lastRun}</div>
                    <Button size="sm" variant="outline" onClick={() => toast.success(`${a.name} running...`)}>
                      <Play className="h-3 w-3 mr-1" /> Run
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

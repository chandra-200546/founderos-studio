import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageHeader, EmptyState } from "@/components/Common";
import { businesses } from "@/lib/mock-data";
import { StatusBadge } from "./Overview";
import { Plus, Search, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function MyBusinesses() {
  const [query, setQuery] = useState("");
  const filtered = businesses.filter((b) => b.name.toLowerCase().includes(query.toLowerCase()) || b.industry.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <PageHeader
        title="My Businesses"
        description="All your AI-built businesses, one place."
        action={
          <Link to="/app/new">
            <Button className="bg-gradient-aurora text-white shadow-glow hover:opacity-90 rounded-full">
              <Plus className="h-4 w-4 mr-2" /> New Business
            </Button>
          </Link>
        }
      />

      <div className="relative max-w-md mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search businesses..." className="pl-9 bg-muted/50" />
      </div>

      {filtered.length === 0 ? (
        <Card className="glass border-border"><EmptyState icon="Briefcase" title="No businesses yet" description="Start building your first business with AI agents." action={<Link to="/app/new"><Button className="bg-gradient-aurora text-white">New Business</Button></Link>} /></Card>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((b, i) => (
            <motion.div key={b.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} whileHover={{ y: -4 }}>
              <Card className="group p-6 glass border-border hover:shadow-elegant transition-all relative overflow-hidden h-full flex flex-col">
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-aurora opacity-10 blur-2xl group-hover:opacity-20 transition" />
                <div className="relative flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-aurora/10 ring-1 ring-primary/20 grid place-items-center text-2xl">{b.logo}</div>
                    <StatusBadge status={b.status} />
                  </div>
                  <h3 className="font-display font-semibold text-lg">{b.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{b.industry}</p>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{b.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Launch Readiness</span>
                      <span className="font-semibold">{b.readiness}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${b.readiness}%` }} transition={{ duration: 1, delay: i * 0.05 }} className="h-full bg-gradient-aurora rounded-full" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span>{b.created}</span>
                    <span className="font-medium text-foreground">{b.revenue}</span>
                  </div>

                  <Link to={`/app/businesses/${b.id}`}>
                    <Button variant="outline" className="w-full group-hover:border-primary/50">Open <ArrowRight className="h-3.5 w-3.5 ml-1 transition group-hover:translate-x-1" /></Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

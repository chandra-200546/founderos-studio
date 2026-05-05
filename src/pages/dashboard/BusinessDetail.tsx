import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageHeader, SectionHeader } from "@/components/Common";
import { ScoreRing } from "@/components/ScoreRing";
import { businesses } from "@/lib/mock-data";
import { StatusBadge } from "./Overview";
import { ArrowLeft, ExternalLink, Sparkles } from "lucide-react";
import MarketResearch from "./MarketResearch";
import Strategy from "./Strategy";
import BrandKit from "./BrandKit";
import ProductBuilder from "./ProductBuilder";
import WebsiteBuilder from "./WebsiteBuilder";
import Marketing from "./Marketing";
import Analytics from "./Analytics";
import Automation from "./Automation";

export default function BusinessDetail() {
  const { id } = useParams();
  const business = businesses.find((b) => b.id === id) || businesses[0];

  const scores = [
    { label: "Idea", value: 88 },
    { label: "Market", value: 82 },
    { label: "Brand", value: 91 },
    { label: "Website", value: 76 },
    { label: "Marketing", value: 70 },
  ];

  return (
    <div>
      <Link to="/app/businesses" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1 mb-4"><ArrowLeft className="h-3.5 w-3.5" /> Back to businesses</Link>
      <PageHeader
        title={`${business.logo} ${business.name}`}
        description={business.description}
        action={
          <div className="flex gap-2">
            <Button variant="outline">View website <ExternalLink className="h-3.5 w-3.5 ml-1" /></Button>
            <Button className="bg-gradient-aurora text-white shadow-glow hover:opacity-90"><Sparkles className="h-4 w-4 mr-2" /> Optimize</Button>
          </div>
        }
      />

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-muted/40 p-1 h-auto flex flex-wrap gap-1">
          {["overview", "research", "strategy", "brand", "product", "website", "marketing", "analytics", "automation"].map((t) => (
            <TabsTrigger key={t} value={t} className="capitalize data-[state=active]:bg-background data-[state=active]:shadow-sm">{t}</TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid lg:grid-cols-[1fr_320px] gap-6">
            <Card className="p-6 glass border-border">
              <SectionHeader title="Business summary" action={<StatusBadge status={business.status} />} />
              <p className="text-muted-foreground leading-relaxed">{business.description} Targeting <span className="text-foreground font-medium">{business.industry}</span> market with a clear differentiation in AI-led personalization. Current revenue trajectory: <span className="text-foreground font-medium">{business.revenue}</span>.</p>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-3">
                {scores.map((s) => (
                  <div key={s.label} className="text-center p-3 rounded-xl bg-muted/30 border border-border">
                    <div className="font-display font-bold text-2xl gradient-text">{s.value}</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 glass border-border flex flex-col items-center text-center">
              <div className="text-sm text-muted-foreground mb-3">Launch Readiness</div>
              <ScoreRing score={business.readiness} size={180} label="Ready" />
              <div className="text-xs text-muted-foreground mt-4">Updated 2 minutes ago</div>
            </Card>
          </div>

          <Card className="p-6 glass border-border">
            <SectionHeader title="Next recommended actions" />
            <div className="space-y-2">
              {[
                "Re-test landing page hero with 3 alternate headlines",
                "Generate 2 new Reels scripts for Instagram",
                "Run competitor pricing scan (last scan 3 days ago)",
                "Launch 5-email welcome funnel",
              ].map((a, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-border hover:bg-muted/30 cursor-pointer">
                  <div className="h-7 w-7 rounded-lg bg-gradient-aurora/10 ring-1 ring-primary/20 grid place-items-center text-xs font-semibold text-primary">{i + 1}</div>
                  <span className="text-sm flex-1">{a}</span>
                  <Button size="sm" variant="ghost">Run</Button>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="research"><MarketResearch /></TabsContent>
        <TabsContent value="strategy"><Strategy /></TabsContent>
        <TabsContent value="brand"><BrandKit /></TabsContent>
        <TabsContent value="product"><ProductBuilder /></TabsContent>
        <TabsContent value="website"><WebsiteBuilder /></TabsContent>
        <TabsContent value="marketing"><Marketing /></TabsContent>
        <TabsContent value="analytics"><Analytics /></TabsContent>
        <TabsContent value="automation"><Automation /></TabsContent>
      </Tabs>
    </div>
  );
}

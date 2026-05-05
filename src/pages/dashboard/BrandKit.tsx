import { Card } from "@/components/ui/card";
import { PageHeader, SectionHeader } from "@/components/Common";
import { CopyButton, RegenerateButton } from "@/components/ActionButtons";

const palette = [
  { name: "Primary", hex: "#7C3AED", role: "Hero, CTAs" },
  { name: "Aurora", hex: "#C026D3", role: "Accents, gradients" },
  { name: "Cyan", hex: "#06B6D4", role: "Highlights" },
  { name: "Ink", hex: "#0B0B14", role: "Body text" },
  { name: "Mist", hex: "#F8F8FB", role: "Backgrounds" },
];

const fonts = [
  { family: "Space Grotesk", role: "Display & headings", sample: "FitFlow AI" },
  { family: "Inter", role: "Body & UI", sample: "Real personal training, on autopilot." },
];

export default function BrandKit() {
  const taglines = ["Your AI personal trainer, on autopilot.", "Real fitness, real results — guided by AI.", "Train smarter. Live stronger."];
  const names = ["FitFlow AI", "Coach.OS", "MorningRep", "FlexAxis"];
  const voice = "Warm, confident, science-backed. We talk like a friend who happens to be a world-class coach. Empowering, never preachy. Crisp sentences. Action-oriented language.";
  const aboutText = "FitFlow AI is the world's first autonomous personal trainer that adapts to you in real time. Built by athletes and engineers who believe the best workout is the one you'll actually finish.";
  const socialBio = "🏋️ AI personal trainer in your pocket\n💪 Plans that adapt every single day\n🚀 30-day transformation, not 30 weeks";

  return (
    <div className="space-y-6">
      <PageHeader title="Brand Kit" description="Your AI-generated brand identity. Edit anything." />

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6 glass border-border">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="font-display font-semibold">Brand name ideas</div>
              <p className="text-xs text-muted-foreground">Top 4 picks from the Brand Agent</p>
            </div>
            <RegenerateButton />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {names.map((n) => (
              <div key={n} className="p-4 rounded-xl bg-muted/30 border border-border flex items-center justify-between">
                <span className="font-display font-semibold">{n}</span>
                <CopyButton text={n} />
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 glass border-border">
          <SectionHeader title="Taglines" action={<RegenerateButton />} />
          <div className="space-y-2">
            {taglines.map((t) => (
              <div key={t} className="p-3 rounded-xl bg-muted/30 border border-border flex items-center justify-between gap-3">
                <span className="text-sm">{t}</span>
                <CopyButton text={t} />
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6 glass border-border">
        <SectionHeader title="Brand colors" action={<RegenerateButton />} />
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {palette.map((p) => (
            <div key={p.name} className="rounded-xl border border-border overflow-hidden">
              <div className="aspect-square" style={{ background: p.hex }} />
              <div className="p-3">
                <div className="font-medium text-sm">{p.name}</div>
                <div className="text-xs text-muted-foreground font-mono">{p.hex}</div>
                <div className="text-[10px] text-muted-foreground mt-1">{p.role}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6 glass border-border">
          <SectionHeader title="Typography" action={<RegenerateButton />} />
          <div className="space-y-3">
            {fonts.map((f) => (
              <div key={f.family} className="p-4 rounded-xl bg-muted/30 border border-border">
                <div className="text-xs text-muted-foreground mb-2">{f.family} · {f.role}</div>
                <div className="font-display text-3xl font-bold">{f.sample}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 glass border-border">
          <SectionHeader title="Logo prompt" action={<CopyButton text="Modern minimalist logomark for FitFlow AI: lowercase wordmark with a stylized infinity flow icon, gradient from violet to magenta, geometric and tech-forward." />} />
          <div className="aspect-video rounded-xl bg-gradient-aurora grid place-items-center mb-4 relative overflow-hidden">
            <div className="absolute inset-0 mesh-bg opacity-50" />
            <div className="font-display font-bold text-white text-4xl relative">FitFlow<span className="opacity-70">.AI</span></div>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">Modern minimalist logomark: lowercase wordmark with a stylized infinity flow icon, gradient from violet to magenta, geometric and tech-forward.</p>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="p-6 glass border-border lg:col-span-2">
          <SectionHeader title="Brand voice" action={<><CopyButton text={voice} /><RegenerateButton /></>} />
          <p className="text-sm text-muted-foreground leading-relaxed">{voice}</p>
        </Card>
        <Card className="p-6 glass border-border">
          <SectionHeader title="Social bio" action={<CopyButton text={socialBio} />} />
          <pre className="text-sm whitespace-pre-wrap font-sans leading-relaxed">{socialBio}</pre>
        </Card>
      </div>

      <Card className="p-6 glass border-border">
        <SectionHeader title="About text" action={<><CopyButton text={aboutText} /><RegenerateButton /></>} />
        <p className="text-base leading-relaxed">{aboutText}</p>
      </Card>
    </div>
  );
}

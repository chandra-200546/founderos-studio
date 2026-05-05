import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageHeader, SectionHeader } from "@/components/Common";
import { CopyButton, RegenerateButton } from "@/components/ActionButtons";
import { Instagram, Linkedin, Mail, Megaphone, Video, Calendar } from "lucide-react";

const social = [
  { platform: "Instagram", icon: Instagram, posts: ["3 morning habits that 10x'd my energy 🌅", "Why willpower is a myth (and what works instead)", "POV: your AI coach checks in every morning"] },
  { platform: "LinkedIn", icon: Linkedin, posts: ["I trained 10,000 professionals in 2025. Here's what burnout actually looks like →", "The 4-hour fitness rule for busy founders", "Why 'no time to work out' is a planning problem, not a time problem"] },
];

const emails = [
  { day: "Day 1", subject: "Welcome — let's build your plan", preview: "Your first AI workout drops tomorrow. Here's what to expect..." },
  { day: "Day 2", subject: "Your first workout is here 💪", preview: "20 minutes. No equipment. Designed for your body and schedule..." },
  { day: "Day 3", subject: "How are you feeling?", preview: "Your AI coach has questions. The more you share, the smarter your plan..." },
  { day: "Day 5", subject: "Your week 1 results", preview: "Here's what we've learned about you so far..." },
  { day: "Day 7", subject: "Unlock Pro — 50% off", preview: "You're on a roll. Don't lose momentum..." },
];

const calendar = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  type: ["Reel", "Story", "Post", "Email", "Ad"][i % 5],
  topic: ["Habits", "Mindset", "Workout", "Nutrition", "Mobility"][i % 5],
}));

export default function Marketing() {
  return (
    <div className="space-y-6">
      <PageHeader title="Marketing" description="AI-generated campaigns ready to ship." />

      <Tabs defaultValue="social">
        <TabsList className="bg-muted/40 p-1 h-auto flex flex-wrap">
          {[["social","Social Posts"],["ads","Ads"],["email","Email"],["video","Video Scripts"],["calendar","Content Calendar"]].map(([v,l]) => (
            <TabsTrigger key={v} value={v} className="data-[state=active]:bg-background">{l}</TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="social" className="mt-6 space-y-4">
          {social.map((s) => (
            <Card key={s.platform} className="p-6 glass border-border">
              <SectionHeader title={s.platform} action={<RegenerateButton />} />
              <div className="grid md:grid-cols-3 gap-3">
                {s.posts.map((p) => (
                  <div key={p} className="p-4 rounded-xl bg-muted/30 border border-border flex flex-col gap-3">
                    <s.icon className="h-4 w-4 text-primary" />
                    <p className="text-sm flex-1">{p}</p>
                    <CopyButton text={p} className="self-start -ml-2" />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="ads" className="mt-6 space-y-4">
          <Card className="p-6 glass border-border">
            <SectionHeader title="Meta ad copies" action={<RegenerateButton />} />
            <div className="space-y-2">
              {["Stop guessing what to do at the gym. Your AI coach builds your perfect workout in 30 seconds. Free to try.", "Lose the plateau, not your motivation. AI-powered fitness that adapts every single day.", "Real coaching at the price of a coffee. 7-day free trial."].map((c) => (
                <div key={c} className="flex items-center justify-between gap-3 p-3 rounded-xl bg-muted/30 border border-border">
                  <p className="text-sm">{c}</p>
                  <CopyButton text={c} />
                </div>
              ))}
            </div>
          </Card>
          <Card className="p-6 glass border-border">
            <SectionHeader title="Google ad copies" action={<RegenerateButton />} />
            <div className="space-y-2">
              {["AI Personal Trainer | Plans That Adapt Daily | Try 7 Days Free", "Smart Fitness, Real Results | From ₹499/mo | Cancel Anytime"].map((c) => (
                <div key={c} className="flex items-center justify-between gap-3 p-3 rounded-xl bg-muted/30 border border-border">
                  <p className="text-sm font-mono">{c}</p>
                  <CopyButton text={c} />
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="email" className="mt-6">
          <Card className="p-6 glass border-border">
            <SectionHeader title="7-day welcome funnel" action={<RegenerateButton />} />
            <div className="space-y-2">
              {emails.map((e) => (
                <div key={e.day} className="grid sm:grid-cols-[80px_1fr_auto] gap-3 p-3 rounded-xl bg-muted/30 border border-border items-center">
                  <Badge variant="outline" className="w-fit"><Mail className="h-3 w-3 mr-1" />{e.day}</Badge>
                  <div>
                    <div className="font-medium text-sm">{e.subject}</div>
                    <div className="text-xs text-muted-foreground">{e.preview}</div>
                  </div>
                  <CopyButton text={`${e.subject}\n\n${e.preview}`} />
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="video" className="mt-6">
          <Card className="p-6 glass border-border">
            <SectionHeader title="Reel script generator" action={<RegenerateButton />} />
            <div className="p-5 rounded-xl bg-muted/30 border border-border space-y-3 font-mono text-xs">
              <div><span className="text-primary font-semibold">[HOOK 0:00–0:03]</span> "Your AI coach just told me to do this — and it's changing everything."</div>
              <div><span className="text-primary font-semibold">[BUILD 0:03–0:15]</span> Show 3 quick exercises with on-screen captions and beats.</div>
              <div><span className="text-primary font-semibold">[REVEAL 0:15–0:25]</span> "It adapts every single day to your energy. No two weeks are the same."</div>
              <div><span className="text-primary font-semibold">[CTA 0:25–0:30]</span> "Link in bio. 7 days free. Try once, you'll never go back."</div>
            </div>
            <CopyButton text="..." className="mt-3" />
          </Card>
        </TabsContent>

        <TabsContent value="calendar" className="mt-6">
          <Card className="p-6 glass border-border">
            <SectionHeader title="30-day content calendar" action={<><Calendar className="h-3.5 w-3.5 mr-1 inline" /><RegenerateButton /></>} />
            <div className="grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-10 gap-2">
              {calendar.map((c) => (
                <div key={c.day} className="aspect-square p-2 rounded-lg border border-border bg-muted/30 hover:bg-gradient-aurora/10 hover:border-primary/30 cursor-pointer transition flex flex-col">
                  <div className="text-[10px] text-muted-foreground">Day {c.day}</div>
                  <div className="text-[10px] font-semibold text-primary mt-auto">{c.type}</div>
                  <div className="text-[10px] text-muted-foreground">{c.topic}</div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function Badge({ children, className, variant }: any) {
  return <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium ${variant === "outline" ? "border border-border" : "bg-muted"} ${className||""}`}>{children}</span>;
}

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageHeader, SectionHeader } from "@/components/Common";
import { CopyButton } from "@/components/ActionButtons";
import { useTheme } from "@/providers/theme-provider";
import { Sun, Moon } from "lucide-react";

export default function Settings() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <PageHeader title="Settings" description="Manage your account and workspace." />

      <Tabs defaultValue="profile" orientation="vertical" className="grid lg:grid-cols-[200px_1fr] gap-6">
        <TabsList className="bg-transparent flex-col items-stretch h-fit gap-1 p-0">
          {[["profile","Profile"],["workspace","Workspace"],["api","API keys"],["notifications","Notifications"],["theme","Theme"],["security","Security"],["danger","Delete account"]].map(([v,l]) => (
            <TabsTrigger key={v} value={v} className="justify-start data-[state=active]:bg-gradient-aurora/10 data-[state=active]:text-primary">{l}</TabsTrigger>
          ))}
        </TabsList>

        <div>
          <TabsContent value="profile">
            <Card className="p-6 glass border-border space-y-4">
              <SectionHeader title="Profile" />
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5"><Label>Full name</Label><Input defaultValue="Founder Demo" /></div>
                <div className="space-y-1.5"><Label>Email</Label><Input defaultValue="founder@founderos.ai" type="email" /></div>
              </div>
              <Button className="bg-gradient-aurora text-white">Save changes</Button>
            </Card>
          </TabsContent>
          <TabsContent value="workspace">
            <Card className="p-6 glass border-border space-y-4">
              <SectionHeader title="Workspace" />
              <div className="space-y-1.5"><Label>Workspace name</Label><Input defaultValue="My Founder Studio" /></div>
              <div className="space-y-1.5"><Label>Default timezone</Label><Input defaultValue="Asia/Kolkata" /></div>
            </Card>
          </TabsContent>
          <TabsContent value="api">
            <Card className="p-6 glass border-border space-y-4">
              <SectionHeader title="API keys" />
              <div className="p-4 rounded-xl bg-muted/30 border border-border flex items-center gap-3">
                <code className="font-mono text-xs flex-1 truncate">fos_live_••••••••••••••••••••••••3F2a</code>
                <CopyButton text="fos_live_..." />
              </div>
              <Button variant="outline">Regenerate key</Button>
            </Card>
          </TabsContent>
          <TabsContent value="notifications">
            <Card className="p-6 glass border-border space-y-4">
              <SectionHeader title="Notifications" />
              {["Email digests","Agent alerts","Marketing updates","Weekly performance report"].map((n) => (
                <div key={n} className="flex items-center justify-between p-3 rounded-xl bg-muted/30 border border-border">
                  <span className="text-sm">{n}</span>
                  <Switch defaultChecked />
                </div>
              ))}
            </Card>
          </TabsContent>
          <TabsContent value="theme">
            <Card className="p-6 glass border-border space-y-4">
              <SectionHeader title="Theme" />
              <div className="grid grid-cols-2 gap-3">
                {[{ k: "light", icon: Sun, label: "Light" }, { k: "dark", icon: Moon, label: "Dark" }].map((t) => (
                  <button key={t.k} onClick={() => theme !== t.k && toggleTheme()} className={`p-5 rounded-xl border ${theme === t.k ? "border-primary bg-gradient-aurora/10" : "border-border"} flex flex-col items-center gap-2 transition`}>
                    <t.icon className="h-6 w-6" />
                    <span className="text-sm font-medium">{t.label}</span>
                  </button>
                ))}
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="security">
            <Card className="p-6 glass border-border space-y-4">
              <SectionHeader title="Security" />
              <div className="space-y-1.5"><Label>Current password</Label><Input type="password" placeholder="••••••••" /></div>
              <div className="space-y-1.5"><Label>New password</Label><Input type="password" placeholder="••••••••" /></div>
              <Button className="bg-gradient-aurora text-white">Update password</Button>
              <div className="flex items-center justify-between p-3 rounded-xl bg-muted/30 border border-border mt-4">
                <div><div className="text-sm font-medium">Two-factor auth</div><div className="text-xs text-muted-foreground">Add an extra layer of security</div></div>
                <Switch />
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="danger">
            <Card className="p-6 border-destructive/30 bg-destructive/5">
              <SectionHeader title="Delete account" description="This action is permanent and cannot be undone." />
              <Button variant="destructive">Delete my account</Button>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

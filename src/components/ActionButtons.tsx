import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function CopyButton({ text, className, label = "Copy" }: { text: string; className?: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const handle = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <Button variant="ghost" size="sm" onClick={handle} className={cn("gap-2 h-8", className)}>
      {copied ? <Check className="h-3.5 w-3.5 text-success" /> : <Copy className="h-3.5 w-3.5" />}
      <span className="text-xs">{copied ? "Copied" : label}</span>
    </Button>
  );
}

export function RegenerateButton({ onClick, className }: { onClick?: () => void; className?: string }) {
  const handle = () => {
    onClick?.();
    toast.success("Regenerating with AI...");
  };
  return (
    <Button variant="ghost" size="sm" onClick={handle} className={cn("gap-2 h-8", className)}>
      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
      </svg>
      <span className="text-xs">Regenerate</span>
    </Button>
  );
}

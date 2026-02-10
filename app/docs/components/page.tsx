"use client"

import Link from "next/link";
import { Terminal, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const components = [
  "accordion", "alert", "badge", "button", "card", "checkbox", "command", "dialog", "input-otp",
  "input", "progress", "separator", "sheet", "sidebar",
  "skeleton", "spinner", "table", "tabs", "tooltip"
];

export default function ComponentsListPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyInstall = (comp: string) => {
    navigator.clipboard.writeText(`npx shadcn@latest add @shad-punk/${comp}`);
    setCopied(comp);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="max-w-6xl space-y-8">
      <div className="mb-8">
        <h1 className="font-mono text-5xl font-bold text-primary">Components</h1>
        <p className="font-mono text-xl text-muted-foreground">
          Primitives for your next cyberpunk project
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {components.map((comp) => (
          <Card key={comp} className="group  transition-colors">
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <Link
                  href={`/docs/components/${comp}`}
                  className="flex items-center gap-2 flex-1"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Terminal size={16} className="text-secondary" />
                    <span className="font-mono text-lg text-primary group-hover:text-primary/80 capitalize">
                      {comp}
                    </span>
                  </div>
                </Link>
                <Button
                  size="sm"
                  onClick={() => copyInstall(comp)}
                  className="ml-2"
                >
                  {copied === comp ? <Check size={14} /> : <Copy size={14} />}
                </Button>
              </div>
              <div className="bg-black border border-primary/30 rounded p-2">
                <code className="font-mono text-xs text-muted-foreground">
                  import &#123; {comp.charAt(0).toUpperCase() + comp.slice(1)} &#125; from...
                </code>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
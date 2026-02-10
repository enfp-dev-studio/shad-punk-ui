"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import {
  Terminal as TerminalIcon,
  Cpu,
  Shield,
  Rocket,
  Code,
  Copy,
  Check,
  Github,
  ArrowRight,
  Sparks,
  Box3dPoint,
  ColorFilter
} from "iconoir-react";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const copyInstallCommand = () => {
    navigator.clipboard.writeText("npx shadcn@latest add @shad-punk/all");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Scanline Effect */}
      <div className="absolute inset-0 effect-scanline pointer-events-none z-10" />

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(rgba(var(--glow-secondary-rgb), 0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(var(--glow-secondary-rgb), 0.5) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }} />

      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[120px] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <header className="flex items-center justify-between py-6 border-b border-primary/20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="p-2 bg-primary/10 rounded-lg border border-primary/30 group-hover:border-primary/50 transition-colors">
              <TerminalIcon className="text-primary" width={24} height={24} />
            </div>
            <div>
              <h1 className="font-mono text-xl font-bold text-foreground">Shad-Punk</h1>
              <span className="font-mono text-xs text-muted-foreground">v1.0.0</span>
            </div>
          </Link>

          <div className="flex gap-3 items-center">
            <ThemeSwitcher />
            <Button size="sm" className="hidden sm:inline-flex" onClick={() => router.push('/docs')}>
              Docs
            </Button>
            <Button size="sm" onClick={() => window.open("https://github.com/enfp-dev-studio/shad-punk-ui", "_blank")}>
              <Github width={16} height={16} />
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 lg:py-32 text-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="flex justify-center">
              <Badge className="px-4 py-2 text-sm">
                <Sparks width={14} height={14} className="mr-2" />
                Mech Combat UI Components
              </Badge>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-mono font-bold tracking-tight">
              <span className="text-foreground">Build </span>
              <span className="text-primary">Cyberpunk</span>
              <br />
              <span className="text-foreground">Interfaces</span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground font-mono">
              Armored Core & Edgerunners inspired UI components for Next.js.
              <br className="hidden sm:block" />
              Scanlines, HUD effects, and tactical aesthetics.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="text-lg px-8" onClick={() => router.push('/docs')}>
                Get Started
                <ArrowRight width={20} height={20} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="destructive"
                className="text-lg px-8 font-mono"
                onClick={() => router.push('/docs/components')}
              >
                View Components
              </Button>
            </div>

            {/* Install Command */}
            <div className="flex justify-center pt-8">
              <div
                className="flex items-center gap-3 px-6 py-4 bg-card/50 backdrop-blur-sm rounded-lg border border-primary/30 cursor-pointer hover:border-primary/50 transition-all group"
                onClick={copyInstallCommand}
              >
                <code className="font-mono text-sm sm:text-base text-primary">
                  npx shadcn@latest add @shad-punk/all
                </code>
                <button className="p-2 rounded bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  {copied ? (
                    <Check width={16} height={16} className="text-primary" />
                  ) : (
                    <Copy width={16} height={16} className="text-primary" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 border-t border-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="group hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="p-3 w-fit bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                  <Box3dPoint width={28} height={28} className="text-primary" />
                </div>
                <CardTitle>23+ Components</CardTitle>
                <CardDescription>
                  Cards, Buttons, Dialogs, Tables, Tabs, and more. All styled with cyberpunk aesthetics.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="p-3 w-fit bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                  <ColorFilter width={28} height={28} className="text-primary" />
                </div>
                <CardTitle>Dual Themes</CardTitle>
                <CardDescription>
                  Edgerunners (neon pink/cyan) and Armored Core (tactical orange/green) themes included.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="p-3 w-fit bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                  <Cpu width={28} height={28} className="text-primary" />
                </div>
                <CardTitle>shadcn Compatible</CardTitle>
                <CardDescription>
                  Works with shadcn/ui CLI. Just add the registry and install any component.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Component Preview Section */}
        <section className="py-20 border-t border-primary/20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-mono font-bold text-foreground mb-4">
              Component Preview
            </h2>
            <p className="text-muted-foreground font-mono">
              Interactive components with HUD effects
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Buttons Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-mono">Buttons</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <Button>Default</Button>
                <Button variant="destructive">Destructive</Button>
                <Button size="sm">Small</Button>
                <Button size="lg">Large</Button>
              </CardContent>
            </Card>

            {/* Badges Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-mono">Badges</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <Badge>Default</Badge>
                <Badge variant="destructive">Alert</Badge>
                <Badge><Shield width={12} height={12} className="mr-1" />Secure</Badge>
                <Badge><Rocket width={12} height={12} className="mr-1" />Deploy</Badge>
              </CardContent>
            </Card>

            {/* Cards Preview */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-sm font-mono">Cards with HUD Effects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-background/50 rounded border border-primary/30 space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-muted-foreground">CPU</span>
                      <span className="text-primary">42%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-[42%] bg-primary rounded-full" />
                    </div>
                  </div>
                  <div className="p-4 bg-background/50 rounded border border-primary/30 space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-muted-foreground">Memory</span>
                      <span className="text-primary">68%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-[68%] bg-primary rounded-full" />
                    </div>
                  </div>
                  <div className="p-4 bg-background/50 rounded border border-primary/30 space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-muted-foreground">Network</span>
                      <span className="text-primary">89%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-[89%] bg-primary rounded-full" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Button size="lg" onClick={() => router.push('/docs/components')}>
              View All Components
              <ArrowRight width={20} height={20} className="ml-2" />
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-primary/20 text-center">
          <p className="font-mono text-sm text-muted-foreground">
            Made with ❤️ by{" "}
            <a
              href="https://github.com/enfp-dev-studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary transition-colors"
            >
              enfp-dev-studio
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

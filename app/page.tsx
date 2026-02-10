"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import {
  Terminal as TerminalIcon,
  Cpu,
  Shield,
  Github,
  ArrowRight,
  Box3dPoint,
  Settings,
  Antenna,
  Server,
  Copy,
  Check
} from "iconoir-react";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { HyperspaceBackground } from "@/components/backgrounds";
import { ChevronRight, Rocket } from "lucide-react";

export default function CockpitPage() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const copyInstallCommand = () => {
    navigator.clipboard.writeText("npx shadcn@latest add @shad-punk/all");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-screen bg-black overflow-hidden relative">
      {/* Hyperspace/Wormhole Background - easily swappable */}
      <HyperspaceBackground />

      {/* Scanline Effect */}
      <div className="absolute inset-0 effect-scanline pointer-events-none z-50" />

      {/* Cockpit Frame - Vignette Effect */}
      <div className="max-w-7xl mx-auto self-center h-full">
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            boxShadow: 'inset 0 0 150px 50px rgba(0,0,0,0.9), inset 0 0 80px 30px rgba(0,0,0,0.7)'
          }}
        />

        {/* Main Grid Layout - Responsive */}
        <div className="relative z-40 h-full grid grid-cols-[minmax(200px,240px)_1fr_minmax(200px,240px)] lg:grid-cols-[minmax(220px,260px)_1fr_minmax(220px,260px)] grid-rows-[auto_1fr_auto] gap-x-4 lg:gap-x-8">

          {/* Top Bar - spans all columns */}
          <header className="col-span-3 flex items-center justify-between px-8 py-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="p-2 bg-primary/10 rounded border border-primary/30">
                <TerminalIcon className="text-primary" width={20} height={20} />
              </div>
              <span className="font-mono text-lg font-bold text-primary">SHAD-PUNK</span>
            </Link>

            <div className="flex gap-3 items-center">
              <ThemeSwitcher />
              <Button size="sm" onClick={() => router.push('/docs')}>DOCS</Button>
              <Button size="sm" onClick={() => window.open("https://github.com/enfp-dev-studio/shad-punk-ui", "_blank")}>
                <Github width={16} height={16} />
              </Button>
            </div>
          </header>

          {/* Left Panel - 3D Perspective */}
          <div
            className="flex flex-col justify-center px-6 gap-y-4"
            style={{
              perspective: '800px',
              perspectiveOrigin: 'right center',
            }}
          >
            <div className="flex flex-col rotate-y-45 gap-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xs font-mono text-primary flex items-center gap-2">
                    <Antenna width={14} height={14} />
                    COMMS
                  </CardTitle>
                </CardHeader>
                <CardContent className="gap-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status</span>
                    <Badge className="text-[10px]">ONLINE</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Registry</span>
                    <span className="text-primary">v1.0.0</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xs font-mono text-primary flex items-center gap-2">
                    <Rocket width={14} height={14} />
                    AMMO
                  </CardTitle>
                </CardHeader>
                <CardContent className="gap-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status</span>
                    <Badge className="text-[10px]">ONLINE</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Registry</span>
                    <span className="text-primary">v1.0.0</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          {/* Center Viewport */}
          <div className="flex items-center justify-center">
            <div className="flex flex-col text-center gap-y-8">
              <h1 className="text-5xl lg:text-7xl font-mono font-bold tracking-tight leading-tight">
                <span className="text-foreground">BUILD </span>
                <span className="text-primary">CYBERPUNK</span>
                <br />
                <span className="text-foreground">INTERFACES</span>
              </h1>
              <div className="flex gap-4 justify-center">
                <Button size="lg" onClick={() => router.push('/docs')}>
                  GET STARTED
                  <ChevronRight width={18} height={18} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Panel - 3D Perspective */}
          <div
            className="flex flex-col justify-center px-6 gap-y-4"
            style={{
              perspective: '800px',
              perspectiveOrigin: 'left center',
            }}
          >
            <div className="flex flex-col -rotate-y-45 gap-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xs font-mono text-primary flex items-center gap-2">
                    <Box3dPoint width={14} height={14} />
                    SCANNER
                  </CardTitle>
                </CardHeader>
                <CardContent className="gap-y-1.5 text-[10px]">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Card</span>
                    <span className="text-primary">READY</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Button</span>
                    <span className="text-primary">READY</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dialog</span>
                    <span className="text-primary">READY</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Table</span>
                    <span className="text-primary">READY</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xs font-mono text-primary flex items-center gap-2">
                    <Server width={14} height={14} />
                    FUEL
                  </CardTitle>
                </CardHeader>
                <CardContent className="gap-y-2">
                  <div className="gap-y-1">
                    <div className="flex justify-between text-[10px]">
                      <span className="text-muted-foreground">Bundle</span>
                      <span className="text-primary">142KB</span>
                    </div>
                    <Progress value={35} className="h-1.5" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom Instrument Panel - spans all columns */}
          <div className="col-span-3 px-8 pb-4 flex items-end justify-between">
            {/* Left Instruments - Hologram Style */}
            <div className="flex gap-4">
              <div className="text-center animate-pulse" style={{ animationDuration: '3s' }}>
                <div className="text-[10px] text-cyan-400/80 font-mono mb-1 tracking-widest">ENG</div>
                <div
                  className="w-12 h-12 rounded border border-cyan-400/60 flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(180deg, rgba(0,255,255,0.15) 0%, rgba(0,255,255,0.05) 100%)',
                    boxShadow: '0 0 20px rgba(0,255,255,0.4), inset 0 0 15px rgba(0,255,255,0.1)',
                  }}
                >
                  <Cpu width={20} height={20} className="text-cyan-400" style={{ filter: 'drop-shadow(0 0 8px rgba(0,255,255,0.8))' }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/10 to-transparent" />
                </div>
              </div>
              <div className="text-center animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.3s' }}>
                <div className="text-[10px] text-cyan-400/80 font-mono mb-1 tracking-widest">SYS</div>
                <div
                  className="w-12 h-12 rounded border border-cyan-400/60 flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(180deg, rgba(0,255,255,0.15) 0%, rgba(0,255,255,0.05) 100%)',
                    boxShadow: '0 0 20px rgba(0,255,255,0.4), inset 0 0 15px rgba(0,255,255,0.1)',
                  }}
                >
                  <Settings width={20} height={20} className="text-cyan-400" style={{ filter: 'drop-shadow(0 0 8px rgba(0,255,255,0.8))' }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/10 to-transparent" />
                </div>
              </div>
              <div className="text-center animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.6s' }}>
                <div className="text-[10px] text-cyan-400/80 font-mono mb-1 tracking-widest">WEP</div>
                <div
                  className="w-12 h-12 rounded border border-cyan-400/60 flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(180deg, rgba(0,255,255,0.15) 0%, rgba(0,255,255,0.05) 100%)',
                    boxShadow: '0 0 20px rgba(0,255,255,0.4), inset 0 0 15px rgba(0,255,255,0.1)',
                  }}
                >
                  <Shield width={20} height={20} className="text-cyan-400" style={{ filter: 'drop-shadow(0 0 8px rgba(0,255,255,0.8))' }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/10 to-transparent" />
                </div>
              </div>
            </div>

            {/* Center Radar/Install Command */}
            <div
              onClick={copyInstallCommand}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-primary uppercase tracking-wider">Quick Install</span>
                {copied ? (
                  <Check width={14} height={14} className="text-primary" />
                ) : (
                  <Copy width={14} height={14} className="text-muted-foreground" />
                )}
              </div>
              <code className="font-mono text-sm text-primary block text-center">
                npx shadcn@latest add @shad-punk/all
              </code>
            </div>

            {/* Right Info - Hologram Style */}
            <div
              className="text-right gap-y-1 px-4 py-2 rounded border border-cyan-400/50 animate-pulse"
              style={{
                animationDuration: '4s',
                background: 'linear-gradient(180deg, rgba(0,255,255,0.1) 0%, rgba(0,255,255,0.03) 100%)',
                boxShadow: '0 0 15px rgba(0,255,255,0.25), inset 0 0 10px rgba(0,255,255,0.05)',
              }}
            >
              <div className="text-[10px] font-mono text-cyan-400/80 tracking-wider">ENFP-DEV-STUDIO</div>
              <div className="text-[10px] font-mono text-cyan-400" style={{ filter: 'drop-shadow(0 0 4px rgba(0,255,255,0.6))' }}>MIT LICENSE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

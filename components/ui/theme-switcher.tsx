"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Zap, Crosshair } from "lucide-react"
import { cn } from "@/lib/utils"

function ThemeSwitcher({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const isEdgerunners = theme === "edgerunners"

  return (
    <button
      onClick={() => setTheme(isEdgerunners ? "armored-core" : "edgerunners")}
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 font-mono text-[10px] font-bold tracking-[0.2em] uppercase",
        "border border-primary/50 bg-card/50 text-primary",
        "hover:border-primary hover:bg-primary/10",
        "hover:shadow-[0_0_12px_rgba(var(--glow-rgb),0.4)]",
        "transition-all duration-300 cursor-pointer",
        "[clip-path:var(--clip-button)]",
        className
      )}
    >
      {isEdgerunners ? (
        <>
          <Zap size={12} />
          <span>Edgerunners</span>
        </>
      ) : (
        <>
          <Crosshair size={12} />
          <span>Armored Core</span>
        </>
      )}
    </button>
  )
}

export { ThemeSwitcher }

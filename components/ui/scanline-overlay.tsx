import { cn } from "@/lib/utils"

function ScanlineOverlay({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("effect-scanline-inner", className)}
    />
  )
}

export { ScanlineOverlay }

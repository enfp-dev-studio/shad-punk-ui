import { cn } from "@/lib/utils"

function CornerBrackets({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("effect-corner-inner", className)}
    />
  )
}

export { CornerBrackets }

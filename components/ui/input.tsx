import * as React from "react"
import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <div
      data-augmented-ui="tl-clip tr-clip br-clip bl-clip border"
      className="aug-button relative"
    >
      <input
        type={type}
        data-slot="input"
        className={cn(
          "h-9 w-full min-w-0 px-3 py-1 text-base shadow-xs transition-all outline-none",
          "bg-transparent text-primary",
          "placeholder:text-muted-foreground placeholder:font-mono",
          "font-mono tracking-wide",
          "focus:shadow-[0_0_8px_rgba(var(--glow-rgb),0.25),inset_0_1px_0_0_rgba(var(--glow-rgb),0.15)]",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-primary",
          "selection:bg-secondary/30 selection:text-foreground",
          "aria-invalid:shadow-[0_0_8px_rgba(var(--glow-rgb),0.2)]",
          "md:text-sm",
          className
        )}
        {...props}
      />
    </div>
  )
}

export { Input }

import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "animate-pulse",
        "bg-primary/5 border border-primary/20",
        "shadow-[inset_0_1px_0_0_rgba(var(--glow-rgb),0.08)]",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }

import * as React from "react"
import { Loader2Icon } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ScanlineOverlay } from "@/components/ui/scanline-overlay"

const spinnerVariants = cva(
  "animate-spin",
  {
    variants: {
      size: {
        sm: "size-3",
        default: "size-4",
        lg: "size-6",
        xl: "size-8",
      },
      variant: {
        default: "text-primary/70 drop-shadow-[0_0_8px_rgba(var(--glow-rgb),0.5)]",
        destructive: "text-destructive/70 drop-shadow-[0_0_8px_rgba(var(--glow-rgb),0.5)]",
      }
    },
    defaultVariants: {
      size: "default",
      variant: "default"
    }
  }
)

function Spinner({
  className,
  size,
  variant,
  ...props
}: React.ComponentProps<"svg"> & VariantProps<typeof spinnerVariants>) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn(spinnerVariants({ size, variant }), className)}
      {...props}
    />
  )
}

function LoadingOverlay({
  className,
  children,
  size = "default",
  variant = "default",
  text,
  ...props
}: React.ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof spinnerVariants> & {
    text?: string
  }) {
  return (
    <div
      data-slot="loading-overlay"
      data-augmented-ui="tl-clip tr-clip br-clip bl-clip border"
      className={cn(
        "absolute inset-0 z-50 flex flex-col items-center justify-center gap-4",
        "bg-card/95 backdrop-blur-sm aug-card",
        "relative overflow-hidden",
        className
      )}
      {...props}
    >
      <ScanlineOverlay />
      <Spinner size={size} variant={variant} />
      {(text || children) && (
        <div className="font-mono text-sm tracking-wider uppercase text-primary/90 relative z-10">
          {text || children}
        </div>
      )}
    </div>
  )
}

export { Spinner, LoadingOverlay, spinnerVariants }

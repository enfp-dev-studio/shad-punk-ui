import * as React from "react"

import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ScanlineOverlay } from "@/components/ui/scanline-overlay"

const spinnerVariants = cva(
  "",
  {
    variants: {
      size: {
        sm: "size-4", // Slightly larger base for visibility
        default: "size-6",
        lg: "size-8",
        xl: "size-12",
      },
      variant: {
        default: "",
        destructive: "",
        bar: "",
        gradient: "",
        "double-ring": "",
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
}: React.ComponentProps<"div"> & VariantProps<typeof spinnerVariants>) {
  // Bar Spinner Variant
  if (variant === "bar") {
    return (
      <div
        role="status"
        aria-label="Loading"
        className={cn("flex gap-1 items-center", className)}
        {...props}
      >
        {[0, 150, 300].map((delay, i) => (
          <div
            key={i}
            className={cn(
              "bg-primary animate-[pulse_1s_ease-in-out_infinite] skew-x-[-20deg]",
              size === "sm" && "size-1.5",
              size === "default" && "size-2.5",
              size === "lg" && "size-4",
              size === "xl" && "size-6",
            )}
            style={{ animationDelay: `${delay}ms` }}
          />
        ))}
      </div>
    )
  }

  // Gradient/Thick Spinner Variant
  if (variant === "gradient") {
    return (
      <div
        role="status"
        aria-label="Loading"
        className={cn(
          "relative inline-block rounded-full border-[6px] border-transparent border-t-primary/15 border-r-primary/30 border-b-primary/50 border-l-primary/80 animate-rotation-fast",
          spinnerVariants({ size }),
          className
        )}
        {...props}
      />
    )
  }

  // Double Ring Spinner Variant
  if (variant === "double-ring") {
    return (
      <div
        role="status"
        aria-label="Loading"
        className={cn(
          "relative inline-block rounded-full border-[3px] border-solid border-primary border-b-transparent animate-rotation-fast",
          spinnerVariants({ size }),
          className
        )}
        {...props}
      >
        <div
          className="absolute inset-0 m-auto w-1/2 h-1/2 rounded-full border-[3px] border-solid border-transparent border-r-secondary border-b-secondary animate-rotation-back-fast"
        />
      </div>
    )
  }

  // Default "Digital Ring" Spinner
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn("relative flex items-center justify-center", spinnerVariants({ size }), className)}
      {...props}
    >
      {/* Outer Ring - Static/Slow */}
      <div className={cn(
        "absolute inset-0 rounded-full border-2 border-primary/20",
        variant === "destructive" && "border-destructive/20"
      )} />

      {/* Inner Spinning Ring - Fast */}
      <div className={cn(
        "absolute inset-0 rounded-full border-2 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin",
        variant === "destructive" && "border-t-destructive"
      )} />

      {/* Core Dot - Pulse */}
      <div className={cn(
        "absolute inset-[35%] rounded-full bg-primary/50 animate-pulse",
        variant === "destructive" && "bg-destructive/50"
      )} />
    </div>
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
      className={cn(
        "absolute inset-0 z-50 flex flex-col items-center justify-center gap-4",
        "bg-card/95 backdrop-blur-sm",
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

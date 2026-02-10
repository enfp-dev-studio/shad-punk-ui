"use client"

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import React, { useRef } from "react";

interface HologramCardProps extends React.ComponentProps<typeof Card> {
    rotateX?: number;
    rotateY?: number;
    children: React.ReactNode;
}

export function HologramCard({ rotateX = 0, rotateY = 0, className, children, ...props }: HologramCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateXValue = useTransform(mouseYSpring, [-0.5, 0.5], [10, -10]);
    const rotateYValue = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ rotateX, rotateY }}
            style={{
                rotateX: rotateX ? rotateX : rotateXValue,
                rotateY: rotateY ? rotateY : rotateYValue,
                transformStyle: "preserve-3d",
            }}
            className={cn("relative group", className)}
        >
            <div
                style={{
                    transform: "translateZ(30px)",
                }}
            >
                <Card
                    className="bg-card/40 backdrop-blur-sm border-primary/40 relative overflow-hidden transition-colors hover:border-primary/70"
                    {...props}
                >
                    {/* Holographic Sheen */}
                    <div
                        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                            background: "linear-gradient(105deg, transparent 40%, rgba(var(--primary-rgb), 0.1) 45%, rgba(var(--primary-rgb), 0.3) 50%, rgba(var(--primary-rgb), 0.1) 55%, transparent 60%)",
                            mixBlendMode: "overlay",
                        }}
                    />
                    {children}
                </Card>
            </div>
        </motion.div>
    );
}

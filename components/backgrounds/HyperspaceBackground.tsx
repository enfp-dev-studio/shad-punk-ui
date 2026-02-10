
import React, { useEffect, useRef } from 'react';

// Constants
const BASE_SIZE = 1;
const VELOCITY_INC = 1.02;
const SIZE_INC = 1.02;
const RAD = Math.PI / 180;

/**
 * Utility function for returning a random integer in a given range
 */
const randomInRange = (max: number, min: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Class for storing the particle metadata
 * position, size, length, speed etc.
 */
class Star {
    STATE: {
        alpha: number;
        angle: number;
        iX?: number;
        iY?: number;
        iVX?: number;
        iVY?: number;
        active: boolean;
        x: number;
        vX: number;
        y: number;
        vY: number;
        size: number;
    };
    canvasWidth: number;
    canvasHeight: number;

    constructor(width: number, height: number) {
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.STATE = {
            alpha: Math.random(),
            angle: randomInRange(0, 360) * RAD,
            active: false,
            x: 0,
            vX: 0,
            y: 0,
            vY: 0,
            size: BASE_SIZE,
        };
        this.reset();
    }

    reset = (active = false) => {
        const angle = randomInRange(0, 360) * (Math.PI / 180);
        const vX = Math.cos(angle);
        const vY = Math.sin(angle);
        const travelled =
            Math.random() > 0.5
                ? Math.random() * Math.max(this.canvasWidth, this.canvasHeight) +
                Math.random() * (this.canvasWidth * 0.24)
                : Math.random() * (this.canvasWidth * 0.25);

        this.STATE = {
            ...this.STATE,
            iX: undefined,
            iY: undefined,
            active: travelled ? true : false,
            x: Math.floor(vX * travelled) + this.canvasWidth / 2,
            vX,
            y: Math.floor(vY * travelled) + this.canvasHeight / 2,
            vY,
            size: BASE_SIZE,
        };
    };
}

export function HyperspaceBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    // Store global state in a ref to avoid re-renders (mutable game loop state)
    const gameState = useRef<{
        stars: Star[];
        width: number;
        height: number;
        velocity: number;
        sizeInc: number;
    }>({
        stars: [],
        width: 0,
        height: 0,
        velocity: VELOCITY_INC,
        sizeInc: SIZE_INC,
    });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Set explicit width/height to avoid scaling issues
        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const { width, height } = entry.contentRect;
                canvas.width = width;
                canvas.height = height;
                gameState.current.width = width;
                gameState.current.height = height;

                // Re-initialize stars if dimensions change significantly or on first load
                if (gameState.current.stars.length === 0) {
                    gameState.current.stars = new Array(300)
                        .fill(null)
                        .map(() => new Star(width, height));
                } else {
                    // Update bounds for existing stars
                    gameState.current.stars.forEach(star => {
                        star.canvasWidth = width;
                        star.canvasHeight = height;
                    });
                }
            }
        });

        resizeObserver.observe(canvas);

        const context = canvas.getContext('2d');
        if (!context) return;
        context.lineCap = "round";

        let animationFrameId: number;

        const render = () => {
            const { stars, velocity, sizeInc, width, height } = gameState.current;

            // Clear the canvas
            context.clearRect(0, 0, width, height);

            // Optional: Background fade if we want trails, but cleaRect is cleaner for this specific style
            // context.fillStyle = 'rgba(0, 0, 0, 0.1)';
            // context.fillRect(0, 0, width, height);

            // 1. Activate new stars
            const nonActive = stars.filter((s) => !s.STATE.active);
            if (nonActive.length > 0) {
                nonActive[0].STATE.active = true;
            }

            // 2. Update and draw stars
            for (const star of stars.filter((s) => s.STATE.active)) {
                const { active, x, y, iX, iY, iVX, iVY, size, vX, vY } = star.STATE;

                // Check if star needs reset (went off screen)
                if (
                    ((x < 0 || x > width || y < 0 || y > height) && active)
                ) {
                    star.reset(true);
                } else if (active) {
                    const newX = x + vX;
                    const newY = y + vY;

                    star.STATE = {
                        ...star.STATE,
                        x: newX,
                        vX: star.STATE.vX * velocity,
                        y: newY,
                        vY: star.STATE.vY * velocity,
                        size: size * sizeInc,
                    };

                    const color = `rgba(255, 255, 255, ${star.STATE.alpha})`;

                    context.strokeStyle = color;
                    context.lineWidth = size;
                    context.beginPath();
                    context.moveTo(x, y); // Draw from previous position to new position creates the streak
                    context.lineTo(star.STATE.x, star.STATE.y);
                    context.stroke();
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            resizeObserver.disconnect();
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full bg-black overflow-hidden perspective-1000">
            {/* Deep space gradient base */}
            <div className="absolute inset-0 opacity-80" style={{
                background: 'radial-gradient(ellipse at center, #0B1026 0%, #000000 100%)',
            }} />
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block mix-blend-screen" />
        </div>
    );
}

"use client"

import { useEffect, useRef } from 'react';

interface Star {
    x: number;
    y: number;
    z: number;
    prevX?: number;
    prevY?: number;
}

/**
 * Hyperspace Jump Background
 * Stars streaking from center outward like Star Wars hyperspace jump
 */
export function HyperspaceBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Star field configuration
        const numStars = 800;
        const stars: Star[] = [];
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const speed = 0.02;
        const maxDepth = 32;

        // Initialize stars
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width - centerX,
                y: Math.random() * canvas.height - centerY,
                z: Math.random() * maxDepth,
            });
        }

        // Animation loop
        let animationId: number;
        const animate = () => {
            // Semi-transparent black for trail effect
            ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Update and draw stars
            stars.forEach((star) => {
                // Store previous position for streak
                star.prevX = star.x / star.z * canvas.width + centerX;
                star.prevY = star.y / star.z * canvas.height + centerY;

                // Move star forward
                star.z -= speed;

                // Reset star if it goes past camera
                if (star.z <= 0) {
                    star.x = Math.random() * canvas.width - centerX;
                    star.y = Math.random() * canvas.height - centerY;
                    star.z = maxDepth;
                    star.prevX = undefined;
                    star.prevY = undefined;
                }

                // Calculate screen position
                const x = star.x / star.z * canvas.width + centerX;
                const y = star.y / star.z * canvas.height + centerY;

                // Calculate star size based on depth
                const size = (1 - star.z / maxDepth) * 2;

                // Calculate brightness based on depth
                const brightness = Math.floor((1 - star.z / maxDepth) * 255);

                // Draw streak from previous position
                if (star.prevX !== undefined && star.prevY !== undefined) {
                    ctx.beginPath();
                    ctx.moveTo(star.prevX, star.prevY);
                    ctx.lineTo(x, y);

                    // Gradient for streak
                    const gradient = ctx.createLinearGradient(star.prevX, star.prevY, x, y);
                    gradient.addColorStop(0, `rgba(${brightness}, ${brightness}, 255, 0)`);
                    gradient.addColorStop(1, `rgba(${brightness}, ${brightness}, 255, ${brightness / 255})`);

                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = size;
                    ctx.stroke();
                }

                // Draw star point
                ctx.fillStyle = `rgba(${brightness}, ${brightness}, 255, 1)`;
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Deep space gradient base */}
            <div className="absolute inset-0" style={{
                background: 'radial-gradient(ellipse at center, rgba(5,10,30,1) 0%, rgba(0,0,0,1) 100%)',
            }} />

            {/* Canvas for star field */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0"
                style={{ mixBlendMode: 'screen' }}
            />
        </div>
    );
}

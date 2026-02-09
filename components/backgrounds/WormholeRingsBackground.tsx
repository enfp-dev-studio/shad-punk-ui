"use client"

/**
 * Wormhole Rings Background
 * Multiple concentric rings that scale and rotate to create a tunnel effect
 */
export function WormholeRingsBackground() {
    return (
        <>
            <div className="absolute inset-0 overflow-hidden" style={{ perspective: '1000px' }}>
                {/* Deep space gradient base */}
                <div className="absolute inset-0" style={{
                    background: 'radial-gradient(ellipse at center, rgba(5,10,30,1) 0%, rgba(0,0,0,1) 100%)',
                }} />

                {/* Wormhole tunnel rings - multiple layers for depth */}
                <div className="absolute inset-0 flex items-center justify-center">
                    {/* Ring 1 - Outermost */}
                    <div className="absolute" style={{
                        width: '200%',
                        height: '200%',
                        background: 'radial-gradient(circle, transparent 30%, rgba(0,150,255,0.15) 31%, rgba(0,150,255,0.15) 32%, transparent 33%)',
                        animation: 'wormholeRing1 8s linear infinite',
                    }} />

                    {/* Ring 2 */}
                    <div className="absolute" style={{
                        width: '180%',
                        height: '180%',
                        background: 'radial-gradient(circle, transparent 35%, rgba(100,180,255,0.2) 36%, rgba(100,180,255,0.2) 37%, transparent 38%)',
                        animation: 'wormholeRing2 7s linear infinite',
                    }} />

                    {/* Ring 3 */}
                    <div className="absolute" style={{
                        width: '160%',
                        height: '160%',
                        background: 'radial-gradient(circle, transparent 40%, rgba(150,200,255,0.25) 41%, rgba(150,200,255,0.25) 42.5%, transparent 43.5%)',
                        animation: 'wormholeRing3 6s linear infinite',
                    }} />

                    {/* Ring 4 */}
                    <div className="absolute" style={{
                        width: '140%',
                        height: '140%',
                        background: 'radial-gradient(circle, transparent 45%, rgba(180,220,255,0.3) 46%, rgba(180,220,255,0.3) 48%, transparent 49%)',
                        animation: 'wormholeRing4 5s linear infinite',
                    }} />

                    {/* Ring 5 - Innermost, brightest */}
                    <div className="absolute" style={{
                        width: '120%',
                        height: '120%',
                        background: 'radial-gradient(circle, transparent 50%, rgba(200,230,255,0.4) 51%, rgba(200,230,255,0.4) 54%, transparent 55%)',
                        animation: 'wormholeRing5 4s linear infinite',
                    }} />

                    {/* Center glow */}
                    <div className="absolute" style={{
                        width: '60%',
                        height: '60%',
                        background: 'radial-gradient(circle, rgba(150,200,255,0.3) 0%, rgba(100,180,255,0.15) 30%, transparent 60%)',
                        animation: 'centerPulse 3s ease-in-out infinite',
                    }} />
                </div>

                {/* Speed lines - enhanced 3D effect */}
                <div className="absolute inset-0" style={{
                    background: `
                        repeating-linear-gradient(0deg, transparent 0px, transparent 8px, rgba(100,180,255,0.08) 8px, rgba(100,180,255,0.08) 9px),
                        repeating-linear-gradient(90deg, transparent 0px, transparent 8px, rgba(100,180,255,0.08) 8px, rgba(100,180,255,0.08) 9px)
                    `,
                    transform: 'perspective(800px) rotateX(65deg) scale(2.5)',
                    transformOrigin: 'center center',
                    animation: 'speedLines 2s linear infinite',
                }} />

                {/* Particle streaks */}
                <div className="absolute inset-0 opacity-60" style={{
                    backgroundImage: `
                        radial-gradient(2px 20px at 15% 20%, rgba(255,255,255,0.6), transparent),
                        radial-gradient(1px 15px at 85% 30%, rgba(200,230,255,0.5), transparent),
                        radial-gradient(2px 25px at 45% 60%, rgba(255,255,255,0.7), transparent),
                        radial-gradient(1px 18px at 70% 80%, rgba(180,220,255,0.5), transparent),
                        radial-gradient(2px 22px at 25% 50%, rgba(255,255,255,0.6), transparent),
                        radial-gradient(1px 16px at 60% 15%, rgba(200,230,255,0.5), transparent),
                        radial-gradient(2px 20px at 90% 70%, rgba(255,255,255,0.6), transparent),
                        radial-gradient(1px 14px at 35% 85%, rgba(180,220,255,0.4), transparent)
                    `,
                    animation: 'particleStreaks 3s linear infinite',
                }} />

                {/* Stars - distant background */}
                <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: `
                        radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.9), transparent),
                        radial-gradient(1px 1px at 40% 70%, rgba(255,255,255,0.7), transparent),
                        radial-gradient(1.5px 1.5px at 60% 20%, rgba(255,255,255,1), transparent),
                        radial-gradient(1px 1px at 80% 50%, rgba(255,255,255,0.6), transparent),
                        radial-gradient(1px 1px at 10% 80%, rgba(255,255,255,0.8), transparent),
                        radial-gradient(1.5px 1.5px at 90% 10%, rgba(255,255,255,0.9), transparent),
                        radial-gradient(1px 1px at 50% 50%, rgba(255,255,255,0.7), transparent),
                        radial-gradient(1px 1px at 30% 90%, rgba(255,255,255,0.6), transparent),
                        radial-gradient(1px 1px at 70% 40%, rgba(255,255,255,0.8), transparent),
                        radial-gradient(1px 1px at 15% 55%, rgba(255,255,255,0.5), transparent),
                        radial-gradient(1px 1px at 95% 25%, rgba(255,255,255,0.7), transparent),
                        radial-gradient(1px 1px at 5% 65%, rgba(255,255,255,0.6), transparent)
                    `,
                    backgroundSize: '100% 100%',
                    animation: 'starMove 50s linear infinite',
                }} />
            </div>

            <style jsx>{`
                @keyframes wormholeRing1 {
                    0% { 
                        transform: scale(0.5) rotate(0deg);
                        opacity: 0;
                    }
                    50% {
                        opacity: 1;
                    }
                    100% { 
                        transform: scale(2) rotate(180deg);
                        opacity: 0;
                    }
                }
                
                @keyframes wormholeRing2 {
                    0% { 
                        transform: scale(0.5) rotate(0deg);
                        opacity: 0;
                    }
                    50% {
                        opacity: 1;
                    }
                    100% { 
                        transform: scale(2) rotate(-180deg);
                        opacity: 0;
                    }
                }
                
                @keyframes wormholeRing3 {
                    0% { 
                        transform: scale(0.5) rotate(0deg);
                        opacity: 0;
                    }
                    50% {
                        opacity: 1;
                    }
                    100% { 
                        transform: scale(2) rotate(180deg);
                        opacity: 0;
                    }
                }
                
                @keyframes wormholeRing4 {
                    0% { 
                        transform: scale(0.5) rotate(0deg);
                        opacity: 0;
                    }
                    50% {
                        opacity: 1;
                    }
                    100% { 
                        transform: scale(2) rotate(-180deg);
                        opacity: 0;
                    }
                }
                
                @keyframes wormholeRing5 {
                    0% { 
                        transform: scale(0.5) rotate(0deg);
                        opacity: 0;
                    }
                    50% {
                        opacity: 1;
                    }
                    100% { 
                        transform: scale(2) rotate(180deg);
                        opacity: 0;
                    }
                }
                
                @keyframes centerPulse {
                    0%, 100% { 
                        transform: scale(1);
                        opacity: 0.3;
                    }
                    50% { 
                        transform: scale(1.2);
                        opacity: 0.5;
                    }
                }
                
                @keyframes speedLines {
                    0% { 
                        opacity: 0.05;
                        transform: perspective(800px) rotateX(65deg) scale(2.5) translateZ(0);
                    }
                    50% { 
                        opacity: 0.15;
                    }
                    100% { 
                        opacity: 0.05;
                        transform: perspective(800px) rotateX(65deg) scale(2.5) translateZ(200px);
                    }
                }
                
                @keyframes particleStreaks {
                    0% { 
                        transform: translateY(0) scale(1);
                        opacity: 0.6;
                    }
                    100% { 
                        transform: translateY(-100px) scale(1.5);
                        opacity: 0;
                    }
                }
                
                @keyframes starMove {
                    0% { 
                        transform: translateY(0) scale(1);
                    }
                    100% { 
                        transform: translateY(-20px) scale(1.1);
                    }
                }
            `}</style>
        </>
    );
}

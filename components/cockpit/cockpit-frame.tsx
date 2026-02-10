"use client"

export function CockpitFrame() {
    return (
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
            {/* Vignette */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at center, transparent 60%, rgba(0,0,0,0.8) 120%)'
                }}
            />

            {/* Corner Decorations */}
            <div className="absolute top-8 left-8 w-32 h-32 border-l-2 border-t-2 border-primary/30 rounded-tl-3xl" />
            <div className="absolute top-8 right-8 w-32 h-32 border-r-2 border-t-2 border-primary/30 rounded-tr-3xl" />
            <div className="absolute bottom-8 left-8 w-32 h-32 border-l-2 border-b-2 border-primary/30 rounded-bl-3xl" />
            <div className="absolute bottom-8 right-8 w-32 h-32 border-r-2 border-b-2 border-primary/30 rounded-br-3xl" />

            {/* Scanlines / Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(0deg,transparent_24%,rgba(var(--primary-rgb),_1)_25%,rgba(var(--primary-rgb),_1)_26%,transparent_27%,transparent_74%,rgba(var(--primary-rgb),_1)_75%,rgba(var(--primary-rgb),_1)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(var(--primary-rgb),_1)_25%,rgba(var(--primary-rgb),_1)_26%,transparent_27%,transparent_74%,rgba(var(--primary-rgb),_1)_75%,rgba(var(--primary-rgb),_1)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
        </div>
    );
}

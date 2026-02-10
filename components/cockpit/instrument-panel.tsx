"use client"

import { Cpu, Settings, Shield } from "iconoir-react";

export function InstrumentPanel() {
    return (
        <div className="flex gap-4">
            <InstrumentGauge label="ENG" icon={<Cpu width={20} height={20} />} delay={0} />
            <InstrumentGauge label="SYS" icon={<Settings width={20} height={20} />} delay={0.3} />
            <InstrumentGauge label="WEP" icon={<Shield width={20} height={20} />} delay={0.6} />
        </div>
    );
}

function InstrumentGauge({ label, icon, delay }: { label: string, icon: React.ReactNode, delay: number }) {
    return (
        <div className="text-center animate-pulse" style={{ animationDuration: '3s', animationDelay: `${delay}s` }}>
            <div className="text-[10px] text-cyan-400/80 font-mono mb-1 tracking-widest">{label}</div>
            <div
                className="w-12 h-12 rounded border border-cyan-400/60 flex items-center justify-center relative overflow-hidden bg-background/50 backdrop-blur-sm"
                style={{
                    boxShadow: '0 0 15px rgba(0,255,255,0.2), inset 0 0 10px rgba(0,255,255,0.05)',
                }}
            >
                <div className="text-cyan-400 relative z-10" style={{ filter: 'drop-shadow(0 0 5px rgba(0,255,255,0.6))' }}>
                    {icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/10 to-transparent" />
            </div>
        </div>
    );
}

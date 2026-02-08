import { MechFrame } from "@/components/ui/mech-frame"

export default function Home() {
  return (
    <main className="dark min-h-screen bg-background p-8 flex flex-col items-center justify-center gap-12">
      <h1 className="text-2xl font-mono text-foreground mb-4">MechFrame CSS Test</h1>

      {/* Size Variants */}
      <section className="flex flex-col gap-4 items-center">
        <h2 className="text-primary font-mono text-sm">Size Variants (CSS clip-path)</h2>
        <div className="flex gap-4 items-center">
          <MechFrame size="sm">
            <span className="text-primary font-mono text-xs">SM</span>
          </MechFrame>
          <MechFrame size="md">
            <span className="text-primary font-mono text-sm">MD</span>
          </MechFrame>
          <MechFrame size="lg">
            <span className="text-primary font-mono text-base">LG</span>
          </MechFrame>
          <MechFrame size="xl">
            <span className="text-primary font-mono text-lg">XL</span>
          </MechFrame>
        </div>
      </section>

      {/* Large Frame (다양한 비율 테스트) */}
      <section className="flex flex-col gap-4 items-center">
        <h2 className="text-primary font-mono text-sm">Different Aspect Ratios (45° maintained)</h2>
        <div className="flex gap-6 items-center">
          <MechFrame size="lg" className="w-32 h-32">
            <span className="text-primary font-mono text-sm p-4">1:1</span>
          </MechFrame>
          <MechFrame size="lg" className="w-48 h-24">
            <span className="text-primary font-mono text-sm p-4">2:1</span>
          </MechFrame>
          <MechFrame size="lg" className="w-24 h-48">
            <span className="text-primary font-mono text-sm p-4">1:2</span>
          </MechFrame>
        </div>
      </section>

      {/* Corner Variants */}
      <section className="flex flex-col gap-4 items-center">
        <h2 className="text-primary font-mono text-sm">Corner Variants</h2>
        <div className="flex gap-4 items-center flex-wrap justify-center">
          <MechFrame corner="all">
            <span className="text-primary font-mono text-xs">ALL</span>
          </MechFrame>
          <MechFrame corner="t">
            <span className="text-primary font-mono text-xs">TOP</span>
          </MechFrame>
          <MechFrame corner="tl-br">
            <span className="text-primary font-mono text-xs">TL-BR</span>
          </MechFrame>
          <MechFrame corner="none">
            <span className="text-primary font-mono text-xs">NONE</span>
          </MechFrame>
        </div>
      </section>

      {/* Custom Colors */}
      <section className="flex flex-col gap-4 items-center">
        <h2 className="text-primary font-mono text-sm">Custom Border Colors</h2>
        <div className="flex gap-4 items-center">
          <MechFrame borderColor="hsl(var(--primary))">
            <span className="text-primary font-mono text-xs">PRIMARY</span>
          </MechFrame>
          <MechFrame borderColor="hsl(var(--destructive))">
            <span className="text-destructive font-mono text-xs">DESTRUCTIVE</span>
          </MechFrame>
          <MechFrame borderColor="#00ffff" borderWidth={2}>
            <span className="text-cyan-400 font-mono text-xs">CYAN 2px</span>
          </MechFrame>
        </div>
      </section>
    </main>
  )
}
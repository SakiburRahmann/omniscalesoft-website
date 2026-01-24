import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Saturated Gradient Mesh Background */}
      <div className="absolute inset-0 z-0 opacity-40 mesh-gradient pointer-events-none" />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32">
        <Container className="flex flex-col items-center text-center gap-8">

          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-black/5 bg-white/50 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm transition-colors hover:bg-white/80">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
            Engineering the Future of Scale
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.1] max-w-4xl">
            Software that <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">defines industries.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed font-medium">
            We build the digital infrastructure that powers the world's most ambitious companies.
            <span className="text-foreground hidden sm:inline"> Zero-Defect reliability meets Silicon Valley aesthetics.</span>
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            <Button size="lg" className="h-12 px-8 text-base shadow-xl shadow-blue-500/20">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-white/50 border-slate-200">
              View Case Studies
            </Button>
          </div>
        </Container>
      </section>

      {/* Social Proof / Trust Strip */}
      <section className="relative z-10 py-12 border-y border-slate-200/60 bg-white/30 backdrop-blur-sm">
        <Container>
          <p className="text-center text-sm font-semibold text-slate-500 mb-8 uppercase tracking-widest">Trusted by Next-Gen Innovators</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 grayscale opacity-60">
            {/* Placeholders for Logos - Using text for now to maintain clean look without external assets */}
            <span className="text-xl font-bold text-slate-800">Acme Corp</span>
            <span className="text-xl font-bold text-slate-800">GlobalBank</span>
            <span className="text-xl font-bold text-slate-800">Nebula AI</span>
            <span className="text-xl font-bold text-slate-800">Starlight</span>
            <span className="text-xl font-bold text-slate-800">Vertex</span>
          </div>
        </Container>
      </section>
    </div>
  );
}

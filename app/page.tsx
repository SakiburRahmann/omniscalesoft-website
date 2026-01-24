import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { ArrowRight, Code, Laptop, Smartphone, Zap, Sparkles, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Mobile App Development",
    description: "Architecting elite iOS & Android experiences that feel native and fluid.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-900 items-center justify-center"><Smartphone className="h-12 w-12 text-blue-500" /></div>,
    className: "md:col-span-2",
    icon: <Sparkles className="h-4 w-4 text-blue-500" />,
  },
  {
    title: "Web Platforms",
    description: "Cloud-native, scalable enterprise web solutions built for high-scale.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-slate-800 dark:to-slate-900 items-center justify-center"><Laptop className="h-12 w-12 text-indigo-500" /></div>,
    className: "md:col-span-1",
    icon: <Zap className="h-4 w-4 text-indigo-500" />,
  },
  {
    title: "AI Integration",
    description: "Injecting next-gen intelligence into your existing workflows safely.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-slate-800 dark:to-slate-900 items-center justify-center"><Code className="h-12 w-12 text-emerald-500" /></div>,
    className: "md:col-span-1",
    icon: <Code className="h-4 w-4 text-emerald-500" />,
  },
  {
    title: "Zero-Defect Security",
    description: "SRE-grade reliability and security hardening for critical data.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-2xl bg-gradient-to-br from-rose-50 to-orange-100 dark:from-slate-800 dark:to-slate-900 items-center justify-center"><ShieldCheck className="h-12 w-12 text-rose-500" /></div>,
    className: "md:col-span-2",
    icon: <ShieldCheck className="h-4 w-4 text-rose-500" />,
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0 mesh-gradient opacity-60 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative z-10 pt-40 pb-20 md:pt-60 md:pb-32">
        <Container className="flex flex-col items-center text-center">

          <div className="inline-flex items-center rounded-full border border-black/5 bg-white/40 backdrop-blur-xl px-4 py-1 text-sm font-semibold text-blue-600 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            OmniScale Architecture v1.0
          </div>

          <h1 className="text-display text-5xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] text-foreground mb-8 max-w-[12ch] mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            Design <br />
            Engineered.
          </h1>

          <p className="text-body-premium text-lg md:text-2xl text-slate-500 max-w-2xl mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            We build digital infrastructure for companies that refuse to compromise on quality, performance, or trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button size="lg" className="h-14 px-10 text-lg shadow-2xl shadow-blue-500/20">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg glass-card">
              Our Methodology
            </Button>
          </div>
        </Container>
      </section>

      {/* Bento Services Section */}
      <section className="relative z-10 py-24 pb-40">
        <Container>
          <div className="mb-16 max-w-2xl px-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-display">Capabilities</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From mobile platforms to AI ecosystems, we deliver software built on a foundation of absolute precision.
            </p>
          </div>

          <BentoGrid>
            {services.map((service, i) => (
              <BentoCard
                key={i}
                title={service.title}
                description={service.description}
                header={service.header}
                className={service.className}
                icon={service.icon}
              />
            ))}
          </BentoGrid>
        </Container>
      </section>

      {/* Social Strip */}
      <section className="relative z-10 py-16 border-t border-black/5 dark:border-white/5 bg-white/10 dark:bg-black/10 backdrop-blur-sm">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition duration-700">
            <span className="text-2xl font-black tracking-tighter text-center">STRIPE</span>
            <span className="text-2xl font-black tracking-tighter text-center">APPLE</span>
            <span className="text-2xl font-black tracking-tighter text-center">LINEAR</span>
            <span className="text-2xl font-black tracking-tighter text-center">VERCEL</span>
            <span className="text-2xl font-black tracking-tighter text-center">RAILS</span>
          </div>
        </Container>
      </section>
    </div>
  );
}

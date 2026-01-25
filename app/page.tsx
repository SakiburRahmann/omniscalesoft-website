"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { LegacyNav } from "@/components/layout/legacy-nav"
import { Button } from "@/components/ui/button"
import { Search, Layers, Hammer, TrendingUp } from "lucide-react"
import { AnimateReveal, RevealItem } from "@/components/ui/animate-reveal"
import { LogoMarquee } from "@/components/ui/logo-marquee"
import { HyperCore3D } from "@/components/ui/hyper-core-3d"
import { Logo } from "@/components/ui/logo"

const capabilities = [
  {
    title: "Venture Studio",
    desc: "We incubate and build our own proprietary SaaS products, testing boundaries and creating new markets.",
  },
  {
    title: "Client Agency",
    desc: "Partnering with global brands to deliver enterprise-grade software.",
  },
  {
    title: "AI Integration",
    desc: "LLM & Agentic workflows.",
  },
  {
    title: "Cloud Native",
    desc: "AWS / Azure / GCP architects.",
  },
]

const stack = ["Next.js", "TypeScript", "Supabase", "Tailwind", "Framer Motion"]

const partners = ["Stark Ind", "Wayne Ent", "Cyberdyne", "Umbrella", "Massive Dynamic", "Hooli", "Initech"]

const methods = [
  {
    num: "1",
    title: "Analyze",
    desc: "We dive deep into your business goals, user needs, and market gaps to define a clear product vision.",
    icon: <Search className="w-5 h-5" />,
  },
  {
    num: "2",
    title: "Architect",
    desc: "Using 'Big Tech' principles, we design systems that are secure, stable, and ready to scale infinitely.",
    icon: <Layers className="w-5 h-5" />,
  },
  {
    num: "3",
    title: "Build",
    desc: "Our elite engineers transform blueprints into high-performance web, mobile, and cloud environments.",
    icon: <Hammer className="w-5 h-5" />,
  },
  {
    num: "4",
    title: "Scale",
    desc: "We don't just launch; we optimize. Continuous improvements to ensure your software grows with you.",
    icon: <TrendingUp className="w-5 h-5" />,
  },
]

const techStack = [
  { category: "FRONTEND", tech: "React" },
  { category: "FRONTEND", tech: "Next.js" },
  { category: "LANGUAGE", tech: "TypeScript" },
  { category: "BACKEND", tech: "Node.js" },
  { category: "BACKEND", tech: "Go" },
  { category: "DATABASE", tech: "PostgreSQL" },
  { category: "MOBILE", tech: "Flutter" },
  { category: "CLOUD", tech: "AWS/GCP" },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-black">
      <LegacyNav theme="hero" />

      {/* Hero Section: Institutional First Impression */}
      <section className="relative h-screen min-h-[800px] flex items-center bg-black overflow-hidden px-6">
        {/* Immersive 3D Background */}
        <div className="absolute inset-0 z-0 opacity-60">
          <HyperCore3D theme="dark" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <AnimateReveal variant="slide-up" staggerChildren={0.2}>
            <RevealItem className="text-emerald-500 text-[10px] font-black tracking-[0.3em] mb-8 uppercase flex items-center gap-3">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]" />
              Technical Studio Established 2024
            </RevealItem>

            <RevealItem className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.0] text-white mb-10 max-w-5xl">
              We Engineer Software Systems That Scale With Your Business<span className="text-emerald-500">.</span>
            </RevealItem>

            <RevealItem className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl mb-14 leading-relaxed">
              We partner with ambitious teams to design, build, and evolve high-performance digital infrastructure — from idea to global scale.
            </RevealItem>

            <RevealItem className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="px-12 py-8 text-lg bg-white text-black hover:bg-slate-200 transition-all uppercase font-black tracking-widest" asChild>
                <Link href="/contact">Start a Project</Link>
              </Button>
              <Button variant="ghost" size="lg" className="px-12 py-8 text-lg border border-white/40 text-white hover:bg-white hover:text-black transition-all uppercase font-black tracking-widest" asChild>
                <Link href="/capabilities">Explore Capabilities</Link>
              </Button>
            </RevealItem>

            <RevealItem className="mt-20 pt-12 border-t border-white/10 opacity-50">
              <span className="text-[10px] font-black tracking-widest text-slate-500 uppercase">Trusted by teams building mission-critical products</span>
              <div className="mt-6 flex flex-wrap gap-8 grayscale">
                {partners.slice(0, 4).map(p => <span key={p} className="text-white/40 text-sm font-bold">{p}</span>)}
              </div>
            </RevealItem>
          </AnimateReveal>
        </div>
      </section>

      {/* Service Matrix: "What We Actually Do" */}
      <section className="py-24 md:py-48 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-px md:bg-slate-100 md:border md:border-slate-100">
            {[
              {
                title: "Strategy",
                desc: "Product thinking, technical direction, and system planning that eliminates guesswork before engineering begins.",
                icon: <Search className="w-6 h-6" />
              },
              {
                title: "Engineering",
                desc: "Robust, secure, and scalable software built with modern architectures and disciplined workflows.",
                icon: <Hammer className="w-6 h-6" />
              },
              {
                title: "Evolution",
                desc: "Continuous optimization, performance tuning, and intelligent automation as your product grows.",
                icon: <TrendingUp className="w-6 h-6" />
              }
            ].map((s, i) => (
              <AnimateReveal key={i} variant="slide-up" className="bg-white p-12 md:p-20 group hover:bg-slate-50 transition-colors">
                <div className="mb-8 text-slate-300 group-hover:text-black transition-colors">{s.icon}</div>
                <h3 className="text-3xl font-bold mb-6 uppercase tracking-tight">{s.title}</h3>
                <p className="text-xl text-slate-500 font-medium leading-relaxed">{s.desc}</p>
              </AnimateReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy: Proof of Thinking */}
      <section className="py-24 md:py-48 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <AnimateReveal variant="slide-up">
            <span className="text-[10px] font-black tracking-[0.2em] text-slate-400 mb-8 block uppercase">Technical Philosophy</span>
            <h2 className="font-serif text-5xl md:text-7xl mb-12 leading-[1.0]">Built for Long-Term Impact — Not Short-Term Demos<span className="text-emerald-500">.</span></h2>
            <div className="space-y-8 text-xl text-slate-500 font-medium leading-relaxed">
              <p>
                At OmniScaleSoft, we don't chase temporary trends. We engineer systems that are designed to live for years, not weeks.
              </p>
              <p>
                Every line of code and architectural decision is weighed against three core metrics:
                <strong className="text-black"> Maintainability, Security, and Long-term Operational Cost.</strong>
              </p>
              <p>
                This disciplined approach is why serious founders and enterprise heads choose us to build their mission-critical infrastructure.
              </p>
            </div>
          </AnimateReveal>

          <div className="relative h-[400px] lg:h-[600px] border border-slate-100 bg-[#f8f9fa] rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 opacity-100 transition-opacity duration-700">
              <HyperCore3D theme="light" />
            </div>
          </div>
        </div>
      </section>

      {/* Transition CTA */}
      <section className="py-24 md:py-40 px-6 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <AnimateReveal variant="slide-up">
            <h2 className="font-serif text-4xl md:text-6xl mb-12">Have a complex idea? <br />Let&apos;s talk about it.</h2>
            <Button size="lg" className="px-12 py-8 text-xl bg-white text-black hover:bg-slate-200 transition-all uppercase font-black" asChild>
              <Link href="/contact">Establish Connection</Link>
            </Button>
          </AnimateReveal>
        </div>
      </section>

      {/* Footer (Sync with institutional tone) */}
      <footer className="bg-white border-t border-slate-100 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="scale-75">
            <Logo />
          </div>
          <div className="flex gap-8 text-[10px] font-black tracking-widest text-slate-400 uppercase">
            <Link href="/capabilities" className="hover:text-black transition-colors">Capabilities</Link>
            <Link href="/work" className="hover:text-black transition-colors">Work</Link>
            <Link href="/method" className="hover:text-black transition-colors">Method</Link>
            <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
          </div>
          <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase whitespace-nowrap">
            © 2026 OmniScaleSoft · Systems Architecture Bureau
          </p>
        </div>
      </footer>
    </main>
  )
}

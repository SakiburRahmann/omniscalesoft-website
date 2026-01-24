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
      <LegacyNav />

      {/* Hero Section: The Hyper-Scale Focal Point */}
      <section className="pt-40 pb-24 md:pt-60 md:pb-40 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Stationary Editorial Text: Maximum Trust */}
          <AnimateReveal variant="slide-up" staggerChildren={0.15}>
            <RevealItem className="inline-block bg-black text-white px-3 py-1 text-[10px] font-black tracking-[0.2em] mb-8 uppercase leading-normal">
              INNOVATION MEETS ENGINEERING
            </RevealItem>

            <RevealItem className="font-serif text-6xl md:text-[7rem] lg:text-[8rem] leading-[0.9] text-black mb-10">
              Engineering <br /> the Future<span className="text-[#000000]">.</span>
            </RevealItem>

            <RevealItem className="text-xl md:text-2xl text-slate-500 font-medium max-w-xl mb-12 leading-relaxed">
              We build high-performance software for ambitious companies. Precision-engineered, scalable, and designed to win.
            </RevealItem>

            <RevealItem className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-10">View System Architecture</Button>
              <Button variant="outline" size="lg" className="px-10">Engineering Capabilities</Button>
            </RevealItem>
          </AnimateReveal>

          {/* WebGL 3D Spectacle: Cinematic Visual Machine */}
          <div className="relative w-full h-[300px] md:h-auto overflow-visible order-first lg:order-last">
            <HyperCore3D />
          </div>
        </div>
      </section>

      {/* Trusted By: Recursive Kinetic Proof */}
      <section className="py-12 border-y border-[#e4e4e7] overflow-hidden grayscale">
        <AnimateReveal variant="fade" className="max-w-7xl mx-auto px-6 mb-10 text-center text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">
          Trusted by forward-thinking companies
        </AnimateReveal>
        <LogoMarquee items={partners} speed={30} className="px-6" />
      </section>

      {/* Capabilities: Staggered Architecture */}
      <section className="py-24 md:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimateReveal variant="slide-up">
            <h2 className="font-serif text-5xl md:text-7xl mb-6">Capabilities</h2>
            <p className="text-xl md:text-2xl text-slate-500 font-medium mb-24">Comprehensive solutions for modern digital challenges.</p>
          </AnimateReveal>

          <AnimateReveal variant="slide-up" staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e4e4e7] border border-[#e4e4e7]">
            {capabilities.map((item, i) => (
              <RevealItem key={i} className="bg-white p-12 md:p-16 group hover:bg-slate-50 transition-colors">
                <h3 className="text-2xl font-bold mb-6 group-hover:text-black transition-colors">{item.title}</h3>
                <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">{item.desc}</p>
                {item.title === "Cloud Native" && (
                  <div className="mt-4 pt-8 border-t border-slate-100 flex flex-wrap gap-4">
                    {stack.map(s => <span key={s} className="text-xs font-bold px-3 py-1 bg-slate-100 rounded-full">{s}</span>)}
                  </div>
                )}
              </RevealItem>
            ))}
          </AnimateReveal>
        </div>
      </section>

      {/* Methodology: Animated Roadmap */}
      <section className="py-24 md:py-40 px-6 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto">
          <AnimateReveal variant="slide-up">
            <h2 className="font-serif text-5xl md:text-7xl mb-24 leading-tight">The OmniScale Method</h2>
          </AnimateReveal>

          <AnimateReveal variant="slide-up" staggerChildren={0.2} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {methods.map((m, i) => (
              <RevealItem key={i} className="relative group">
                <div className="text-[10rem] font-black text-slate-100 absolute -top-20 -left-6 z-0 leading-none select-none group-hover:text-slate-200 transition-colors duration-500">
                  {m.num}
                </div>
                <div className="relative z-10 pl-2">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">{m.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{m.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{m.desc}</p>
                </div>
              </RevealItem>
            ))}
          </AnimateReveal>
        </div>
      </section>

      {/* Tech Stack: Staggered Elevation */}
      <section className="py-24 md:py-40 px-6">
        <AnimateReveal variant="slide-up" className="max-w-7xl mx-auto text-center mb-24">
          <h2 className="font-serif text-5xl md:text-7xl mb-8">Armed with Elite Tech</h2>
          <p className="text-xl text-slate-500 font-medium">We use the same tools that power the internet's giants to build your solution.</p>
        </AnimateReveal>

        <AnimateReveal variant="slide-up" staggerChildren={0.05} className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {techStack.map((t, i) => (
            <RevealItem key={i} className="border border-[#e4e4e7] p-8 rounded-lg group hover:border-black hover:shadow-xl transition-all duration-300">
              <div className="text-[10px] font-black tracking-widest text-slate-400 mb-2 uppercase group-hover:text-black transition-colors">{t.category}</div>
              <div className="text-lg font-bold">{t.tech}</div>
            </RevealItem>
          ))}
        </AnimateReveal>
      </section>

      {/* Footer: Dynamic Audit Status */}
      <footer className="bg-black text-white pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimateReveal variant="fade" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-32">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-10 tracking-tight">OmniScaleSoft</h2>
              <p className="text-slate-400 font-medium text-lg max-w-sm mb-10">
                Engineering the next generation of digital infrastructure.
              </p>
              <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-emerald-500 uppercase">
                <motion.div
                  animate={{ opacity: [1, 0.4, 1], scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.6)]"
                />
                All Systems Operational
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-black tracking-widest text-slate-600 uppercase mb-8">Capabilities</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-400">
                <li><Link href="/capabilities" className="hover:text-white transition-colors">Product Strategy</Link></li>
                <li><Link href="/capabilities" className="hover:text-white transition-colors">Full-Stack Engineering</Link></li>
                <li><Link href="/capabilities" className="hover:text-white transition-colors">AI Integration</Link></li>
                <li><Link href="/capabilities" className="hover:text-white transition-colors">Cloud Native</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black tracking-widest text-slate-600 uppercase mb-8">Work</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-400">
                <li><Link href="/work" className="hover:text-white transition-colors">Fintech Core</Link></li>
                <li><Link href="/work" className="hover:text-white transition-colors">HealthGuard AI</Link></li>
                <li><Link href="/work" className="hover:text-white transition-colors">LogisticsPro</Link></li>
                <li><Link href="/work" className="hover:text-white transition-colors">View All</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black tracking-widest text-slate-600 uppercase mb-8">Company</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-400">
                <li><Link href="/method" className="hover:text-white transition-colors">Methodology</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Legal</Link></li>
              </ul>
            </div>
          </AnimateReveal>

          <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black tracking-widest text-slate-600 uppercase">
            <p className="">© 2026 OmniScaleSoft Inc. San Francisco · Dhaka.</p>
            <div className="flex gap-8">
              <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
              <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
              <Link href="#" className="hover:text-white transition-colors">X (Twitter)</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

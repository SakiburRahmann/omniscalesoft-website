"use client"

import React from "react"
import Link from "next/link"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
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

function PerspectiveCard({ children, className }: { children: React.ReactNode, className?: string }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={cn("relative transition-colors duration-500", className)}
    >
      <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  )
}

export function CinematicText({ text, className }: { text: string, className?: string }) {
  const words = text.split(" ")
  const container: any = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.04 * i },
    }),
  }
  const child: any = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    hidden: { opacity: 0, y: 20 },
  }

  return (
    <motion.div variants={container} initial="hidden" whileInView="visible" className={cn("flex flex-wrap gap-x-[0.3em] gap-y-[0.1em]", className)}>
      {words.map((word, index) => (
        <motion.span key={index} variants={child}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

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
            {/* Autonomous Pulsing Green Node */}
            <RevealItem className="mb-10 flex items-center gap-3">
              <motion.span
                animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_15px_#10b981]"
              />
              <span className="text-emerald-500 text-[10px] font-black tracking-[0.4em] uppercase">Architecture Intelligence</span>
            </RevealItem>

            <RevealItem className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.0] text-white mb-10 max-w-5xl">
              <motion.span
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block"
              >
                We Engineer Software Systems That Scale With Your Business<span className="text-emerald-500">.</span>
              </motion.span>
            </RevealItem>

            <RevealItem className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl mb-14 leading-relaxed">
              <motion.p
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                We partner with ambitious teams to design, build, and evolve high-performance digital infrastructure — from idea to global scale.
              </motion.p>
            </RevealItem>

            <RevealItem className="flex flex-col sm:flex-row gap-6">
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Button size="lg" className="px-12 py-8 text-lg bg-white text-black hover:bg-slate-200 transition-all uppercase font-black tracking-widest shadow-xl" asChild>
                  <Link href="/contact">Start a Project</Link>
                </Button>
              </motion.div>
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Button variant="ghost" size="lg" className="px-12 py-8 text-lg border border-white/40 text-white hover:bg-white hover:text-black transition-all uppercase font-black tracking-widest" asChild>
                  <Link href="/capabilities">Explore Capabilities</Link>
                </Button>
              </motion.div>
            </RevealItem>

            <RevealItem className="mt-20 pt-12 border-t border-white/10 opacity-50 relative overflow-hidden group">
              <span className="text-[10px] font-black tracking-widest text-slate-500 uppercase">Trusted by teams building mission-critical products</span>
              <div className="mt-6 flex flex-wrap gap-8 grayscale">
                {partners.slice(0, 4).map(p => (
                  <motion.span
                    key={p}
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-white/40 text-sm font-bold"
                  >
                    {p}
                  </motion.span>
                ))}
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
              <PerspectiveCard key={i} className="bg-white p-12 md:p-20 group hover:bg-slate-50">
                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                  className="mb-8 text-slate-300 group-hover:text-black transition-colors"
                >
                  {s.icon}
                </motion.div>
                <h3 className="text-3xl font-bold mb-6 uppercase tracking-tight">
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                  >
                    {s.title}
                  </motion.span>
                </h3>
                <p className="text-xl text-slate-500 font-medium leading-relaxed">{s.desc}</p>
                <div className="mt-8 h-px w-0 bg-black group-hover:w-full transition-all duration-700" />
              </PerspectiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy: Proof of Thinking */}
      <section className="py-24 md:py-48 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <AnimateReveal variant="slide-up">
              <span className="text-[10px] font-black tracking-[0.2em] text-slate-400 mb-8 block uppercase">Technical Philosophy</span>
              <CinematicText
                text="Built for Long-Term Impact — Not Short-Term Demos."
                className="font-serif text-5xl md:text-7xl leading-[1.0] mb-12"
              />
            </AnimateReveal>

            <div className="space-y-8 text-xl text-slate-500 font-medium leading-relaxed">
              <motion.div animate={{ x: [-2, 2, -2] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                <CinematicText text="At OmniScaleSoft, we don't chase temporary trends. We engineer systems that are designed to live for years, not weeks." />
              </motion.div>
              <motion.div animate={{ x: [2, -2, 2] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
                <CinematicText text="Every line of code and architectural decision is weighed against three core metrics: Maintainability, Security, and Long-term Operational Cost." />
              </motion.div>
              <motion.div animate={{ x: [-2, 2, -2] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
                <CinematicText text="This disciplined approach is why serious founders and enterprise heads choose us to build their mission-critical infrastructure." />
              </motion.div>
            </div>
          </div>

          <motion.div
            animate={{ scale: [1, 1.02, 1], rotate: [0, 0.5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-[400px] lg:h-[600px] border border-slate-100 bg-[#f8f9fa] rounded-2xl overflow-hidden group shadow-2xl"
          >
            <div className="absolute inset-0 opacity-100 transition-opacity duration-700">
              <HyperCore3D theme="light" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transition CTA */}
      <section className="py-24 md:py-40 px-6 bg-black text-white text-center relative overflow-hidden">
        {/* Background Ambient Glow */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-emerald-500/5 blur-[120px]"
        />

        <div className="max-w-3xl mx-auto relative z-10">
          <AnimateReveal variant="slide-up">
            <h2 className="font-serif text-4xl md:text-6xl mb-12">
              <motion.span
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Have a complex idea? <br />Let&apos;s talk about it.
              </motion.span>
            </h2>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Button size="lg" className="px-12 py-8 text-xl bg-white text-black hover:bg-slate-200 transition-all uppercase font-black" asChild>
                <Link href="/contact">Establish Connection</Link>
              </Button>
            </motion.div>
          </AnimateReveal>
        </div>
      </section>

      {/* Footer (Sync with institutional tone) */}
      <footer className="bg-white border-t border-slate-100 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="scale-75">
            <motion.div
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <Logo />
            </motion.div>
          </div>
          <div className="flex gap-8 text-[10px] font-black tracking-widest text-slate-400 uppercase">
            {[
              { href: "/capabilities", label: "Capabilities" },
              { href: "/work", label: "Work" },
              { href: "/method", label: "Method" },
              { href: "/contact", label: "Contact" }
            ].map((link, i) => (
              <motion.div
                key={link.label}
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
              >
                <Link href={link.href} className="hover:text-black transition-colors">{link.label}</Link>
              </motion.div>
            ))}
          </div>
          <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase whitespace-nowrap">
            © 2026 OmniScaleSoft
          </p>
        </div>
      </footer>
    </main>
  )
}

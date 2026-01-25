"use client"

import React from "react"
import Link from "next/link"
import { motion, useMotionValue, useSpring, useTransform, useScroll, useMotionValueEvent } from "framer-motion"
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
  const { scrollY } = useScroll()
  const [bg3DColor, setBg3DColor] = React.useState("#94a3b8")

  const colorTransform = useTransform(
    scrollY,
    [0, 600, 1000],
    ["#94a3b8", "#000000", "#000000"]
  )

  useMotionValueEvent(colorTransform, "change", (latest) => {
    setBg3DColor(latest)
  })

  return (
    <main className="min-h-screen bg-white font-sans text-black">
      <LegacyNav theme="hero" />

      {/* Persistent Global 3D Spectacle */}
      <div className="fixed inset-0 z-0 opacity-60 pointer-events-none">
        <HyperCore3D customColor={bg3DColor} />
      </div>

      {/* Hero Section: Institutional First Impression */}
      <section className="relative h-screen min-h-[800px] flex items-center bg-black/85 overflow-hidden px-6 z-10">

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <AnimateReveal variant="slide-up" staggerChildren={0.2}>

            <RevealItem className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.0] text-white mb-10 max-w-5xl drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              <motion.span
                whileInView={{ y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block will-change-transform"
              >
                We Engineer Software Systems That Scale With Your Business
              </motion.span>
            </RevealItem>

            <RevealItem className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl mb-14 leading-relaxed">
              <motion.p
                whileInView={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="will-change-opacity"
              >
                We partner with ambitious teams to design, build, and evolve high-performance digital infrastructure — from idea to global scale.
              </motion.p>
            </RevealItem>

            <RevealItem className="flex flex-col sm:flex-row gap-6">
              <motion.div
                whileInView={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="will-change-transform"
              >
                <Button size="lg" className="px-12 py-8 text-lg bg-white text-black hover:bg-slate-200 transition-all uppercase font-black tracking-widest shadow-xl" asChild>
                  <Link href="/contact">Start a Project</Link>
                </Button>
              </motion.div>
              <motion.div
                whileInView={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="will-change-transform"
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
                    whileInView={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-white/40 text-sm font-bold will-change-opacity"
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
      <section className="py-24 md:py-48 px-6 bg-white/20 border-b border-slate-100 z-10 relative transition-colors duration-1000">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-px md:bg-slate-100 md:border md:border-slate-100">
            {[
              {
                title: "Strategy",
                desc: "Product thinking, technical direction, and system planning that eliminates guesswork before engineering begins.",
                icon: (
                  <div className="relative w-12 h-12 overflow-hidden border border-slate-200 bg-white">
                    <motion.div
                      animate={{ y: ["-100%", "100%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent"
                    />
                    <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-10">
                      {[...Array(16)].map((_, i) => <div key={i} className="border-[0.5px] border-black" />)}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Search className="w-5 h-5 text-black" />
                    </div>
                  </div>
                )
              },
              {
                title: "Engineering",
                desc: "Robust, secure, and scalable software built with modern architectures and disciplined workflows.",
                icon: (
                  <div className="relative w-12 h-12 flex items-center justify-center border border-slate-200 bg-white">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 180, 270, 360] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute w-8 h-8 border border-emerald-500/30 rounded-sm"
                    />
                    <div className="relative z-10">
                      <Hammer className="w-5 h-5 text-black" />
                    </div>
                  </div>
                )
              },
              {
                title: "Innovation",
                desc: "Continuous optimization, performance tuning, and intelligent automation as your product grows.",
                icon: (
                  <div className="relative w-12 h-12 flex items-center justify-center border border-slate-200 bg-white overflow-hidden">
                    <motion.div
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [0.1, 0.4, 0.1]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 bg-emerald-500 rounded-full blur-xl"
                    />
                    <TrendingUp className="w-5 h-5 text-black relative z-10" />
                  </div>
                )
              }
            ].map((s, i) => (
              <PerspectiveCard key={i} className="bg-white p-12 md:p-20 group hover:bg-slate-100">
                <div className="mb-8 transition-transform group-hover:scale-110 duration-500">
                  {s.icon}
                </div>
                <h3 className="text-3xl font-bold mb-6 uppercase tracking-tight">
                  <motion.span
                    whileInView={{ x: [0, 3, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                    className="inline-block will-change-transform"
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
      <section className="py-24 md:py-48 px-6 overflow-hidden z-10 relative bg-white/15 transition-colors duration-1000">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <AnimateReveal variant="slide-up">
              <span className="text-[10px] font-black tracking-[0.2em] text-slate-400 mb-8 block uppercase">Technical Philosophy</span>
              <CinematicText
                text="Built for Long-Term Impact"
                className="font-serif text-5xl md:text-7xl leading-[1.0] mb-12"
              />
            </AnimateReveal>

            <div className="space-y-8 text-xl text-slate-500 font-medium leading-relaxed">
              <motion.div whileInView={{ x: [-2, 2, -2] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="will-change-transform">
                <CinematicText text="At OmniScaleSoft, we don't chase temporary trends. We engineer systems that are designed to live for years, not weeks." />
              </motion.div>
              <motion.div whileInView={{ x: [2, -2, 2] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="will-change-transform">
                <CinematicText text="Every line of code and architectural decision is weighed against three core metrics: Maintainability, Security, and Long-term Operational Cost." />
              </motion.div>
              <motion.div whileInView={{ x: [-2, 2, -2] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="will-change-transform">
                <CinematicText text="This disciplined approach is why serious founders and enterprise heads choose us to build their mission-critical infrastructure." />
              </motion.div>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[600px] border border-slate-100 bg-white shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 flex items-end justify-center p-12 gap-4">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${20 + (i * 10)}%` }}
                  transition={{ duration: 2, delay: i * 0.1, ease: "easeOut" }}
                  className="w-full bg-slate-900 overflow-hidden relative"
                >
                  <motion.div
                    animate={{ y: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-x-0 h-1/4 bg-gradient-to-b from-transparent via-emerald-500/50 to-transparent"
                  />
                </motion.div>
              ))}
            </div>
            <div className="absolute top-12 left-12">
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-emerald-500">Stability Matrix</span>
              <div className="mt-4 text-3xl font-serif text-black opacity-40">Cumulative<br />Reliability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Transition CTA */}
      <section className="py-24 md:py-40 px-6 bg-white/15 text-black text-center relative overflow-hidden z-10 transition-colors duration-1000">
        {/* Background Ambient Glow */}
        <motion.div
          whileInView={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-emerald-500/5 blur-[120px] pointer-events-none will-change-transform"
        />

        <div className="max-w-3xl mx-auto relative z-10">
          <AnimateReveal variant="slide-up">
            <h2 className="font-serif text-4xl md:text-6xl mb-12">
              <motion.span
                whileInView={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="will-change-opacity"
              >
                Have a complex idea? <br />Let&apos;s talk about it.
              </motion.span>
            </h2>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              whileInView={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="will-change-transform"
            >
              <Button size="lg" className="px-12 py-8 text-xl bg-black text-white hover:bg-slate-800 transition-all uppercase font-black" asChild>
                <Link href="/contact">Establish Connection</Link>
              </Button>
            </motion.div>
          </AnimateReveal>
        </div>
      </section>

      {/* Footer (Sync with institutional tone) */}
      <footer className="bg-white/20 border-t border-slate-100 py-12 px-6 relative z-10 transition-colors duration-1000">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="scale-75">
            <motion.div
              whileInView={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="will-change-opacity"
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
                whileInView={{ y: [0, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
                className="will-change-transform"
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

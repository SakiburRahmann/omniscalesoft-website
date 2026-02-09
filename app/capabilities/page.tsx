"use client"

import { InstitutionalNav } from "@/components/layout/institutional-nav"
import { Footer } from "@/components/layout/footer"
import { Reveal, TextReveal } from "@/components/ui/motion-provider"
import { Monitor, Box, Layout, Zap, ArrowRight, Activity, Cpu, Layers } from "lucide-react"

const categories = [
    { title: "Client Software Development", icon: Monitor },
    { title: "Product Engineering", icon: Box },
    { title: "UI/UX Design", icon: Layout },
    { title: "AI & Automation", icon: Zap }
]

const methodology = [
    { title: "Discovery & Planning", desc: "Technical mapping of objectives and constraints." },
    { title: "Design & Architecture", desc: "Structural blueprinting for high-integrity systems." },
    { title: "Development", desc: "Precision engineering with zero technical debt." },
    { title: "Testing & Deployment", desc: "Comprehensive validation and global-scale launch." },
    { title: "Maintenance & Scaling", desc: "Iterative growth and structural optimization." }
]

export default function Capabilities() {
    return (
        <main className="min-h-screen">
            <InstitutionalNav />

            <section className="pt-40 pb-24 px-8 md:px-12 lg:px-24">
                <div className="max-w-[1400px] mx-auto">
                    <TextReveal
                        text="The Delivery Engine."
                        className="text-7xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter text-premium mb-32"
                        delay={0.2}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 border-t-2 border-black pt-24">
                        <div className="space-y-16">
                            <Reveal>
                                <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight uppercase">Core Categories</h2>
                            </Reveal>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {categories.map((c, i) => (
                                    <Reveal key={i} delay={0.4 + i * 0.1}>
                                        <div className="p-10 border-2 border-black/5 hover:border-black transition-all group flex items-center justify-between rounded-[2rem] hover:scale-105 duration-500">
                                            <span className="text-[12px] font-black uppercase tracking-widest">{c.title}</span>
                                            <c.icon className="w-8 h-8 text-black/40 group-hover:text-black transition-colors" />
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-16">
                            <Reveal>
                                <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight uppercase">Methodology</h2>
                            </Reveal>
                            <div className="space-y-12">
                                {methodology.map((m, i) => (
                                    <Reveal key={i} delay={0.6 + i * 0.1} y={20}>
                                        <div className="flex gap-12 group">
                                            <span className="text-4xl md:text-6xl font-black text-black/10 group-hover:text-black transition-colors leading-none">0{i + 1}</span>
                                            <div>
                                                <h3 className="text-2xl font-black mb-4">{m.title}</h3>
                                                <p className="text-xl text-black/70 font-bold leading-tight">{m.desc}</p>
                                            </div>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

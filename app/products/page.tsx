"use client"

import { InstitutionalNav } from "@/components/layout/institutional-nav"
import { Footer } from "@/components/layout/footer"
import { Reveal, TextReveal } from "@/components/ui/motion-provider"

const products = [
    {
        name: "HyperScale Core",
        problem: "Inefficient database orchestration in high-traffic environments.",
        audience: "Enterprise Backend Teams",
        status: "Live",
        vision: "The standard for distributed data integrity."
    },
    {
        name: "OmniFlow AI",
        problem: "Manual overhead in multi-agent technical workflows.",
        audience: "DevOps & Engineering Leads",
        status: "Beta",
        vision: "Autonomous pipeline orchestration."
    },
    {
        name: "SecureGate",
        problem: "Vulnerable authentication layers in system-level software.",
        audience: "Security-Critical Organizations",
        status: "R&D",
        vision: "Zero-trust system integration."
    }
]

import { Box, Activity, Target, Shield, ArrowRight } from "lucide-react"

export default function Products() {
    return (
        <main className="min-h-screen">
            <InstitutionalNav />
            <section className="pt-40 pb-24 px-8 md:px-12 lg:px-24">
                <div className="max-w-[1400px] mx-auto">
                    <TextReveal
                        text="The Lab Records."
                        className="text-6xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tighter text-premium mb-16 md:mb-32"
                        delay={0.2}
                    />

                    <div className="grid grid-cols-1 gap-12 border-t-2 border-black pt-24">
                        {products.map((p, i) => (
                            <Reveal key={i} delay={0.4 + i * 0.2}>
                                <div className="bg-black/5 rounded-[3rem] p-16 lg:p-32 flex flex-col lg:flex-row gap-24 group hover:bg-black hover:text-white active:bg-black active:text-white transition-all duration-700 cursor-pointer">
                                    <div className="w-full lg:w-1/3 space-y-8">
                                        <div className="px-6 py-2 border-2 border-black/10 rounded-full inline-block text-[12px] font-black tracking-widest uppercase group-hover:border-white/20 group-active:border-white/20">
                                            Status: {p.status}
                                        </div>
                                        <h2 className="text-5xl md:text-6xl font-black tracking-tighter">{p.name}</h2>
                                        <div className="w-24 h-2 bg-black group-hover:bg-white group-active:bg-white transition-all" />
                                    </div>

                                    <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-16">
                                        <div className="space-y-4">
                                            <div className="text-[12px] font-black uppercase tracking-widest text-black/40 group-hover:text-white/40 group-active:text-white/40">Problem</div>
                                            <p className="text-2xl font-bold leading-tight">{p.problem}</p>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="text-[12px] font-black uppercase tracking-widest text-black/40 group-hover:text-white/40 group-active:text-white/40">Target Audience</div>
                                            <p className="text-2xl font-bold leading-tight">{p.audience}</p>
                                        </div>
                                        <div className="space-y-4 md:col-span-2">
                                            <div className="text-[12px] font-black uppercase tracking-widest text-black/40 group-hover:text-white/40 group-active:text-white/40">Vision</div>
                                            <p className="text-3xl font-bold leading-tight italic opacity-80">{p.vision}</p>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

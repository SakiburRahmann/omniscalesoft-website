"use client"

import { InstitutionalNav } from "@/components/layout/institutional-nav"
import { Footer } from "@/components/layout/footer"
import { Reveal, TextReveal } from "@/components/ui/motion-provider"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const cases = [
    {
        client: "VentureScale Systems",
        project: "Hyperscale Cloud Architecture",
        impact: "Reduced system latency by 45% for 1M+ concurrent users.",
        tags: ["Distributed Systems", "Cloud Infrastructure"]
    },
    {
        client: "GlobalPay Fintech",
        project: "Secure Payment Gateway",
        impact: "Zero-defect security audit for high-volume cross-border transactions.",
        tags: ["Security Engineering", "Fintech"]
    },
    {
        client: "DataMeld AI",
        project: "Enterprise Data Pipeline",
        impact: "Automated ingestion of terabyte-scale technical datasets.",
        tags: ["Data Engineering", "AI Integration"]
    }
]

export default function Work() {
    return (
        <main className="min-h-screen">
            <InstitutionalNav />
            <section className="pt-40 pb-24 px-8 md:px-12 lg:px-24">
                <div className="max-w-[1400px] mx-auto">
                    <TextReveal
                        text="Selected Outcomes."
                        className="text-6xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tighter text-premium mb-16 md:mb-32"
                        delay={0.2}
                    />

                    <div className="grid grid-cols-1 gap-px bg-black border-2 border-black rounded-[3rem]">
                        {cases.map((c, i) => (
                            <Reveal key={i} delay={0.4 + i * 0.2}>
                                <div className={cn(
                                    "bg-white p-16 lg:p-32 flex flex-col lg:flex-row justify-between items-start lg:items-center group hover:bg-black hover:text-white active:bg-black active:text-white transition-all duration-700 cursor-pointer",
                                    i === 0 ? "rounded-t-[2.8rem]" : "",
                                    i === cases.length - 1 ? "rounded-b-[2.8rem]" : ""
                                )}>
                                    <div className="space-y-8">
                                        <div className="text-[12px] font-black uppercase tracking-widest text-black/40 group-hover:text-white/40 group-active:text-white/40">{c.client}</div>
                                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter">{c.project}</h2>
                                        <p className="text-2xl font-bold text-black/80 group-hover:text-white/80 group-active:text-white/80 max-w-2xl leading-tight">{c.impact}</p>
                                    </div>
                                    <div className="mt-16 lg:mt-0 flex flex-col items-end gap-16">
                                        <ArrowUpRight className="w-12 h-12 transform group-hover:translate-x-4 group-hover:-translate-y-4 group-active:translate-x-4 group-active:-translate-y-4 transition-transform duration-500" />
                                        <div className="flex gap-4">
                                            {c.tags.map((tag, j) => (
                                                <span key={j} className="px-4 py-1 border border-black/10 rounded-full text-[10px] font-bold uppercase tracking-widest group-hover:border-white/20 group-active:border-white/20">{tag}</span>
                                            ))}
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

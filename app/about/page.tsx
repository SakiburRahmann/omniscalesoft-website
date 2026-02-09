"use client"

import { InstitutionalNav } from "@/components/layout/institutional-nav"
import { Footer } from "@/components/layout/footer"
import { Reveal, TextReveal } from "@/components/ui/motion-provider"

const themes = [
    {
        title: "Systems Thinking",
        desc: "We don't build features in isolation. We architect systems that function as integrated organisms, where every node serves a purpose."
    },
    {
        title: "Quality Over Speed",
        desc: "Velocity is useless without stability. We prioritize structural integrity, knowing that sound foundations accelerate future growth."
    },
    {
        title: "Scaling for Years",
        desc: "Software should not expire. We build for longevity, resisting the entropy of rapid technology shifts and increasing user loads."
    }
]

export default function About() {
    return (
        <main className="min-h-screen">
            <InstitutionalNav />
            <section className="pt-40 pb-24 px-8 md:px-12 lg:px-24">
                <div className="max-w-[1400px] mx-auto">
                    <TextReveal
                        text="The Software Standard."
                        className="text-7xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter text-premium mb-32"
                        delay={0.2}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 border-t-2 border-black pt-24">
                        <Reveal className="space-y-12">
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight uppercase">Our Philosophy</h2>
                            <p className="text-2xl font-bold text-black/80 leading-tight">
                                OmniScaleSoft stands for technical excellence without the hype. We provide high-integrity systems for global partners while architecting our own internal products.
                            </p>
                        </Reveal>

                        <div className="space-y-12">
                            {themes.map((t, i) => (
                                <Reveal key={i} delay={0.4 + i * 0.2}>
                                    <div className="p-12 bg-black text-white rounded-3xl space-y-6 hover:scale-[1.02] transition-transform duration-500">
                                        <h3 className="text-3xl font-bold">{t.title}</h3>
                                        <p className="text-lg text-white/60 font-medium leading-relaxed">{t.desc}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    <div className="mt-64 pt-32 border-t-2 border-black">
                        <Reveal>
                            <h2 className="text-[14px] font-black uppercase tracking-[0.5em] text-black/40 mb-12">The Long-term Vision</h2>
                        </Reveal>
                        <TextReveal
                            text="To become the global standard for high-integrity software engineering."
                            className="text-4xl md:text-6xl font-black tracking-tighter max-w-5xl mx-auto leading-none"
                            delay={0.5}
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

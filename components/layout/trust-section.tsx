"use client"

import React from "react"

const principles = [
    {
        title: "Engineering-First",
        desc: "We don't settle for 'working'. We build systems that are architecturally sound and structurally optimized."
    },
    {
        title: "Scalable by Design",
        desc: "Architecture that handles today's traffic and tomorrow's hyperscale growth without technical debt."
    },
    {
        title: "Absolute Integrity",
        desc: "Security and performance are not features; they are foundational requirements of everything we build."
    },
    {
        title: "Clean Logic",
        desc: "Maintainable, strictly-typed codebases designed for long-term evolution and human readability."
    }
]

export function TrustSection() {
    return (
        <section className="py-24 px-8 md:px-12 lg:px-24 border-t border-black/5">
            <div className="max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    <div>
                        <div className="text-[10px] font-black uppercase tracking-[0.5em] text-black/20 mb-8">
                            Our Philosophy // Trust
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-12">
                            Why partners trust <br />OmniScale<span className="text-black/20">Soft.</span>
                        </h2>
                        <p className="text-xl md:text-2xl font-medium text-black/60 max-w-xl leading-snug">
                            We don't just write code. We engineer digital assets that provide long-term value, built with the same rigor we use for our own internal products.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {principles.map((p, i) => (
                            <div key={i} className="space-y-4">
                                <h3 className="text-xl font-black uppercase tracking-tight flex items-center gap-4">
                                    <span className="w-2 h-2 bg-black" />
                                    {p.title}
                                </h3>
                                <p className="text-sm font-medium text-black/40 leading-relaxed">
                                    {p.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

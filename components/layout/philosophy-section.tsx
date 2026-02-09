"use client"

import React from "react"

const philosophies = [
    {
        title: "Systems Thinking",
        desc: "We don't view software in isolation. Every module is a node in a larger ecosystem. We solve for the whole, not just the part."
    },
    {
        title: "Quality Over Speed",
        desc: "Haste is the architect of technical debt. We prioritize structural integrity, knowing that sound foundations accelerate future growth."
    },
    {
        title: "Years, Not Months",
        desc: "We build for the long-term. Our software is designed to scale and evolve for years, resisting the entropy of rapid technology shifts."
    }
]

export function PhilosophySection() {
    return (
        <section className="py-24 px-8 md:px-12 lg:px-24 bg-black/5">
            <div className="max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {philosophies.map((p, i) => (
                        <div key={i} className="bg-white p-12 border border-black/5 hover:border-black transition-all group h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-black uppercase tracking-tight mb-8 group-hover:translate-x-2 transition-transform">{p.title}</h3>
                                <p className="text-lg font-medium text-black/40 leading-relaxed">{p.desc}</p>
                            </div>
                            <div className="text-[10px] font-mono text-black/10 mt-12">
                                ETH_NODE // 0x{i + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

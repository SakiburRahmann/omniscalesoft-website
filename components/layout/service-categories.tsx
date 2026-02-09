"use client"

import React from "react"

const categories = [
    {
        title: "Client Software Development",
        desc: "Custom-built software engineered to solve specific operational bottlenecks. We build the tools that run your business."
    },
    {
        title: "Product Engineering",
        desc: "End-to-end product lifecycle management. From early prototype to global production scale."
    },
    {
        title: "UI/UX Design",
        desc: "Technical design systems that prioritize performance, usability, and brand authority. Aesthetic meets engineering."
    },
    {
        title: "AI & Automation",
        desc: "Integrating agentic logic and automated pipelines to provide a competitive advantage in the efficiency era."
    }
]

export function ServiceCategories() {
    return (
        <section className="py-24 px-8 md:px-12 lg:px-24 bg-black/5">
            <div className="max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 border border-black/10">
                    {categories.map((c, i) => (
                        <div key={i} className="bg-white p-12 md:p-20 group hover:bg-black transition-colors duration-500">
                            <div className="text-[10px] font-mono text-black/20 mb-8 group-hover:text-white/20 transition-colors">0x{i + 1}</div>
                            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-8 group-hover:text-white transition-colors">{c.title}</h3>
                            <p className="text-lg font-medium text-black/40 leading-relaxed group-hover:text-white/60 transition-colors">{c.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

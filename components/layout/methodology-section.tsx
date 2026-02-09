"use client"

import React from "react"

const steps = [
    {
        num: "01",
        title: "Discovery & Planning",
        desc: "We analyze your business logic to define what to build and why, before a single line of code is written."
    },
    {
        num: "02",
        title: "Design & Architecture",
        desc: "System blueprints designed for technical longevity, security, and exponential scale."
    },
    {
        num: "03",
        title: "Development",
        desc: "Rigorous, strictly-typed engineering sprints with continuous integration and real-time observability."
    },
    {
        num: "04",
        title: "Testing & Deployment",
        desc: "Zero-defect validation pipelines followed by stable, orchestrated production deployment."
    },
    {
        num: "05",
        title: "Maintenance & Scaling",
        desc: "Continuous optimization to ensure your infrastructure thrives under real-world traffic loads."
    }
]

export function MethodologySection() {
    return (
        <section className="py-48 px-8 md:px-12 lg:px-24">
            <div className="max-w-[1600px] mx-auto">
                <div className="mb-24">
                    <div className="text-[10px] font-black uppercase tracking-[0.5em] text-black/20 mb-8">
                        The Pipeline // Methodology
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-8">
                        A systematic approach <br />to <span className="text-black/20">high-stakes</span> delivery.
                    </h2>
                </div>

                <div className="space-y-4">
                    {steps.map((s, i) => (
                        <div key={i} className="group py-12 border-b border-black/5 flex flex-col md:flex-row gap-8 md:items-center hover:bg-black/5 px-8 transition-colors">
                            <div className="text-4xl md:text-6xl font-black text-black/10 group-hover:text-black transition-colors">{s.num}</div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-black uppercase tracking-wide mb-2">{s.title}</h3>
                                <p className="text-black/40 font-medium group-hover:text-black transition-colors">{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

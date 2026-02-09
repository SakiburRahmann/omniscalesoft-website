"use client"

import React from "react"
import { Layers, Zap, Target, ShieldCheck, Heart, Layout, Key } from "lucide-react"

const benefits = [
    {
        title: "Engineering-first mindset",
        desc: "We prioritize structural integrity, knowing that sound foundations accelerate future growth without technical debt.",
        Icon: Target
    },
    {
        title: "Scalable architecture",
        desc: "Systems built for longevity, resisting the entropy of rapid technology shifts and increasing user loads.",
        Icon: Zap
    },
    {
        title: "Long-term maintainability",
        desc: "Our code is engineered for standard-compliant longevity, ensuring your investment remains relevant for years.",
        Icon: ShieldCheck
    },
    {
        title: "Clean UI + strong backend",
        desc: "Seamless visual excellence backed by heavy-duty, high-performance server logic.",
        Icon: Layout
    },
    {
        title: "Security and performance",
        desc: "Absolute integrity is baked into every layer, from auth protocols to sub-pixel rendering and core logic.",
        Icon: Key
    }
]

export function BenefitsGrid() {
    return (
        <section className="py-48 px-8 md:px-12 lg:px-24 border-t border-black/5">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
                    {benefits.map((b, i) => (
                        <div key={i} className="space-y-8 group">
                            <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                                <b.Icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight group-hover:translate-x-2 transition-transform">
                                {b.title}
                            </h3>
                            <p className="text-lg text-black/70 font-medium leading-relaxed">
                                {b.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

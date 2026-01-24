"use client"

import React from "react"
import { LegacyNav } from "@/components/layout/legacy-nav"
import { Container } from "@/components/ui/container"

const methods = [
    {
        title: "Deep Discovery",
        desc: "We don’t just take orders. We challenge assumptions. We spend the first 2 weeks embedding with your team to uncover the \"why\" behind the \"what\".",
    },
    {
        title: "System Architecture",
        desc: "Before a single line of code is written, we design the nervous system of your application. Scale, security, and redundancy are baked in from the whiteboard phase.",
    },
    {
        title: "Agile Development",
        desc: "We work in rigorous 2-week sprints. You see working software every 14 days. No black boxes. No surprises. Just consistent, shippable value.",
        terminal: "$ git push origin main\n> Running tests...\n✔ Unit Tests (452/452) passed\n✔ Integration Tests passed\n> Building Docker image...\n_"
    },
    {
        title: "Launch & Scale",
        desc: "Go-live is just the beginning. We set up comprehensive monitoring, error tracking, and analytics to ensure your system performs under real-world load.",
    },
]

export default function Method() {
    return (
        <main className="min-h-screen bg-white font-sans text-black">
            <LegacyNav />

            <section className="pt-40 pb-24 md:pt-60 px-6">
                <Container>
                    <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] mb-12">Our Methodology<span className="text-[#000000]">.</span></h1>
                    <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-3xl leading-relaxed mb-32">
                        A transparent, engineering-led process designed to mitigate risk and maximize ROI.
                    </p>

                    <div className="space-y-40">
                        {methods.map((m, i) => (
                            <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                                <div>
                                    <h2 className="text-4xl font-bold mb-8">{m.title}</h2>
                                    <p className="text-xl text-slate-500 font-medium leading-relaxed">{m.desc}</p>
                                </div>
                                {m.terminal && (
                                    <div className="bg-black rounded-lg p-6 font-mono text-sm text-emerald-500 shadow-2xl">
                                        <pre className="whitespace-pre-wrap"><code>{m.terminal}</code></pre>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </main>
    )
}

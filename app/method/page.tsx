"use client"

import React, { useState, useEffect } from "react"
import { LegacyNav } from "@/components/layout/legacy-nav"
import { AnimateReveal, RevealItem } from "@/components/ui/animate-reveal"
import { motion } from "framer-motion"
import { Pipeline3D } from "@/components/ui/pipeline-3d"

const methods = [
    {
        title: "Deep Discovery",
        desc: "We don’t just take orders. We challenge assumptions. We spend the first 2 weeks embedding with your team to uncover the \"why\" behind the \"what\".",
        status: "COMPLETE",
    },
    {
        title: "System Architecture",
        desc: "Before a single line of code is written, we design the nervous system of your application. Scale, security, and redundancy are baked in from the whiteboard phase.",
        status: "IN REVIEW",
    },
    {
        title: "Agile Production",
        desc: "We work in rigorous 2-week sprints. You see working software every 14 days. No black boxes. No surprises. Just consistent, shippable value.",
        terminal: "$ git push origin main\n> Running tests...\n✔ Unit Tests (452/452) passed\n✔ Integration Tests passed\n> Building Docker image...\n_ (Build Stable)",
        status: "ACTIVE",
    },
    {
        title: "Launch & Infinite Scale",
        desc: "Go-live is just the beginning. We set up comprehensive monitoring, error tracking, and analytics to ensure your system performs under real-world load.",
        status: "PENDING",
    },
]

export default function Method() {
    const [terminalText, setTerminalText] = useState("")
    const targetText = methods[2].terminal || ""

    useEffect(() => {
        let i = 0
        const interval = setInterval(() => {
            setTerminalText(targetText.slice(0, i))
            i++
            if (i > targetText.length) clearInterval(interval)
        }, 30)
        return () => clearInterval(interval)
    }, [])

    return (
        <main className="min-h-screen bg-white font-sans text-black">
            <LegacyNav />

            <section className="pt-40 pb-24 md:pt-60 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
                        <AnimateReveal variant="slide-up">
                            <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] mb-12 leading-[0.9]">Methodology<span className="text-[#000000]">.</span></h1>
                            <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-3xl leading-relaxed">
                                A transparent, engineering-led process designed to mitigate risk and maximize ROI.
                            </p>
                        </AnimateReveal>

                        <div className="relative w-full h-[400px] lg:h-[600px] overflow-visible order-last lg:order-none">
                            <Pipeline3D />
                        </div>
                    </div>

                    <div className="space-y-40">
                        {methods.map((m, i) => (
                            <AnimateReveal key={i} variant="slide-up" className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                                <div>
                                    <div className="text-[10px] font-black tracking-widest text-blue-600 mb-6 uppercase flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
                                        {m.status}
                                    </div>
                                    <h2 className="text-4xl font-bold mb-8 uppercase tracking-tight">{m.title}</h2>
                                    <p className="text-xl text-slate-500 font-medium leading-relaxed">{m.desc}</p>
                                </div>

                                {m.terminal ? (
                                    <RevealItem className="bg-black rounded-lg p-8 font-mono text-sm text-emerald-500 shadow-2xl min-h-[200px] relative overflow-hidden">
                                        <div className="absolute top-2 left-4 flex gap-1.5">
                                            <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                            <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                                            <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                                        </div>
                                        <pre className="whitespace-pre-wrap mt-4"><code>{terminalText}</code></pre>
                                    </RevealItem>
                                ) : (
                                    <RevealItem className="h-[2px] bg-slate-100 self-center hidden lg:block" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 1, delay: 0.5 }} />
                                )}
                            </AnimateReveal>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

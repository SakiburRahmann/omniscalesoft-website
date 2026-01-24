"use client"

import React from "react"
import { LegacyNav } from "@/components/layout/legacy-nav"
import { Container } from "@/components/ui/container"

const caps = [
    {
        num: "01",
        title: "Product Strategy",
        desc: "We help you define what to build and why. From market research to MVP definition, we validate assumptions before writing a single line of code.",
    },
    {
        num: "02",
        title: "System Architecture",
        desc: "Designed for scale from Day 1. We architect cloud-native distributed systems that can handle millions of users without breaking a sweat.",
    },
    {
        num: "03",
        title: "Full-Stack Engineering",
        desc: "TypeScript, Rust, Python, Go. We use the right tool for the job, prioritizing performance, type safety, and maintainability.",
    },
    {
        num: "04",
        title: "AI & ML Integration",
        desc: "Leveraging Large Language Models and custom training pipelines to give your application a competitive edge in the automation era.",
    },
]

export default function Capabilities() {
    return (
        <main className="min-h-screen bg-white font-sans text-black">
            <LegacyNav />

            <section className="pt-40 pb-24 md:pt-60 px-6">
                <Container>
                    <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] mb-12">Capabilities<span className="text-[#000000]">.</span></h1>
                    <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-3xl leading-relaxed mb-32">
                        We operate at the intersection of Strategy, Design, and Engineering. Our multidisciplinary teams build products that define categories.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                        {caps.map((item, i) => (
                            <div key={i} className="group">
                                <div className="text-[10px] font-black tracking-[0.3em] text-blue-600 mb-6 uppercase border-b border-slate-100 pb-2 w-fit">{item.num}</div>
                                <h3 className="text-3xl font-bold mb-6 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                                <p className="text-xl text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </main>
    )
}

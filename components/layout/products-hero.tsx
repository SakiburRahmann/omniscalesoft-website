"use client"

import React from "react"

export function ProductsHero() {
    return (
        <section className="pt-40 pb-24 px-8 md:px-12 lg:px-24">
            <div className="max-w-[1600px] mx-auto">
                <div className="text-[10px] font-black uppercase tracking-[0.5em] text-black/20 mb-12">
                    Our Lab // Internal_Ventures
                </div>
                <h1 className="text-6xl md:text-[8rem] font-black uppercase leading-[0.85] tracking-tighter mb-16 max-w-4xl">
                    We are <span className="text-black/20">Builders.</span>
                </h1>
                <p className="text-2xl md:text-3xl font-medium text-black/60 max-w-2xl leading-tight">
                    Beyond client services, we architected our own high-performance infrastructure tools. We are builders, not just contractors.
                </p>
            </div>
        </section>
    )
}

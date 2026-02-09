"use client"

import React from "react"

export function AboutHero() {
    return (
        <section className="pt-40 pb-24 px-8 md:px-12 lg:px-24">
            <div className="max-w-[1600px] mx-auto">
                <div className="text-[10px] font-black uppercase tracking-[0.5em] text-black/20 mb-12">
                    Ethos // Core_Foundations
                </div>
                <h1 className="text-6xl md:text-[8rem] font-black uppercase leading-[0.85] tracking-tighter mb-16 max-w-4xl">
                    Engineering <span className="text-black/20">First.</span>
                </h1>
                <p className="text-2xl md:text-3xl font-medium text-black/60 max-w-2xl leading-tight">
                    OmniScaleSoft was founded on a singular principle: Software should be engineered for longevity, not just delivery.
                </p>
            </div>
        </section>
    )
}

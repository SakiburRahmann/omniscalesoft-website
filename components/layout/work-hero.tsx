"use client"

import React from "react"

export function WorkHero() {
    return (
        <section className="pt-40 pb-24 px-8 md:px-12 lg:px-24">
            <div className="max-w-[1600px] mx-auto">
                <div className="text-[10px] font-black uppercase tracking-[0.5em] text-black/20 mb-12">
                    Exhibitions // Structural_Outcomes
                </div>
                <h1 className="text-6xl md:text-[8rem] font-black uppercase leading-[0.85] tracking-tighter mb-16 max-w-4xl">
                    Selected <br /><span className="text-black/20">Work.</span>
                </h1>
                <p className="text-2xl md:text-3xl font-medium text-black/60 max-w-2xl leading-tight">
                    A curated gallery of engineering challenges solved at scale. We build the infrastructure that powers global software pioneers.
                </p>
            </div>
        </section>
    )
}

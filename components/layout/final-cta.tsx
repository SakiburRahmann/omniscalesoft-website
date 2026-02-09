"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
    return (
        <section className="py-48 px-8 md:px-12 lg:px-24 bg-black text-white text-center">
            <div className="max-w-[1200px] mx-auto">
                <h2 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter leading-[0.8] mb-32 px-4">
                    Have an idea? <br />Let's <span className="text-white/40">talk</span> about it.
                </h2>
                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                    <Button variant="action" size="lg" className="bg-white text-black hover:bg-black hover:text-white border-white rounded-full px-12" asChild>
                        <Link href="/contact">Let's Talk</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

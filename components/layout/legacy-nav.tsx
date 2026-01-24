"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function LegacyNav() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
            scrolled ? "bg-white/80 backdrop-blur-md border-b border-[#e4e4e7]" : "bg-transparent"
        )}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight text-black">
                    OmniScaleSoft
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-10">
                    <Link href="/capabilities" className="text-sm font-bold text-slate-600 hover:text-black transition-colors">Capabilities</Link>
                    <Link href="/work" className="text-sm font-bold text-slate-600 hover:text-black transition-colors">Work</Link>
                    <Link href="/method" className="text-sm font-bold text-slate-600 hover:text-black transition-colors">Method</Link>
                    <Button variant="action" size="sm" asChild>
                        <Link href="/contact">Let's Talk</Link>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-b border-[#e4e4e7] p-6 flex flex-col gap-6 md:hidden shadow-xl">
                    <Link href="/capabilities" onClick={() => setIsOpen(false)} className="text-lg font-bold text-black border-b border-slate-100 pb-2">Capabilities</Link>
                    <Link href="/work" onClick={() => setIsOpen(false)} className="text-lg font-bold text-black border-b border-slate-100 pb-2">Work</Link>
                    <Link href="/method" onClick={() => setIsOpen(false)} className="text-lg font-bold text-black border-b border-slate-100 pb-2">Method</Link>
                    <Button variant="action" className="w-full py-6 text-lg" asChild onClick={() => setIsOpen(false)}>
                        <Link href="/contact">Let's Talk</Link>
                    </Button>
                </div>
            )}
        </nav>
    )
}

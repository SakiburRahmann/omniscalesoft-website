"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"

export function LegacyNav({ theme = "default" }: { theme?: "hero" | "default" }) {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const isHero = theme === "hero"
    const displayTheme = (isHero && !scrolled) ? "light" : "dark"
    const colorClass = displayTheme === "light" ? "text-white" : "text-black"
    const linkColorClass = displayTheme === "light" ? "text-white/70 hover:text-white" : "text-slate-600 hover:text-black"

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
            scrolled ? "bg-white/80 backdrop-blur-md border-b border-[#e4e4e7]" : "bg-transparent"
        )}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/">
                    <Logo variant={displayTheme} />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-10">
                    <Link href="/" className={cn("text-sm font-bold transition-all", linkColorClass)}>Home</Link>
                    <Link href="/capabilities" className={cn("text-sm font-bold transition-all", linkColorClass)}>Capabilities</Link>
                    <Link href="/work" className={cn("text-sm font-bold transition-all", linkColorClass)}>Work</Link>
                    <Link href="/method" className={cn("text-sm font-bold transition-all", linkColorClass)}>Method</Link>
                    <Button variant={displayTheme === "light" ? "outline" : "action"} size="sm" asChild>
                        <Link href="/contact" className={cn(displayTheme === "light" && "border-white/20 text-white hover:bg-white hover:text-black transition-all bg-transparent")}>Let's Talk</Link>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button className={cn("md:hidden transition-colors", colorClass)} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-b border-[#e4e4e7] p-6 flex flex-col gap-6 md:hidden shadow-xl text-black">
                    <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-bold border-b border-slate-100 pb-2">Home</Link>
                    <Link href="/capabilities" onClick={() => setIsOpen(false)} className="text-lg font-bold border-b border-slate-100 pb-2">Capabilities</Link>
                    <Link href="/work" onClick={() => setIsOpen(false)} className="text-lg font-bold border-b border-slate-100 pb-2">Work</Link>
                    <Link href="/method" onClick={() => setIsOpen(false)} className="text-lg font-bold border-b border-slate-100 pb-2">Method</Link>
                    <Button variant="action" className="w-full py-6 text-lg" asChild onClick={() => setIsOpen(false)}>
                        <Link href="/contact">Let's Talk</Link>
                    </Button>
                </div>
            )}
        </nav>
    )
}

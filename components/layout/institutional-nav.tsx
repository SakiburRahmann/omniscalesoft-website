"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import { motion, AnimatePresence, Variants } from "framer-motion"

export function InstitutionalNav() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const links = [
        { name: "Home", href: "/" },
        { name: "Product", href: "/products" },
        { name: "Capabilities", href: "/capabilities" },
        { name: "Systems", href: "/work" },
        { name: "About", href: "/about" },
    ]

    const [isOpen, setIsOpen] = useState(false)

    // Slow motion menu transitions
    const menuVariants: Variants = {
        closed: {
            opacity: 0,
            clipPath: "circle(0% at 50% 0%)",
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        },
        open: {
            opacity: 1,
            clipPath: "circle(150% at 50% 0%)",
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
        }
    }

    const itemVariants: Variants = {
        closed: { opacity: 0, y: 30 },
        open: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.4 + i * 0.1,
                duration: 1.0,
                ease: [0.16, 1, 0.3, 1]
            }
        })
    }

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
            isOpen ? "bg-white h-full" : (scrolled ? "bg-white/90 backdrop-blur-md border-b border-black/5 py-4" : "bg-transparent py-6")
        )}>
            <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between py-6">
                <Link href="/" className="z-[110] shrink-0" onClick={() => setIsOpen(false)}>
                    <Logo />
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-1 bg-black/5 p-1 rounded-full border border-black/5 backdrop-blur-sm">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[12px] font-black uppercase tracking-widest text-black/80 hover:text-black px-6 py-3 transition-all hover:bg-white rounded-full"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile & Action Buttons */}
                <div className="flex items-center gap-4">
                    <Button variant="default" size="lg" className="hidden md:flex rounded-full h-11 px-8 text-[11px] font-black uppercase tracking-widest shadow-xl shadow-black/10" asChild>
                        <Link href="/contact">Establish Connection</Link>
                    </Button>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden z-[110] p-3 rounded-full bg-black text-white shadow-xl shadow-black/20 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay - Pure Solid White */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="lg:hidden fixed inset-0 bg-white z-[105] flex flex-col items-center justify-center p-8"
                    >
                        <div className="flex flex-col items-center gap-12">
                            {links.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        transition: { delay: 0.1 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                                    }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-4xl font-bold uppercase tracking-tighter text-black"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: 0.6, duration: 0.8 }
                                }}
                                className="pt-8"
                            >
                                <Button className="rounded-full h-16 px-16 text-[14px] font-black uppercase tracking-widest shadow-2xl shadow-black/10" asChild onClick={() => setIsOpen(false)}>
                                    <Link href="/contact">Establish Connection</Link>
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"

export function ContactPortal() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Submission logic placeholder
        console.log("Connection Established:", formState)
        alert("Institutional Connection Established. We will respond within 24 hours.")
    }

    return (
        <section className="pt-40 pb-24 px-8 md:px-12 lg:px-24">
            <div className="max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    <div>
                        <div className="text-[10px] font-black uppercase tracking-[0.5em] text-black/20 mb-12">
                            Intake // Establish_Connection
                        </div>
                        <h1 className="text-6xl md:text-[8rem] font-black uppercase leading-[0.85] tracking-tighter mb-16">
                            Let's build <br /><span className="text-black/20">The Future.</span>
                        </h1>
                        <p className="text-2xl md:text-3xl font-medium text-black/60 max-w-xl leading-tight mb-12">
                            Have a high-stakes engineering challenge? Describe your vision, and we will architect the solution.
                        </p>
                        <div className="space-y-4">
                            <div className="text-[10px] font-black uppercase tracking-widest text-black/20">Direct_Email</div>
                            <a href="mailto:solutions@omniscalesoft.com" className="text-2xl font-black uppercase hover:underline underline-offset-8 transition-all">
                                solutions@omniscalesoft.com
                            </a>
                        </div>
                    </div>

                    <div className="bg-black/5 p-12 md:p-16 border border-black/5">
                        <form onSubmit={handleSubmit} className="space-y-12">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-widest text-black/40">01 // Full_Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-transparent border-b border-black/20 py-4 text-xl font-bold focus:outline-none focus:border-black transition-colors"
                                    placeholder="Enter your name"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-widest text-black/40">02 // Email_Address</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-transparent border-b border-black/20 py-4 text-xl font-bold focus:outline-none focus:border-black transition-colors"
                                    placeholder="Enter your email"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-widest text-black/40">03 // Project_Vision</label>
                                <textarea
                                    required
                                    rows={4}
                                    className="w-full bg-transparent border-b border-black/20 py-4 text-xl font-bold focus:outline-none focus:border-black transition-colors resize-none"
                                    placeholder="Describe the challenge"
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                />
                            </div>
                            <Button type="submit" variant="action" size="lg" className="w-full mt-8">
                                Initiate Integration
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

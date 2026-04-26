"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = ["All", "Web", "Apps", "Branding", "Social Media", "AI & Systems"];

const PROJECTS = [
    { id: 1, title: "Enterprise Client Dashboard", category: "Web", description: "A custom data visualization platform improving data processing speed by 40% for a fintech leader.", gradient: "from-[rgba(0,229,255,0.15)] to-[rgba(7,11,25,0.8)]", tag: "Web Development", size: "large" },
    { id: 2, title: "Global Logistics App", category: "Apps", description: "Cross-platform mobile app providing real-time fleet tracking and delivery management.", gradient: "from-[rgba(0,229,255,0.1)] to-[rgba(7,11,25,0.8)]", tag: "App Development", size: "normal" },
    { id: 3, title: "NeoTech Rebranding", category: "Branding", description: "A complete visual overhaul for a modern tech startup including logo and brand guidelines.", gradient: "from-[#1E2D6E] to-[rgba(7,11,25,0.8)]", tag: "Brand Identity", size: "normal" },
    { id: 4, title: "AI Customer Support Agent", category: "AI & Systems", description: "An intelligent chatbot reducing support tickets by 60% for an e-commerce platform.", gradient: "from-[rgba(0,229,255,0.05)] to-[rgba(7,11,25,0.8)]", tag: "AI Automation", size: "normal" },
    { id: 5, title: "Fintech Growth Campaign", category: "Social Media", description: "A high-converting social ad campaign generating 3x ROI for a fintech startup in under 6 weeks.", gradient: "from-[rgba(0,229,255,0.12)] to-[rgba(7,11,25,0.8)]", tag: "Social Media", size: "normal" },
    { id: 6, title: "Healthcare Patient Portal", category: "Web", description: "HIPAA-compliant web portal enabling secure patient-doctor communication and record management.", gradient: "from-[#0A1128] to-[rgba(7,11,25,0.8)]", tag: "Web Development", size: "large" },
];

export default function PortfolioSection() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? PROJECTS
        : PROJECTS.filter(p => p.category === activeCategory);

    return (
        <div id="portfolio" className="flex flex-col w-full bg-[#070B19] py-28 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-16">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
                    <p className="text-[#00E5FF] font-bold text-sm tracking-widest uppercase mb-3">Our Work</p>
                    <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Projects We're Proud Of</h2>
                    <div className="mt-4 h-1 w-16 bg-[#00E5FF] mx-auto rounded-full" />
                </motion.div>
            </div>

            {/* ── Filter + Grid ────────────────────────────── */}
            <section className="px-4 relative z-10 bg-[#070B19]">
                <div className="max-w-7xl mx-auto">
                    {/* Desktop Filters */}
                    <div className="hidden md:flex justify-center flex-wrap gap-3 mb-14">
                        {CATEGORIES.map(cat => (
                            <motion.button key={cat} onClick={() => setActiveCategory(cat)} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                                className={`px-5 py-2 rounded-full font-bold text-sm transition-all duration-300 border ${activeCategory === cat
                                    ? "bg-[#00E5FF] text-[#070B19] border-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.4)]"
                                    : "bg-transparent text-gray-400 border-white/10 hover:border-[#00E5FF]/40 hover:text-white"
                                    }`}>
                                {cat}
                            </motion.button>
                        ))}
                    </div>

                    {/* Mobile Filter */}
                    <div className="md:hidden mb-8">
                        <div className="flex items-center text-gray-300 font-bold mb-2 gap-2"><Filter size={16} /> Filter</div>
                        <select value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)}
                            className="w-full p-3 border border-white/10 rounded-xl bg-[#0A1128] text-white focus:outline-none focus:ring-2 focus:ring-[#00E5FF]">
                            {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                        </select>
                    </div>

                    {/* Project Grid */}
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.92 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.92 }}
                                    transition={{ duration: 0.35 }}
                                    className={`group hovercraft-card border border-white/5 hover:border-[#00E5FF]/30 cursor-pointer overflow-hidden ${project.size === "large" ? "md:col-span-1 lg:col-span-1" : ""}`}
                                    style={{ minHeight: "320px" }}
                                >
                                    {/* Gradient background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 mix-blend-screen`} />
                                    {/* Noise texture */}
                                    <div className="absolute inset-0 bg-noise opacity-[0.1]" />
                                    {/* Shimmer on hover */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[#070B19]/80 via-transparent to-transparent" />

                                    {/* Content */}
                                    <div className="absolute inset-0 p-7 flex flex-col justify-between z-10">
                                        {/* Tag */}
                                        <div>
                                            <span className="inline-block bg-[rgba(0,229,255,0.1)] border border-[rgba(0,229,255,0.2)] text-[#00E5FF] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-[0_0_10px_rgba(0,229,255,0.2)]">
                                                {project.tag}
                                            </span>
                                        </div>

                                        {/* Bottom info */}
                                        <div>
                                            <h3 className="text-white text-xl font-black mb-2 leading-snug drop-shadow-md">{project.title}</h3>
                                            <p className="text-[#B0B8C1] text-sm leading-relaxed opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-20 transition-all duration-500 overflow-hidden">{project.description}</p>
                                            <div className="mt-4 flex items-center gap-2 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:text-[#00E5FF]">
                                                View Case Study <ArrowRight size={14} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Corner badge */}
                                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[rgba(0,229,255,0.1)] shadow-[0_0_10px_rgba(0,229,255,0.2)] z-20">
                                        <ArrowRight size={13} className="text-[#00E5FF] -rotate-45" />
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

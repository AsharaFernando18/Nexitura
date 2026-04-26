"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Plus, ChevronDown, ChevronUp, ArrowRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TIERS = [
    {
        name: "Starter",
        description: "Best for small businesses & startups",
        features: ["1 core service", "2-week delivery", "Email support", "30-day bug-fix warranty"],
        highlight: false,
        cta: "Inquire Now",
    },
    {
        name: "Growth",
        description: "Best for scaling companies",
        features: ["3 core services", "4–6 week delivery", "Priority support", "Dedicated project manager", "30-day bug-fix warranty"],
        highlight: true,
        cta: "Inquire Now",
    },
    {
        name: "Enterprise",
        description: "Best for established enterprises",
        features: ["Full-suite engagement", "Dedicated team & timeline", "Dedicated account manager", "SLA-backed delivery"],
        highlight: false,
        cta: "Get Custom Quote",
    },
];

const ADD_ONS = [
    { name: "Extra revision rounds" },
    { name: "Monthly maintenance retainer" },
    { name: "SEO optimization package" },
    { name: "Social media content (monthly)" },
    { name: "AI chatbot integration" },
    { name: "Custom API/system integration" },
];

const FAQS = [
    { q: "Do you offer payment plans?", a: "Yes, we typically structure payments into milestones (e.g., 50% deposit, 50% on completion) but are happy to discuss custom arrangements." },
    { q: "How long does a typical project take?", a: "Starter packages take ~2 weeks, Growth 4-6 weeks, and Enterprise projects depend on scope. We'll give you a precise timeline in your discovery call." },
    { q: "What do I need to get started?", a: "We'll need your brand guidelines, project goals, and specific feature requirements. We cover all of this in our free discovery call." },
    { q: "Do you offer post-launch support?", a: "Yes — 30 days of free bug-fix support is included with every package. Optional monthly maintenance retainers are also available." },
    { q: "Can I upgrade my package?", a: "Absolutely. If your scope changes during discovery, we'll smoothly transition you to a higher tier with no fuss." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div
            onClick={() => setOpen(!open)}
            className={`glass-dark rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden ${open ? "border-[#00E5FF]/40 shadow-[0_0_15px_rgba(0,229,255,0.15)]" : "border-white/5 hover:border-[#00E5FF]/30"}`}
        >
            <div className="flex items-center justify-between p-6 md:p-7">
                <h3 className="text-base font-bold text-white pr-4">{q}</h3>
                <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${open ? "bg-[rgba(0,229,255,0.2)] text-[#00E5FF]" : "bg-white/5 text-gray-400"}`}>
                    {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </span>
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="px-6 md:px-7 pb-6 text-[#B0B8C1] leading-relaxed">{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function PricingSection() {
    return (
        <div id="pricing" className="flex flex-col w-full bg-[#070B19] pt-28">

            <div className="text-center px-4 sm:px-6 lg:px-8 mb-4">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                    className="inline-flex items-center gap-2 bg-[rgba(0,229,255,0.1)] border border-[rgba(0,229,255,0.25)] text-[#00E5FF] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
                    <span className="w-1.5 h-1.5 bg-[#00E5FF] rounded-full animate-pulse" />
                    Transparent Pricing
                </motion.div>
                <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl sm:text-5xl lg:text-5xl font-black text-white tracking-tight mb-6 mt-0 drop-shadow-xl">
                    Simple. Fair. <span className="gradient-text">No Surprises.</span>
                </motion.h2>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}
                    className="text-base text-[#B0B8C1] max-w-xl mx-auto drop-shadow-lg font-medium">
                    Choose a package that fits your goals, or get a tailored quote for your specific needs.
                </motion.p>
            </div>

            {/* ── Pricing Tiers ──────────────────────────────── */}
            <section className="relative z-10 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch pt-12 lg:pt-16 pb-28">
                    {TIERS.map((tier, i) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`relative rounded-2xl flex flex-col p-8 sm:p-10 shadow-xl transition-all duration-300 overflow-hidden
                                ${tier.highlight
                                    ? "bg-[rgba(0,229,255,0.03)] border-2 border-[rgba(0,229,255,0.4)] md:-translate-y-4 hover:-translate-y-6 hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] z-10 backdrop-blur-2xl"
                                    : "hovercraft-card"}`}
                        >
                            {/* Most Popular ribbon */}
                            {tier.highlight && (
                                <div className="absolute top-5 right-5">
                                    <div className="flex items-center gap-1 bg-[rgba(0,229,255,0.15)] border border-[#00E5FF]/30 px-3 py-1 rounded-full text-xs font-black text-[#00E5FF]">
                                        <Star size={11} fill="currentColor" />
                                        Most Popular
                                    </div>
                                </div>
                            )}
                            {/* Glow blob for featured card */}
                            {tier.highlight && <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#00E5FF] opacity-10 rounded-full blur-3xl animate-pulse" />}

                            <h3 className="text-2xl font-black mb-2 text-white">{tier.name}</h3>
                            <p className="text-sm mb-8 text-[#B0B8C1]">{tier.description}</p>

                            <ul className="mb-10 space-y-4 flex-grow relative z-10">
                                {tier.features.map(feature => (
                                    <li key={feature} className="flex items-center gap-3">
                                        <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-[rgba(0,229,255,0.15)]">
                                            <Check className="text-[#00E5FF]" size={12} strokeWidth={3} />
                                        </span>
                                        <span className="font-medium text-sm text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="#contact"
                                className={`w-full py-4 rounded-xl font-black text-center text-sm transition-all duration-300 relative z-10 ${tier.highlight
                                    ? "bg-[#00E5FF] text-[#070B19] hover:bg-white hover:text-[#070B19] hover:shadow-[0_0_20px_rgba(0,229,255,0.6)]"
                                    : "bg-white/5 text-white border border-white/10 hover:border-[#00E5FF]/50 hover:bg-[rgba(0,229,255,0.1)] hover:text-[#00E5FF]"
                                    }`}
                            >
                                {tier.cta}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── Add-Ons ────────────────────────────────────── */}
            <section className="bg-[#0A1128] py-24 border-t border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-dot-pattern opacity-[0.05]" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <p className="text-[#00E5FF] font-bold text-sm tracking-widest uppercase mb-3">Extras</p>
                        <h2 className="text-3xl font-black text-white">Add-On Services</h2>
                        <div className="mt-4 h-1 w-16 bg-[#00E5FF] mx-auto rounded-full" />
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {ADD_ONS.map((addon, i) => (
                            <motion.div key={addon.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                                className="flex items-center justify-between p-5 rounded-2xl border border-white/5 hover:border-[#00E5FF]/40 hovercraft-card group">
                                <div className="flex items-center gap-3 font-medium text-white text-sm">
                                    <Plus size={14} className="text-[#00E5FF] shrink-0 group-hover:rotate-90 transition-transform duration-300" />
                                    {addon.name}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ ─────────────────────────────────────────── */}
            <section className="py-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <p className="text-[#00E5FF] font-bold text-sm tracking-widest uppercase mb-3">FAQ</p>
                        <h2 className="text-3xl font-black text-white">Common Questions</h2>
                        <div className="mt-4 h-1 w-16 bg-[#00E5FF] mx-auto rounded-full" />
                    </motion.div>
                    <div className="space-y-4">
                        {FAQS.map((faq, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                                <FAQItem q={faq.q} a={faq.a} />
                            </motion.div>
                        ))}
                    </div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-14 text-center">
                        <p className="text-[#B0B8C1] mb-6">Still have questions? We're happy to chat.</p>
                        <Link href="#contact" className="btn-primary inline-flex items-center gap-2 text-base group rounded-xl px-10 py-4">
                            Talk to Us <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

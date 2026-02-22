"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Plus, ChevronDown, ChevronUp, ArrowRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TIERS = [
    {
        name: "Starter",
        description: "Best for small businesses & startups",
        price: "From RM 2,500",
        features: ["1 core service", "2-week delivery", "Email support", "30-day bug-fix warranty"],
        highlight: false,
        cta: "Inquire Now",
    },
    {
        name: "Growth",
        description: "Best for scaling companies",
        price: "From RM 6,000",
        features: ["3 core services", "4–6 week delivery", "Priority support", "Dedicated project manager", "30-day bug-fix warranty"],
        highlight: true,
        cta: "Inquire Now",
    },
    {
        name: "Enterprise",
        description: "Best for established enterprises",
        price: "Custom Quote",
        features: ["Full-suite engagement", "Dedicated team & timeline", "Dedicated account manager", "SLA-backed delivery"],
        highlight: false,
        cta: "Get Custom Quote",
    },
];

const ADD_ONS = [
    { name: "Extra revision rounds", price: "From RM 200" },
    { name: "Monthly maintenance retainer", price: "From RM 500/mo" },
    { name: "SEO optimization package", price: "From RM 800" },
    { name: "Social media content (monthly)", price: "From RM 1,200/mo" },
    { name: "AI chatbot integration", price: "From RM 1,500" },
    { name: "Custom API/system integration", price: "From RM 2,000" },
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
            className={`bg-white rounded-2xl border cursor-pointer transition-all duration-300 overflow-hidden ${open ? "border-[#00C8E0]/40 shadow-lg" : "border-gray-100 hover:border-[#00C8E0]/30"}`}
        >
            <div className="flex items-center justify-between p-6 md:p-7">
                <h3 className="text-base font-bold text-[#1A1A2E] pr-4">{q}</h3>
                <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${open ? "bg-[#00C8E0] text-[#1E2D6E]" : "bg-[#FAFBFF] text-[#1E2D6E]"}`}>
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
                        <p className="px-6 md:px-7 pb-6 text-gray-500 leading-relaxed">{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function Pricing() {
    return (
        <div className="flex flex-col w-full">

            {/* ── Hero ───────────────────────────────────────── */}
            <section className="relative bg-[#0D1530] pt-48 pb-32 overflow-hidden text-center">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.07]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00C8E0] opacity-[0.08] rounded-full blur-[120px]" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                        className="inline-flex items-center gap-2 bg-[rgba(0,200,224,0.1)] border border-[rgba(0,200,224,0.25)] text-[#00C8E0] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
                        <span className="w-1.5 h-1.5 bg-[#00C8E0] rounded-full animate-pulse" />
                        Transparent Pricing
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
                        Simple. Fair. <span className="gradient-text">No Surprises.</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}
                        className="text-lg text-gray-400 max-w-xl mx-auto">
                        Choose a package that fits your goals, or get a tailored quote for your specific needs.
                    </motion.p>
                </div>
            </section>

            {/* ── Pricing Tiers ──────────────────────────────── */}
            <section className="bg-[#FAFBFF] relative z-10 -mt-12 pb-28 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch pt-16">
                    {TIERS.map((tier, i) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: tier.highlight ? -12 : -8, scale: 1.02 }}
                            className={`relative rounded-2xl flex flex-col p-8 sm:p-10 shadow-xl transition-shadow duration-300 overflow-hidden
                                ${tier.highlight
                                    ? "bg-gradient-to-b from-[#00C8E0] to-[#009fb3] text-[#0D1530] shadow-[0_0_40px_rgba(0,200,224,0.3)] md:-translate-y-4 z-10"
                                    : "bg-white text-[#1A1A2E]"}`}
                        >
                            {/* Most Popular ribbon */}
                            {tier.highlight && (
                                <div className="absolute top-5 right-5">
                                    <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-xs font-black text-[#0D1530]">
                                        <Star size={11} fill="currentColor" />
                                        Most Popular
                                    </div>
                                </div>
                            )}
                            {/* Glow blob for featured card */}
                            {tier.highlight && <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl animate-pulse" />}

                            <h3 className="text-2xl font-black mb-2">{tier.name}</h3>
                            <p className={`text-sm mb-8 ${tier.highlight ? "text-[#0D1530]/70" : "text-gray-500"}`}>{tier.description}</p>

                            <div className="mb-8">
                                <span className="text-3xl font-black tracking-tight">{tier.price}</span>
                            </div>

                            <ul className="mb-10 space-y-4 flex-grow">
                                {tier.features.map(feature => (
                                    <li key={feature} className="flex items-center gap-3">
                                        <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${tier.highlight ? "bg-white/25" : "bg-[rgba(0,200,224,0.15)]"}`}>
                                            <Check className={tier.highlight ? "text-[#0D1530]" : "text-[#00C8E0]"} size={12} strokeWidth={3} />
                                        </span>
                                        <span className="font-medium text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={`/contact?package=${tier.name.toLowerCase()}`}
                                className={`w-full py-4 rounded-xl font-black text-center text-sm transition-all duration-300 hover:-translate-y-0.5 ${tier.highlight
                                    ? "bg-[#0D1530] text-white hover:bg-white hover:text-[#0D1530] shadow-lg"
                                    : "bg-[#FAFBFF] text-[#1E2D6E] hover:bg-[#00C8E0] hover:text-[#1E2D6E]"
                                    }`}
                            >
                                {tier.cta}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── Add-Ons ────────────────────────────────────── */}
            <section className="bg-[#FAFBFF] py-24 border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <p className="text-[#00C8E0] font-bold text-sm tracking-widest uppercase mb-3">Extras</p>
                        <h2 className="text-3xl font-black text-[#1E2D6E]">Add-On Services</h2>
                        <div className="mt-4 h-1 w-16 bg-[#00C8E0] mx-auto rounded-full" />
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {ADD_ONS.map((addon, i) => (
                            <motion.div key={addon.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                                className="flex items-center justify-between p-5 rounded-2xl border border-gray-100 hover:border-[#00C8E0]/40 bg-[#FAFBFF] hover:bg-white hover:shadow-md transition-all duration-300 group">
                                <div className="flex items-center gap-3 font-medium text-[#1A1A2E] text-sm">
                                    <Plus size={14} className="text-[#00C8E0] shrink-0 group-hover:rotate-90 transition-transform duration-300" />
                                    {addon.name}
                                </div>
                                <div className="font-black text-[#1E2D6E] text-sm whitespace-nowrap ml-4">{addon.price}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ ─────────────────────────────────────────── */}
            <section className="bg-[#FAFBFF] py-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <p className="text-[#00C8E0] font-bold text-sm tracking-widest uppercase mb-3">FAQ</p>
                        <h2 className="text-3xl font-black text-[#1E2D6E]">Common Questions</h2>
                    </motion.div>
                    <div className="space-y-4">
                        {FAQS.map((faq, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                                <FAQItem q={faq.q} a={faq.a} />
                            </motion.div>
                        ))}
                    </div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-14 text-center">
                        <p className="text-gray-500 mb-6">Still have questions? We&apos;re happy to chat.</p>
                        <Link href="/contact" className="btn-primary inline-flex items-center gap-2 text-base group rounded-xl px-10 py-4">
                            Talk to Us <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

"use client";

import { CheckCircle2, Zap, LayoutTemplate, Layers, ArrowRight, Target, Shield, Clock } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Marquee from "@/components/Marquee";

const DIFFERENTIATORS = [
    { title: "Full-Stack Capability", description: "From pixel-perfect UI to AI-powered back-end — we handle it all in-house.", icon: Layers, color: "text-blue-400" },
    { title: "Speed Without Compromise", description: "Rapid delivery cycles that don't sacrifice quality, security, or scalability.", icon: Zap, color: "text-[#00E5FF]" },
    { title: "Transparent Process", description: "You'll always know where your project stands — no black boxes, ever.", icon: LayoutTemplate, color: "text-violet-400" },
    { title: "Future-Ready Solutions", description: "We build for today and architect for tomorrow's scale.", icon: Target, color: "text-emerald-400" },
    { title: "Client-First Culture", description: "Your goals are our KPIs. We measure success by your growth, not just delivery.", icon: Shield, color: "text-orange-400" },
    { title: "Fast Turnarounds", description: "Starter projects in 2 weeks. We respect your time and your market windows.", icon: Clock, color: "text-pink-400" },
];

const TEAM_PLACEHOLDERS = [
    { initials: "AF", role: "Founder & Lead Dev", name: "Ashara Fernando", color: "from-blue-600 to-cyan-500", linkedin: "https://www.linkedin.com/in/asharafernando" },
    { initials: "PF", role: "UI/UX Designer", name: "Pabashi Fernando", color: "from-violet-600 to-purple-500", linkedin: "" },
    { initials: "CK", role: "AI Engineer", name: "Chathurindu Kaushalya", color: "from-emerald-600 to-teal-500", linkedin: "" },
    { initials: "SD", role: "Project Manager", name: "Senuji De Silva", color: "from-orange-500 to-amber-400", linkedin: "https://www.linkedin.com/in/senuji-kehara-de-silva-56b5b4349" },
];

export default function AboutSection() {
    return (
        <div id="about" className="flex flex-col w-full">

            {/* ── Infinite Marquee ─────────────────────────────── */}
            <section className="bg-[#070B19] border-t border-b border-white/5 py-6 overflow-hidden">
                <Marquee
                    items={["Singapore", "London", "New York", "Dubai", "Sydney", "Remote-First", "Global Reach"]}
                    speed={35}
                    direction="right"
                />
            </section>

            {/* ── Our Story ────────────────────────────────── */}
            <section className="py-28 bg-[#0A1128]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <p className="text-[#00E5FF] font-bold text-sm tracking-widest uppercase mb-3">Our Story</p>
                            <h2 className="text-4xl font-black text-white tracking-tight mb-8">Built to deliver, driven by impact</h2>
                            <div className="space-y-5 text-[#B0B8C1] leading-relaxed">
                                <p>Nexitura was founded on a simple but powerful idea: that small and growing businesses deserve enterprise-grade digital products — without the enterprise-grade price tag or bureaucracy.</p>
                                <p>We saw a market full of generic templates, bloated agencies, and disconnected freelancers. We built something different — a tightly integrated studio where strategy, design, and engineering live under one roof, working in concert to deliver results that actually move the needle.</p>
                                <p>From day one, we've been technology-first and client-obsessed. Every solution we build is underpinned by clean code, scalable architecture, and a relentless focus on the end user. Whether it's a brand-new web platform, a cross-platform app, or an AI pipeline that saves your team hundreds of hours a month — we care about the outcome as much as you do.</p>
                                <p className="font-semibold text-white border-l-4 border-[#00E5FF] pl-4 italic">
                                    "We don't just build digital products. We build the backbone that scales your business."
                                </p>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
                            <div className="relative">
                                {/* Decorative card */}
                                <div className="absolute -top-4 -right-4 w-full h-full bg-[#00E5FF] opacity-10 rounded-3xl rotate-2" />
                                <div className="relative bg-gradient-to-br from-[#0A1128] to-[#070B19] rounded-3xl p-10 border border-white/10 overflow-hidden hovercraft-card">
                                    <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]" />
                                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#00E5FF] opacity-10 rounded-full blur-2xl" />
                                    <div className="relative z-10 space-y-6">
                                        {[
                                            { icon: CheckCircle2, label: "End-to-end delivery" },
                                            { icon: Zap, label: "Agile & transparent workflow" },
                                            { icon: Shield, label: "Security-first architecture" },
                                            { icon: Target, label: "Outcome-focused consulting" },
                                        ].map(({ icon: Icon, label }) => (
                                            <div key={label} className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-[rgba(0,229,255,0.1)] rounded-xl flex items-center justify-center shrink-0">
                                                    <Icon className="text-[#00E5FF]" size={20} />
                                                </div>
                                                <span className="text-white font-semibold">{label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Differentiators ──────────────────────────── */}
            <section className="bg-[#070B19] py-28 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                        <p className="text-[#00E5FF] font-bold text-sm tracking-widest uppercase mb-3">Why Nexitura</p>
                        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">What Makes Us Different</h2>
                        <div className="mt-4 h-1 w-16 bg-[#00E5FF] mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {DIFFERENTIATORS.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                                className="hovercraft-card p-8 group relative overflow-hidden flex flex-col"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[rgba(0,229,255,0.03)] group-hover:bg-[rgba(0,229,255,0.06)] transition-all duration-500 -translate-x-8 -translate-y-8" />
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon className={item.color} size={24} />
                                </div>
                                <h3 className="text-lg font-black text-white mb-2">{item.title}</h3>
                                <p className="text-[#B0B8C1] text-sm leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Meet the Team ─────────────────────────────── */}
            <section className="bg-[#0A1128] py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-dot-pattern opacity-[0.06]" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                        <p className="text-[#00E5FF] font-bold text-sm tracking-widest uppercase mb-3">The People</p>
                        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">Meet the Team</h2>
                        <p className="text-[#B0B8C1] max-w-xl mx-auto">The digital architects, designers, and engineers behind Nexitura.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {TEAM_PLACEHOLDERS.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="hovercraft-card flex flex-col group overflow-hidden"
                            >
                                <div className={`h-40 bg-gradient-to-br ${member.color} flex items-center justify-center relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-noise opacity-30" />
                                    <span className="text-4xl font-black text-white/80 relative z-10">{member.initials}</span>
                                    <span className="absolute bottom-0 right-0 text-6xl font-black text-white/5 leading-none">NX</span>
                                </div>
                                <div className="p-6 text-center flex-grow flex flex-col">
                                    <p className="text-sm text-[#00E5FF] font-bold uppercase tracking-widest mb-1">{member.name}</p>
                                    <p className="text-white font-bold">{member.role}</p>
                                    <div className="mt-auto pt-4">
                                        {member.linkedin ? (
                                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="block w-full py-2 text-xs font-bold text-[#B0B8C1] border border-white/10 rounded-lg hover:border-[#00E5FF]/50 hover:text-[#00E5FF] transition-all">
                                                LinkedIn
                                            </a>
                                        ) : (
                                            <button disabled className="block w-full py-2 text-xs font-bold text-gray-500 border border-white/10 rounded-lg hover:border-[#00E5FF]/50 transition-all opacity-50 cursor-not-allowed">
                                                LinkedIn (Pending)
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

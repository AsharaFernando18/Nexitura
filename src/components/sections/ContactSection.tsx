"use client";

import { useState } from "react";
import { Mail, MapPin, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

const CONTACT_INFO = [
    { icon: Mail, label: "Email Us", value: "nexitura@gmail.com", link: "mailto:nexitura@gmail.com" },
    { icon: MapPin, label: "Location", value: "Worldwide — Remote-First Studio", link: null },
    { icon: Clock, label: "Response Time", value: "Within 24 hours, guaranteed", link: null },
];

export default function ContactSection() {
    const [formState, setFormState] = useState({ name: "", email: "", company: "", service: "", budget: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div id="contact" className="flex flex-col w-full bg-[#070B19] pt-28">

            <div className="text-center px-4 sm:px-6 lg:px-8 mb-4">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                    className="inline-flex items-center gap-2 bg-[rgba(0,229,255,0.1)] border border-[rgba(0,229,255,0.25)] text-[#00E5FF] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
                    <span className="w-1.5 h-1.5 bg-[#00E5FF] rounded-full animate-pulse" />
                    Let's Talk
                </motion.div>
                <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl sm:text-5xl lg:text-5xl font-black text-white tracking-tight mb-6 mt-0 drop-shadow-xl">
                    Start Your <span className="gradient-text">Project</span>
                </motion.h2>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}
                    className="text-base text-[#B0B8C1] max-w-xl mx-auto drop-shadow-lg font-medium">
                    Tell us what you're building. We'll get back to you within 24 hours with a free consultation.
                </motion.p>
            </div>

            {/* ── Contact Body ──────────────────────────────── */}
            <section className="py-16 px-4 relative z-10 pb-28">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">

                    {/* Left: Info Cards */}
                    <div className="lg:col-span-2 space-y-5">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-8">
                            <h2 className="text-2xl font-black text-white mb-2">We'd love to hear from you</h2>
                            <p className="text-[#B0B8C1] text-sm leading-relaxed">Whether you have a brief ready or just an idea — we're happy to explore it with you. No commitment required.</p>
                        </motion.div>

                        {CONTACT_INFO.map((info, i) => (
                            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                className="flex items-start gap-4 hovercraft-card p-5 rounded-2xl border border-white/5 hover:border-[#00E5FF]/30 hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all duration-300 group">
                                <div className="w-11 h-11 bg-[rgba(0,229,255,0.1)] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[rgba(0,229,255,0.2)] transition-colors duration-300 border border-[rgba(0,229,255,0.1)]">
                                    <info.icon className="text-[#00E5FF]" size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-[#B0B8C1] uppercase tracking-widest mb-1">{info.label}</p>
                                    {info.link ? (
                                        <a href={info.link} className="text-white font-bold text-sm hover:text-[#00E5FF] transition-colors">{info.value}</a>
                                    ) : (
                                        <p className="text-white font-bold text-sm">{info.value}</p>
                                    )}
                                </div>
                            </motion.div>
                        ))}

                        {/* Decorative card */}
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                            className="relative bg-gradient-to-br from-[rgba(0,229,255,0.08)] to-[rgba(7,11,25,0.8)] rounded-2xl p-7 overflow-hidden border border-[rgba(0,229,255,0.2)] mt-4 shadow-[0_0_15px_rgba(0,229,255,0.1)]">
                            <div className="absolute inset-0 bg-noise opacity-30" />
                            <div className="absolute bottom-0 right-0 w-28 h-28 bg-[#00E5FF] opacity-10 rounded-full blur-2xl" />
                            <p className="relative text-[#B0B8C1] text-sm font-semibold leading-relaxed italic">
                                "Every great product starts with an honest conversation. Let's have ours."
                            </p>
                            <p className="relative text-[#00E5FF] text-xs font-black mt-3 uppercase tracking-widest">— The Nexitura Team</p>
                        </motion.div>
                    </div>

                    {/* Right: Form */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-3">
                        <div className="glass-dark rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/5 hover:border-white/10 p-8 md:p-10 relative overflow-hidden transition-colors">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-[rgba(0,229,255,0.04)] rounded-full blur-3xl" />

                            {submitted ? (
                                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-16 text-center z-10 relative">
                                    <div className="w-20 h-20 rounded-full bg-[rgba(0,229,255,0.15)] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                                        <Send className="text-[#00E5FF]" size={32} />
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-3">Message Sent!</h3>
                                    <p className="text-[#B0B8C1] max-w-sm">Thanks for reaching out. We'll be in touch within 24 hours.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs font-black text-[#B0B8C1] uppercase tracking-widest mb-2">Your Name *</label>
                                            <input required type="text" value={formState.name} onChange={e => setFormState({ ...formState, name: e.target.value })}
                                                className="w-full p-4 bg-[#0A1128] border border-white/10 rounded-xl text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#00E5FF] focus:border-transparent transition-all placeholder:text-gray-600"
                                                placeholder="John Smith" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-black text-[#B0B8C1] uppercase tracking-widest mb-2">Email Address *</label>
                                            <input required type="email" value={formState.email} onChange={e => setFormState({ ...formState, email: e.target.value })}
                                                className="w-full p-4 bg-[#0A1128] border border-white/10 rounded-xl text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#00E5FF] focus:border-transparent transition-all placeholder:text-gray-600"
                                                placeholder="john@company.com" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-black text-[#B0B8C1] uppercase tracking-widest mb-2">Company / Brand</label>
                                        <input type="text" value={formState.company} onChange={e => setFormState({ ...formState, company: e.target.value })}
                                            className="w-full p-4 bg-[#0A1128] border border-white/10 rounded-xl text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#00E5FF] focus:border-transparent transition-all placeholder:text-gray-600"
                                            placeholder="Acme Corp (optional)" />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs font-black text-[#B0B8C1] uppercase tracking-widest mb-2">Service Needed *</label>
                                            <select required value={formState.service} onChange={e => setFormState({ ...formState, service: e.target.value })}
                                                className="w-full p-4 bg-[#0A1128] border border-white/10 rounded-xl text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#00E5FF] focus:border-transparent transition-all">
                                                <option className="text-[#070B19]" value="">Select a service</option>
                                                <option className="text-[#070B19]" value="Website Creation">Website Creation</option>
                                                <option className="text-[#070B19]" value="App Development">App Development</option>
                                                <option className="text-[#070B19]" value="AI Automation">AI Automation</option>
                                                <option className="text-[#070B19]" value="Graphic Design">Graphic Design</option>
                                                <option className="text-[#070B19]" value="Social Media Management">Social Media Management</option>
                                                <option className="text-[#070B19]" value="System Development">System Development</option>
                                                <option className="text-[#070B19]" value="Multiple">Multiple / Not sure</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-black text-[#B0B8C1] uppercase tracking-widest mb-2">Budget Range</label>
                                            <select value={formState.budget} onChange={e => setFormState({ ...formState, budget: e.target.value })}
                                                className="w-full p-4 bg-[#0A1128] border border-white/10 rounded-xl text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#00E5FF] focus:border-transparent transition-all">
                                                <option className="text-[#070B19]" value="">Select range</option>
                                                <option className="text-[#070B19]" value="Under RM 3,000">Under RM 3,000</option>
                                                <option className="text-[#070B19]" value="RM 3,000 – RM 7,000">RM 3,000 – RM 7,000</option>
                                                <option className="text-[#070B19]" value="RM 7,000 – RM 15,000">RM 7,000 – RM 15,000</option>
                                                <option className="text-[#070B19]" value="RM 15,000+">RM 15,000+</option>
                                                <option className="text-[#070B19]" value="Not sure yet">Not sure yet</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-black text-[#B0B8C1] uppercase tracking-widest mb-2">Tell Us About Your Project *</label>
                                        <textarea required rows={5} value={formState.message} onChange={e => setFormState({ ...formState, message: e.target.value })}
                                            className="w-full p-4 bg-[#0A1128] border border-white/10 rounded-xl text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#00E5FF] focus:border-transparent transition-all resize-none placeholder:text-gray-600"
                                            placeholder="Describe what you're building, your goals, and any key deadlines..."></textarea>
                                    </div>

                                    <button type="submit"
                                        className="w-full btn-primary py-4 text-base flex items-center justify-center gap-2 group rounded-xl shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                                        <Send size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        Send Message
                                    </button>
                                    <p className="text-center text-xs text-[#B0B8C1]">We'll respond within 24 hours — usually much sooner.</p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

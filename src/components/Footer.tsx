import Link from "next/link";
import Image from "next/image";
import { Linkedin, Github, Twitter, Mail, MapPin, ArrowUpRight } from "lucide-react";

const QUICK_LINKS = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
];

const SERVICES_LINKS = [
    { name: "Website Creation", href: "/services" },
    { name: "App Development", href: "/services" },
    { name: "AI Automation", href: "/services" },
    { name: "Graphic Design", href: "/services" },
    { name: "Social Media", href: "/services" },
    { name: "System Dev", href: "/services" },
];

export default function Footer() {
    return (
        <footer className="bg-[#070B19] text-white relative overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] pointer-events-none" />
            {/* Top cyan accent line */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent opacity-40" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <Link href="/" className="inline-block mb-6 group">
                            <div className="relative w-48 h-12 overflow-hidden flex items-center transition-opacity duration-300 group-hover:opacity-80">
                                <Image
                                    src="/logo.png"
                                    alt="Nexitura Logo"
                                    fill
                                    className="object-cover object-center brightness-0 invert opacity-90"
                                />
                            </div>
                        </Link>
                        <p className="text-[#B0B8C1] text-sm leading-relaxed mb-6 max-w-sm">
                            Building the digital backbone of tomorrow's business. We craft web, mobile & AI-driven solutions that convert.
                        </p>
                        <div className="flex space-x-3">
                            {[
                                { icon: Linkedin, label: "LinkedIn" },
                                { icon: Twitter, label: "Twitter" },
                                { icon: Github, label: "GitHub" },
                            ].map(({ icon: Icon, label }) => (
                                <span
                                    key={label}
                                    title={`${label} (coming soon)`}
                                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00E5FF] hover:border-[#00E5FF]/40 hover:bg-[rgba(0,229,255,0.08)] transition-all duration-300 cursor-pointer"
                                >
                                    <Icon size={18} />
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h3 className="text-xs font-bold text-[#00E5FF] uppercase tracking-widest mb-5">Pages</h3>
                        <ul className="space-y-3">
                            {QUICK_LINKS.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-[#B0B8C1] text-sm hover:text-white transition-colors duration-200 hover:translate-x-1 inline-flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 overflow-hidden transition-all duration-200 text-[#00E5FF] mr-0 group-hover:mr-1">›</span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-2">
                        <h3 className="text-xs font-bold text-[#00E5FF] uppercase tracking-widest mb-5">Services</h3>
                        <ul className="space-y-3">
                            {SERVICES_LINKS.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-[#B0B8C1] text-sm hover:text-white transition-colors duration-200 hover:translate-x-1 inline-flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 overflow-hidden transition-all duration-200 text-[#00E5FF] mr-0 group-hover:mr-1">›</span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact + CTA */}
                    <div className="lg:col-span-4">
                        <h3 className="text-xs font-bold text-[#00E5FF] uppercase tracking-widest mb-5">Get In Touch</h3>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center text-sm text-[#B0B8C1]">
                                <Mail size={15} className="text-[#00E5FF] mr-3 shrink-0" />
                                <a href="mailto:nexitura@gmail.com" className="hover:text-white transition-colors">nexitura@gmail.com</a>
                            </li>
                            <li className="flex items-center text-sm text-[#B0B8C1]">
                                <MapPin size={15} className="text-[#00E5FF] mr-3 shrink-0" />
                                Worldwide — Remote-First Studio
                            </li>
                        </ul>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-[#00E5FF] text-[#070B19] font-bold px-6 py-3 rounded-lg text-sm
                            hover:shadow-[0_0_24px_rgba(0,229,255,0.5)] hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Start a Project
                            <ArrowUpRight size={16} />
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Nexitura. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span className="hover:text-gray-300 cursor-pointer transition-colors">Privacy Policy <span className="text-[#00E5FF]/60">(Pending)</span></span>
                        <span className="hover:text-gray-300 cursor-pointer transition-colors">Terms of Service <span className="text-[#00E5FF]/60">(Pending)</span></span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

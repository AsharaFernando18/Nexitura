"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticWrapper from "./MagneticWrapper";

const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => { setIsOpen(false); }, [pathname]);

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
                ? "glass-nav py-0 shadow-lg"
                : "bg-transparent py-1"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group">
                        <div className="relative w-48 md:w-64 h-12 md:h-16 overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src="/logo.png"
                                alt="Nexitura Logo"
                                fill
                                className={`object-cover object-center transition-all duration-300 ${!scrolled ? "brightness-0 invert opacity-90" : ""}`}
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-2">
                        {NAV_LINKS.map((link) => {
                            const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="relative px-2 py-2 text-sm font-semibold group"
                                >
                                    <span className={`relative z-10 transition-colors duration-200 ${isActive
                                        ? "text-[#00C8E0]"
                                        : scrolled ? "text-[#1A1A2E] group-hover:text-[#00C8E0]" : "text-white/90 group-hover:text-white"
                                        }`}>
                                        {link.name}
                                    </span>
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-underline"
                                            className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#00C8E0] rounded-full"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                        <MagneticWrapper>
                            <Link
                                href="/contact"
                                className="ml-4 relative overflow-hidden bg-[#00C8E0] text-[#1E2D6E] px-6 py-2.5 rounded-lg font-bold text-sm shadow-md
                                hover:shadow-[0_0_20px_rgba(0,200,224,0.5)] transition-all duration-300 hover:-translate-y-0.5 group block"
                            >
                                <span className="relative z-10">Contact</span>
                                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                            </Link>
                        </MagneticWrapper>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`${scrolled ? "text-[#1A1A2E]" : "text-white/90"} hover:text-[#00C8E0] focus:outline-none transition-colors p-1`}
                            aria-label="Toggle menu"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {isOpen ? (
                                    <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                        <X size={28} />
                                    </motion.span>
                                ) : (
                                    <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                        <Menu size={28} />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden"
                    >
                        <div className="glass-nav border-t border-[rgba(0,200,224,0.15)] px-4 pt-4 pb-6 space-y-1 flex flex-col">
                            {NAV_LINKS.map((link, i) => {
                                const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
                                return (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`flex items-center px-4 py-3 rounded-xl text-base font-semibold transition-all ${isActive
                                                ? "text-[#00C8E0] bg-[rgba(0,200,224,0.08)]"
                                                : "text-[#1A1A2E] hover:bg-gray-50 hover:text-[#00C8E0]"
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: NAV_LINKS.length * 0.05 }} className="pt-2">
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="block text-center bg-[#00C8E0] text-[#1E2D6E] px-4 py-3 rounded-xl font-bold text-base shadow-md hover:shadow-[0_0_20px_rgba(0,200,224,0.4)] transition-all"
                                >
                                    Contact
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}

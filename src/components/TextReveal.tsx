"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
}

export default function TextReveal({ children, className = "", delay = 0 }: TextRevealProps) {
    // Split text into words for stagger effect
    const words = children.split(" ");

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: delay,
            },
        },
    };

    const wordVariants: Variants = {
        hidden: {
            y: "150%",
            rotate: 5,
            opacity: 0,
        },
        show: {
            y: "0%",
            rotate: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-wrap ${className}`}
        >
            {words.map((word, i) => (
                <div key={i} className="overflow-hidden pb-2 mr-[-0.2em] pr-[0.3em]">
                    <motion.span
                        variants={wordVariants}
                        className="inline-block origin-bottom-left"
                    >
                        {word}
                    </motion.span>
                </div>
            ))}
        </motion.div>
    );
}

// Helper component for simple line reveals
export function LineReveal({ children, className = "", delay = 0 }: { children: ReactNode, className?: string, delay?: number }) {
    return (
        <div className={`overflow-hidden ${className}`}>
            <motion.div
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full pb-2"
            >
                {children}
            </motion.div>
        </div>
    );
}

"use client";

import { ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticWrapper({
    children,
    className = ""
}: {
    children: ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const boundingRect = ref.current?.getBoundingClientRect();

        if (boundingRect) {
            const { width, height, top, left } = boundingRect;
            // Calculate distance from center of element to mouse
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);

            // Apply a dampener (e.g. move by 15% of distance)
            setPosition({ x: x * 0.15, y: y * 0.15 });
        }
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={`magnetic-interactive inline-block ${className}`}
        >
            {children}
        </motion.div>
    );
}

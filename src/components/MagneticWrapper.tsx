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
    const [position, setPosition] = useState({ x: 0, y: 0, rotateX: 0, rotateY: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const boundingRect = ref.current?.getBoundingClientRect();

        if (boundingRect) {
            const { width, height, top, left } = boundingRect;
            // Calculate distance from center of element to mouse
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);

            setPosition({
                x: x * 0.2,
                y: y * 0.2,
                rotateX: (y / height) * -15,
                rotateY: (x / width) * 15
            });
        }
    };

    const reset = () => {
        setPosition({ x: 0, y: 0, rotateX: 0, rotateY: 0 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y, rotateX: position.rotateX, rotateY: position.rotateY }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
            className={`magnetic-interactive inline-block ${className}`}
        >
            {children}
        </motion.div>
    );
}

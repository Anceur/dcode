import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function MagneticHover({ text }: { text: string }) {

    const ref = useRef<HTMLDivElement | null>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const { x, y } = position;

    const mouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { clientX, clientY } = e;
        if (ref.current) {
            const { width, height, left, top } = ref.current.getBoundingClientRect();
            const x = (clientX - (left + width / 2)) * 1.5;
            const y = (clientY - (top + height / 2)) * 1.5;
            setPosition({ x, y });
        }
    };

    const mouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            onMouseMove={mouseMove}
            onMouseLeave={mouseLeave}
            ref={ref}
            style={{ display: 'inline-block', position: 'relative' }}
            animate={{ x, y }}
            transition={{ type: 'spring', stiffness: 150, mass: 0.1, damping: 20 }}
        >
            <a href="">

                {text}
            </a>
        </motion.div>
    );
}

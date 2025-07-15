import React, { useEffect, useState } from 'react';
import { useScroll, useTransform, motion, useMotionValueEvent } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const ScrollButton = () => {
    const { scrollYProgress, scrollY } = useScroll();
    const [isVisible, setIsVisible] = useState(false);


    const circumference = 2 * Math.PI * 20;

    const strokeDashoffset = useTransform(scrollYProgress, [0, 1], [circumference, 0]);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest >= 200) {
            setIsVisible(true)
        }
        else {
            setIsVisible(false)
        }
    })

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };



    return (
        <motion.div
            className="fixed bottom-5 right-20 z-50 cursor-pointer"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
            transition={{ duration: 0.3 }}
        >
            <svg className="h-12 w-12" viewBox="0 0 48 48">
                <circle
                    cx="24"
                    cy="24"
                    r="20"
                    strokeWidth="2"
                    fill="none"
                    style={{ opacity: 0.3 }}
                />
                <motion.circle
                    cx="24"
                    cy="24"
                    r="20"
                    stroke="#ccc"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    style={{
                        rotate: '-90deg',
                        transformOrigin: '50% 50%',
                        opacity: 0.7
                    }}
                />
            </svg>
            <div className="absolute top-2 left-2 right-2 bottom-2 flex items-center justify-center">
                <ChevronUp className="text-white/50 text-xl" />
            </div>
        </motion.div>
    );
};

export default ScrollButton;

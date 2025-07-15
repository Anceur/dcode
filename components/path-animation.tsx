import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const PathAnimation = () => {
    const controls = useAnimation();

    useEffect(() => {
        const startAnimation = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Adjust delay duration as needed
            await controls.start({
                d: "M 0 100 V 50 Q 50 0 100 50 V 100 z",
                transition: { duration: 0.8, ease: "easeInOut" },
            });
            await controls.start({
                d: "M 0 100 V 0 Q 50 0 100 0 V 100 z",
                transition: { duration: 0.4, ease: "easeInOut" },
            });
        };
        startAnimation();
    }, [controls]);

    return (
        <div className="wrapper flex justify-center items-center min-h-screen bg-gray-900 relative">
            <svg className="transition absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path
                    className="path"
                    stroke="#000"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                    animate={controls}
                    initial={{ d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" }}
                />
            </svg>
            <div className="relative z-10">
                <p className="text-white text-6xl">hello there</p>
            </div>
        </div>
    );
};

export default PathAnimation;

'use client'
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const loadingContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const loadingText = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 0,
        transition: {
            duration: 1,
            repeat: Infinity,
            repeatType: 'reverse',
        },
    },
    exit: {
        y: -200,
        opacity: 0,
        transition: {
            duration: 1,
        },
    },
};

export const LoadingSkeleton = () => {
    const [show, setShow] = useState(true);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex h-screen justify-center items-center bg-[#030712]">
            <motion.div
                className="flex"
                variants={loadingContainer}
                initial="hidden"
                animate={show ? 'visible' : 'exit'}
            >
                {['L', 'O', 'A', 'D', 'I', 'N', 'G'].map((letter, index) => (
                    <motion.span 
                        key={index} 
                        variants={loadingText}
                        className="text-xl tracking-[30px] font-extralight text-white/80"
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.div>
        </div>
    );
};
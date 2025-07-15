'use client'
import { motion, useAnimation } from 'framer-motion';
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
        y: -200, // Move up by 20px
        opacity: 0,
        transition: {
            duration: 1,
        },
    },
};

export const LoadingSkeleton = () => {
    const [show, setShow] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false)
        }, 1500)

        return () => clearTimeout(timer)

    }, [])
    return (
        <div className="flex h-screen justify-center items-center">
            <motion.div
                className="flex"
                variants={loadingContainer}
                initial="hidden"
                animate={show ? 'visible' : 'exit'}
            >
                {['L', 'O', 'A', 'D', 'I', 'N', 'G'].map((letter, index) => (
                    <motion.span className='text-xl tracking-[30px] font-extralight' key={index} variants={loadingText}>
                        {letter}
                    </motion.span>
                ))}
            </motion.div>
        </div>
    );
};

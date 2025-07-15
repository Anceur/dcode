'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { LucideMenu, LucideSearch } from 'lucide-react';
import Link from 'next/link';
import { RevealLinks } from './reveal-links';

const loadingContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delay: 2.3,
        },
    },
};

const Navbar = () => {
    const [isFixed, setIsFixed] = useState(false);
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='relative w-full'>
            <motion.div
                className={`w-full flex justify-between lg:justify-around items-center h-14 lg:h-20  px-10 border-b border-white/5 left-0 z-50 fixed ${isFixed ? 'bg-[#1d1d1d] -top-20 translate-y-20 duration-1000 transform transition-transform' : 'bg-transparent top-0'
                    }`}
                variants={loadingContainer}
                initial="hidden"
                animate="visible"
            >
                <p className='text-xl font-bold'>Portfolio</p>
                {/* change here to mobile */}
                <RevealLinks open={open} isFixed={isFixed} />
                <div className='hidden lg:flex h-full gap-5 items-center overflow-hidden'>
                    <div className='py-8 px-8 border-x border-white/20'>
                        <LucideSearch size={16} />
                    </div>
                </div>
                <LucideMenu className='block lg:hidden cursor-pointer' onClick={() => setOpen(!open)} />
            </motion.div >
            <motion.div
                className="absolute z-50 h-14 lg:h-20 bg-[#1a1a1a]  w-full   top-0 left-0"
                initial={{ translateY: 0, display: 'none' }}
                animate={{
                    translateY: '-100%', display: 'block', transition: {
                        duration: .5,
                        delay: 2.25,
                    }
                }}
            ></motion.div>
        </div >
    );
};

export default Navbar;

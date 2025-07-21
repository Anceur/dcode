'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { LucideMenu, LucideSearch } from 'lucide-react';
import Link from 'next/link';
import { RevealLinks } from './reveal-links';
import Image from 'next/image';

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
    const [open, setOpen] = useState(false);

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

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (open) {
                const target = event.target as HTMLElement;
                if (!target.closest('.navbar-container')) {
                    setOpen(false);
                }
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [open]);

    return (
        <div className='bg-[#030712] relative w-full'>
            <motion.div
                className={`bg-[#030712] navbar-container w-full flex justify-between lg:justify-around items-center h-14 lg:h-20 px-10 border-b border-white/5 left-0 z-50 fixed ${
                    isFixed ? 'bg-[#030712] -top-20 translate-y-20 duration-1000 transform transition-transform' : 'bg-transparent top-0'
                }`}
                variants={loadingContainer}
                initial="hidden"
                animate="visible"
            >
                <Image
                    src="/logo.png"
                    alt="Portfolio Logo"
                    width={120}
                    height={40}
                    className="object-contain"
                />
                
                <RevealLinks open={open} isFixed={isFixed} />
                
                <Link href="/contact">
                    <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300">
                        Contact
                    </button>
                </Link>

                <LucideMenu 
                    className='block lg:hidden cursor-pointer'
                    onClick={() => setOpen(!open)}
                />
            </motion.div>
            
            <motion.div
                className="absolute z-50 h-14 lg:h-20 bg-[#1a1a1a] w-full top-0 left-0"
                initial={{ translateY: 0, display: 'none' }}
                animate={{
                    translateY: '-100%', 
                    display: 'block', 
                    transition: {
                        duration: .5,
                        delay: 2.25,
                    }
                }}
            />
        </div>
    );
};

export default Navbar;
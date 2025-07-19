
'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { LucideMenu, LucideSearch, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const DURATION = 0.25;
const STAGGER = 0.025;

type FlipLinkProps = {
    children: string;
    href: string;
    hasDropdown?: boolean;
    isOpen?: boolean;
    onToggle?: () => void;
};

type TNavLinks = {
    url: string;
    name: string;
    dropdown?: {
        title: string;
        url: string;
    }[];
};

type RevealLinksProps = {
    open: boolean;
    isFixed: boolean;
};

const navLinks: TNavLinks[] = [
    { 
        url: '#', 
        name: 'SPONSOR',
        dropdown: [
            { title: 'Packs', url: '/sponsor/packs' },
            { title: 'Our Team', url: '/sponsor/team' },
            { title: 'Portfolio', url: '/dev/portfolio' },
            { title: 'Contact Us', url: '/contact' },
        ]
    },
    { 
        url: '#', 
        name: 'DÉVÉLOPPEMNT',
        dropdown: [
             { title: 'Packs', url: '/dev/packs' },
            { title: 'Our Team', url: '/dev/team' },
            { title: 'Portfolio', url: '/dev/portfolio' },
            { title: 'Contact Us', url: '/contact' },
        ]
    },
    { 
        url: '#', 
        name: 'FORMATIONS',
        dropdown: [
            { title: 'Packs', url: '/formation/packs' },
            { title: 'Our Team', url: '/formation/team' },
            { title: 'Portfolio', url: '/formation/portfolio' },
            { title: 'Contact Us', url: '/contact' },
        ]
    },
];

const loadingContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delay: 2.3,
        },
    },
};

const FlipLink = ({ children, href, hasDropdown, isOpen, onToggle }: FlipLinkProps) => {
    const linkVariants = {
        initial: { y: 0 },
        hovered: { y: "-100%" },
    };

    const backVariants = {
        initial: { y: "100%" },
        hovered: { y: 0 },
    };

    const handleClick = (e: React.MouseEvent) => {
        if (hasDropdown) {
            e.preventDefault();
            onToggle?.();
        }
    };

    return (
        <div className="relative">
            <motion.a
                initial="initial"
                whileHover="hovered"
                href={href}
                onClick={handleClick}
                className="relative overflow-hidden flex items-center gap-1 whitespace-nowrap hover:text-primary duration-300 ease-in-out text-sm uppercase font-semibold border-b border-white/10 px-20 lg:p-0 lg:border-none cursor-pointer"
            >
                <div className="pointer-events-none">
                    {children.split("").map((letter, index) => (
                        <motion.span
                            variants={linkVariants}
                            transition={{
                                duration: DURATION,
                                ease: "easeInOut",
                                delay: STAGGER * index,
                            }}
                            className="inline-block pointer-events-none"
                            key={index}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>
                
                <div className="absolute inset-0 pointer-events-none">
                    {children.split("").map((letter, index) => (
                        <motion.span
                            variants={backVariants}
                            transition={{
                                duration: DURATION,
                                ease: "easeInOut",
                                delay: STAGGER * index,
                            }}
                            className="inline-block pointer-events-none"
                            key={index}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>
                
                {hasDropdown && (
                    <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                )}
            </motion.a>
        </div>
    );
};

export const RevealLinks: React.FC<RevealLinksProps> = ({ isFixed, open }) => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleDropdown = (name: string) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    return (
        <ul
            className={clsx('lg:flex gap-4 lg:gap-14 justify-center',
                {
                    'flex-col absolute top-14 left-0 w-full mr-10': open,
                    'hidden': !open && !open,
                    'bg-[#1d1d1d]': isFixed
                }
            )}
        >
            {navLinks.map((navlink, idx) => (
                <li key={idx} className="relative group">
                    <FlipLink
                        href={navlink.url}
                        hasDropdown={!!navlink.dropdown}
                        isOpen={openDropdown === navlink.name}
                        onToggle={() => toggleDropdown(navlink.name)}
                    >
                        {navlink.name}
                    </FlipLink>
                    
                    {/* Desktop Dropdown */}
                    {navlink.dropdown && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ 
                                opacity: openDropdown === navlink.name ? 1 : 0,
                                y: openDropdown === navlink.name ? 0 : 10,
                                display: openDropdown === navlink.name ? 'block' : 'none'
                            }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-64 bg-[#1d1d1d] border border-white/10 rounded-lg shadow-lg py-2 z-50 lg:block hidden"
                        >
                            {navlink.dropdown.map((item, itemIdx) => (
                                <Link
                                    key={itemIdx}
                                    href={item.url}
                                    className="block px-4 py-2 text-sm text-white hover:bg-white/10 hover:text-primary transition-colors duration-200"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </motion.div>
                    )}
                    
                    {/* Mobile Dropdown */}
                    {navlink.dropdown && open && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ 
                                opacity: openDropdown === navlink.name ? 1 : 0,
                                height: openDropdown === navlink.name ? 'auto' : 0
                            }}
                            transition={{ duration: 0.2 }}
                            className="lg:hidden bg-[#2d2d2d] border-t border-white/10 overflow-hidden"
                        >
                            {navlink.dropdown.map((item, itemIdx) => (
                                <Link
                                    key={itemIdx}
                                    href={item.url}
                                    className="block px-8 py-3 text-sm text-white hover:bg-white/10 hover:text-primary transition-colors duration-200 border-b border-white/5 last:border-b-0"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </motion.div>
                    )}
                </li>
            ))}
        </ul>
    );
};
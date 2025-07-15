'use client'
import React from "react";
import { motion, Variants } from "framer-motion";
import clsx from "clsx";

const DURATION = 0.25;
const STAGGER = 0.025;

type FlipLinkProps = {
    children: string;
    href: string;
};

type TNavLinks = {
    url: string
    name: string
}

type RevealLinksProps = {
    open: boolean
    isFixed: boolean
}

const navLinks: TNavLinks[] = [
    { url: '#', name: 'Home' },
    { url: '#', name: 'Pages' },
    { url: '#', name: 'Portfolio' },
    { url: '#', name: 'Blogs' },
    { url: '#', name: 'Shop' },
    { url: '#', name: 'Contact' },
]

const FlipLink = ({ children, href }: FlipLinkProps) => {
    const linkVariants: Variants = {
        initial: { y: 0 },
        hovered: { y: "-100%" },
    };

    const backVariants: Variants = {
        initial: { y: "100%" },
        hovered: { y: 0 },
    };

    return (
        <motion.a
            initial="initial"
            whileHover="hovered"
            href={href}
            className="relative overflow-hidden block whitespace-nowrap hover:text-primary duration-300 ease-in-out text-sm uppercase font-semibold border-b border-white/10 px-20 lg:p-0 lg:border-none"

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
            {/* Background letters */}
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
        </motion.a>
    );
};
export const RevealLinks: React.FC<RevealLinksProps> = ({ isFixed, open }) => {
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

                <FlipLink
                    href={navlink.url}
                    key={idx}
                >
                    {navlink.name}
                </FlipLink>
            ))}
        </ul>
    );
};

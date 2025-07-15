import React from 'react'
import { motion, Variants } from 'framer-motion'

const cardVariants: Variants = {
    offscreen: {
        opacity: 0,
        scale: 0.8,
        y: 30
    },
    onscreen: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            ease: 'easeIn',
            duration: 0.3
        }
    }
};

const TextAnimation = ({ text }: { text: string }) => {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
        >
            <motion.p
                className='text-3xl md:text-4xl lg:text-5xl font-medium text-wrap'
                variants={cardVariants}>{text}</motion.p>
        </motion.div>
    )
}

export default TextAnimation

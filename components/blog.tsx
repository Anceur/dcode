import React from 'react'
import TextAnimation from './text-animation'
import { LucideArrowUpRight, LucideMoveUpRight } from 'lucide-react'
import BlogCard from './blog-card'
import { motion, Variants } from 'framer-motion'
import images from '@/constants/images'

const cardVariants: Variants = {
    offscreen: {
        opacity: 0,
        y: 20
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            ease: 'easeIn',
            duration: .5
        }
    }
};

const Blog = () => {
    return (
        <div className='bg-[#1a1a1a] flex flex-col px-5 sm:px-10 md:px-32 lg:px-20 xl:px-32'>
            <div className='flex flex-col md:flex-row justify-between items-center my-20'>

                <div className='flex flex-col'>
                    <p className='px-6 py-2 border border-white/50 rounded-full w-fit  uppercase text-xs mb-4'>Our Blog</p>
                    <TextAnimation text="Latest News." />
                </div>
                <div className='flex items-center'>
                    <div className='w-14 h-14 bg-white/5 rounded-full -mr-5'></div>
                    <p className='text-sm'>View All Our News</p>
                    <LucideArrowUpRight size={20} />
                </div>
            </div>
            <motion.div className='w-full flex gap-8 flex-col lg:flex-row'
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
            >
                <BlogCard img={images.h1} date='August 6, 2022' title='Free advertising for your online business.' tags={['Marketing', 'Design']} cardVariants={cardVariants} />
                <BlogCard img={images.h4} date='August 6, 2022' title='Business meeting 2023 in San Francisco.' tags={['Marketing', 'Design']} cardVariants={cardVariants} />
            </motion.div>
        </div>
    )
}

export default Blog

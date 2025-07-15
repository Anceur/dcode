import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { motion, Variants } from 'framer-motion'


type BlogCardProps = {
    img: StaticImageData
    date: string
    title: string
    tags: string[]
    cardVariants: Variants
}



const BlogCard = ({ img, date, title, tags, cardVariants }: BlogCardProps) => {
    return (
        <motion.div
            className='w-full lg:w-1/2 flex flex-col md:flex-row mb-48 border border-white/10 px-[15px] md:pl-[15px]  rounded-xl'
            variants={cardVariants}>
            <div className='w-full md:w-[calc(50%-15px)] relative min-h-[300px] mt-10 md:mt-0 p-0 md:pl-[15px]'>

                <div>

                    <Image width={1000} height={1200} alt='blog-image' src={img} className='w-full h-full bottom-auto md:-bottom-[30px] object-cover  object-center relative' />
                </div>
            </div>
            <div className='flex w-full md:w-1/2 items-center md:justify-center my-10 md:my-0'>
                <div className='flex flex-col gap-2 pl-5'>
                    <p className='text-xs text-white/75 uppercase'>{date}</p>
                    <p className='font-medium text-2xl w-full'>{title}</p>

                    <div className='flex gap-1'>
                        <a className='text-xs px-6 py-2 bg-white/5 rounded-md hover:bg-[#c9f31d] hover:text-[#1d1d1d] ease-in duration-150 origin-center'>{tags[0]}</a>
                        <a className='text-xs px-6 py-2 bg-white/5 rounded-md hover:bg-[#c9f31d] hover:text-[#1d1d1d] ease-in duration-150 origin-center'>{tags[1]}</a>
                    </div>
                </div>
            </div>
        </motion.div >
    )
}

export default BlogCard

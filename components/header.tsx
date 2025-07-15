import Image from 'next/image'
import img from '../public/01.png'
import { motion } from 'framer-motion'
import Curve from './curve';
import { LucideStar } from 'lucide-react';


const loadingDiv = {
    hidden: {
        opacity: 0,
        y: '100vh',
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            type: 'easeIn'

        }
    },
};
const loadingText = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 1

        }
    },
};


const Header = () => {
    return (
        <div className='flex flex-col  relative bg-[#1a1a1a] pt-28 px-2  sm:px-28'>
            <div className='opacity-15'>
                <motion.div
                    variants={loadingDiv}
                    initial="hidden"
                    animate='visible'
                    className="absolute z-10 top-0 left-[30%] bottom-0 w-2/5 bg-[url('/dots.png')] bg-repeat"
                ></motion.div>
            </div>
            <motion.div
                variants={loadingText}
                initial="hidden"
                animate="visible"
                className='justify-center z-0 items-center gap-5 flex flex-col pt-20 mb-12'>
                <p className='text-xl md:text-3xl uppercase'>Hello, I'm</p>
                <p className='text-4xl md:text-7xl font-bold'>Cillian Murphy</p>
                <p className='font-light'>UI/UX Designer Based in Mellbourne</p>
            </motion.div>
            <motion.div
                variants={loadingText}
                initial="hidden"
                animate="visible"
                className='flex z-10 justify-around'>
                <div className='hidden lg:flex w-1/4 flex-col flex-none px-4 pt-10'>
                    <div className='flex flex-col gap-5 mb-20'>
                        <p className='text-2xl'>Expertise</p>
                        <p className='text-sm uppercase font-extralight'>front-end & web developer</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center'>
                            <div className='flex'>
                                {[...Array(5)].map((_, idx) => <LucideStar className='fill-white' size={16} key={idx} />)}
                            </div>
                            <p className='text-sm ml-4'>4.9</p>
                        </div>
                        <p className='text-base font-light text-gray-300'>7000+ Clients Reviews</p>
                    </div>
                </div>
                <div className='w-full lg:w-2/5 flex-none'>
                    <div className='w-full h-[480px] sm:h-[520px]'>
                        <Image src={img} alt='headerImg' className='w-full h-full flex-shrink-0 object-cover object-top' />
                    </div>
                </div>
                <div className='hidden lg:flex w-1/4 flex-col flex-none px-4 pt-10'>
                    <div className='flex items-center justify-end text-right mb-20'>
                        <p className='text-sm mr-3 tracking-widest uppercase font-extralight'>years <br />of experience</p>
                        <p className='text-5xl font-bold'>12</p>
                    </div>
                    <div className='flex flex-col items-end justify-center text-right gap-6'>
                        <p className='text-sm font-light uppercase'>Featured Work</p>
                        <p className='text-lg font-medium'>Bayone Framer UI / UX Template</p>
                        <p className='text-sm font-light uppercase underline'>explore</p>
                    </div>
                </div>
            </motion.div>

            <Curve />
        </div>
    )
}

export default Header

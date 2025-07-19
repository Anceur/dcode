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
        <div className='flex flex-col relative bg-[#1a1a1a] pt-28 px-2 sm:px-28'>
            <div className='opacity-15'>
                <motion.div
                    variants={loadingDiv}
                    initial="hidden"
                    animate='visible'
                    className="absolute z-10 top-0 left-[30%] bottom-0 w-2/5 bg-[url('/dots.png')] bg-repeat"
                ></motion.div>
            </div>
            
            {/* Large background text */}
            <motion.div
                variants={loadingText}
                initial="hidden"
                animate="visible"
                className='absolute inset-0 flex items-center justify-center z-0'
            >
                {/* <div className='text-[15vw] md:text-[12vw] lg:text-[10vw] font-bold text-white/5 leading-none tracking-wider'>
                    MORPUR
                </div> */}
            </motion.div>

            <motion.div
                variants={loadingText}
                initial="hidden"
                animate="visible"
                className='justify-center z-20 items-center gap-5 flex flex-col pt-20 mb-12 relative'>
                
                {/* Top label */}
                <div className='flex items-center justify-center mb-2'>
                    <div className='w-8 h-px bg-white/60 mr-4'></div>
                    <p className='text-sm md:text-base text-white/80 uppercase tracking-[0.2em] font-light'>
                        A SOLUTION
                    </p>
                    <div className='w-8 h-px bg-white/60 ml-4'></div>
                </div>

                {/* Main heading */}
                <h1 className='text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight text-center'>
                    A <span className='font-bold'>perfect</span> Place for Your
                    <br />
                    Creative <span className='font-bold'>Brand</span>.
                </h1>
            </motion.div>

            {/* Simple content section */}
            <motion.div
                variants={loadingText}
                initial="hidden"
                animate="visible"
                className='flex z-10 justify-center mb-20'>
                <div className='text-center'>
                    <p className='text-lg text-white/60 mb-8 max-w-2xl mx-auto'>
                        We create digital experiences that inspire and transform your ideas into stunning reality
                    </p>
                   
                </div>
            </motion.div>

            {/* Animated particles */}
            <div className='absolute inset-0 z-5'>
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className='absolute w-1 h-1 bg-white/20 rounded-full'
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0.2, 0.8, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <Curve />
        </div>
    )
}

export default Header
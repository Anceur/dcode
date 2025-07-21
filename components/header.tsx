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
        <div className='flex flex-col relative min-h-screen bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900 pt-28 px-2 sm:px-28 overflow-hidden'>
            
            {/* Animated background elements from SponsorTeam */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-transparent rotate-12 animate-pulse"></div>
                <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-indigo-600/5 via-violet-600/5 to-transparent -rotate-12 animate-pulse delay-700"></div>
            </div>

            {/* Original dots pattern with reduced opacity */}
            <div className='opacity-10 overflow-hidden'>
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
                className='absolute inset-0 flex items-center justify-center z-0 overflow-hidden'
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

                {/* Main heading with gradient text like SponsorTeam */}
                <h1 className='text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-center'>
                    <span className='bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent'>
                        A <span className='font-bold'>perfect</span> Place for Your
                    </span>
                    <br />
                   <span className="bg-gradient-to-r from-[#00C9D7] to-[#00a1b0] bg-clip-text text-transparent font-bold">
                    Creative Brand
                    </span>
                    <span className='text-white'>.</span>
                </h1>
            </motion.div>

            {/* Simple content section */}
            <motion.div
                variants={loadingText}
                initial="hidden"
                animate="visible"
                className='flex z-10 justify-center mb-20'>
                <div className='text-center'>
                    <p className='text-lg text-gray-300 mb-8 max-w-2xl mx-auto'>
                        We create digital experiences that inspire and transform your ideas into stunning reality
                    </p>
                   
                </div>
            </motion.div>

            {/* Enhanced animated particles with colors - Fixed positioning */}
            <div className='absolute inset-0 z-5 overflow-hidden'>
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-1 h-1 rounded-full ${
                            i % 3 === 0 ? 'bg-blue-400/30' : 
                            i % 3 === 1 ? 'bg-purple-400/30' : 
                            'bg-white/20'
                        }`}
                        style={{
                            left: `${Math.random() * 90 + 5}%`, // محدود بين 5% و 95%
                            top: `${Math.random() * 90 + 5}%`,  // محدود بين 5% و 95%
                        }}
                        animate={{
                            opacity: [0.1, 0.8, 0.1],
                            scale: [0.5, 2, 0.5],
                            y: [0, -20, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Additional floating elements - Fixed positioning */}
            <div className='absolute inset-0 z-5 overflow-hidden'>
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={`glow-${i}`}
                        className='absolute w-32 h-32 rounded-full blur-3xl opacity-20'
                        style={{
                            left: `${Math.random() * 80 + 10}%`, // محدود بين 10% و 90%
                            top: `${Math.random() * 80 + 10}%`,  // محدود بين 10% و 90%
                            background: i % 2 === 0 
                                ? 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)'
                                : 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%)'
                        }}
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                    />
                ))}
            </div>

            <Curve />
        </div>
    )
}

export default Header
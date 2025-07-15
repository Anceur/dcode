import React from 'react'
import TextAnimation from './text-animation'
import Image from 'next/image'
import icon from '../public/icon0.png'
import icon1 from '../public/icon1.png'
import icon2 from '../public/icon2.png'
import Curve from './curve'
const Services = () => {
    return (
        <div className='bg-[#1a1a1a] w-full h-full relative flex justify-center px-5 sm:px-10'>
            <div className='flex sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg w-full py-28 gap-24 flex-col lg:flex-row'>
                <div
                    className='flex flex-col w-full lg:w-[33%] gap-5'>
                    <p className='px-6 py-2 border border-white/50 rounded-full w-fit'>Featured Services</p>
                    <TextAnimation text='Our Services' />
                    <p className='text-[#ddd] text-sm'>Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit, sed quia.</p>

                </div>
                <div className='w-full lg:w-[67%] flex flex-col gap-5'>
                    <div className='w-full flex gap-10 py-10  border-t border-white/20 flex-col md:flex-row'>
                        <div className='w-[16%]'>
                            <div className='w-14'>
                                <Image src={icon} alt='icon' className='w-full h-full object-contain' />
                            </div>
                        </div>
                        <div className='w-full flex justify-between flex-col md:flex-row'>
                            <div className='w-full md:w-[20%]'>
                                <p className='text-xl font-medium'>Digital Product Design</p>
                            </div>
                            <div className='w-full md:w-[50%]'>
                                <p className='text-[#ddd]'>Creating a higher spacing and how people move through a unique.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex gap-10 py-10  border-t border-white/20 flex-col md:flex-row'>
                        <div className='w-[16%]'>
                            <div className='w-14'>
                                <Image src={icon1} alt='icon' className='w-full h-full object-contain' />
                            </div>
                        </div>
                        <div className='w-full flex justify-between flex-col md:flex-row'>

                            <div className='w-full md:w-[20%]'>
                                <p className='text-xl font-medium'>Branding & Design</p>
                            </div>
                            <div className='w-full md:w-[50%]'>
                                <p className='text-[#ddd]'>Creating a higher spacing and how people move through a unique.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex gap-10 py-10  border-t border-white/20 flex-col md:flex-row'>
                        <div className='w-[16%]'>
                            <div className='w-14'>
                                <Image src={icon2} alt='icon' className='w-full h-full object-contain' />
                            </div>
                        </div>
                        <div className='w-full flex justify-between flex-col md:flex-row'>
                            <div className='w-full md:w-[20%]'>
                                <p className='text-xl font-medium'>Web Development</p>
                            </div>
                            <div className='w-full md:w-[50%]'>
                                <p className='text-[#ddd]'>Creating a higher spacing and how people move through a unique.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Curve reverse={true} />
        </div>
    )
}

export default Services

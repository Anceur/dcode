import React, { useState } from 'react'
import TextAnimation from './text-animation'
import Image from 'next/image'
import { LucideArrowUpRight } from 'lucide-react'

const Experience = () => {
    return (
        <div className="bg-[#1d1d1d] py-20 flex px-10  sm:px-28 flex-col lg:flex-row gap-10">
            <div className='w-full lg:w-1/2 flex flex-col justify-between'>
                <div className='mb-20'>
                    <p className='px-6 py-2 border border-white/50 rounded-full w-fit uppercase text-xs mb-4'>skills & experience</p>
                    <TextAnimation text='My Experience' />
                </div>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                    <div className='flex flex-col w-full items-center border border-white/10 rounded-[100px] py-12 px-2 duration-500 grayscale hover:grayscale-0 hover:border-white transition-all'>
                        <div className='w-[60px] mx-auto'>
                            <Image src='/figma.png' alt='skills' width={60} height={60} className='w-auto object-contain' />
                        </div>
                        <p className='text-sm mt-4 text-center'>Figma</p>
                    </div>
                    <div className='flex flex-col w-full items-center border border-white/10 rounded-[100px] py-12 px-2 duration-500 grayscale hover:grayscale-0 hover:border-white transition-all'>
                        <div className='w-[60px] mx-auto'>
                            <Image src='/wordpress.png' alt='skills' width={60} height={60} className='w-full object-contain' />
                        </div>
                        <p className='text-sm mt-4 text-center'>Wordpress</p>
                    </div>
                    <div className='flex flex-col w-full items-center border border-white/10 rounded-[100px] py-12 px-2 duration-500 grayscale hover:grayscale-0 hover:border-white transition-all'>
                        <div className='w-[60px] mx-auto'>
                            <Image src='/angular.png' alt='skills' width={60} height={60} className='w-full object-contain' />
                        </div>
                        <p className='text-sm mt-4 text-center'>Angular</p>
                    </div>
                    <div className='flex flex-col w-full items-center border border-white/10 rounded-[100px] py-12 px-2 duration-500 grayscale hover:grayscale-0 hover:border-white transition-all'>
                        <div className='w-[60px] mx-auto'>
                            <Image src='/webflow.png' alt='skills' width={60} height={60} className='w-full object-contain' />
                        </div>
                        <p className='text-sm mt-4 text-center'>Webflow</p>
                    </div>
                </div>

            </div>
            <div className='w-full lg:w-1/2 flex flex-col lg:ml-20'>
                <div className='flex justify-between py-8 border-t border-white/20' >
                    <div className='flex flex-col gap-4'>
                        <p className='text-xl font-medium'>Android Studio</p>
                        <p className='text-xs'>Junior Product Designer</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <LucideArrowUpRight />
                        <p className='text-xs'>2014-2015</p>
                    </div>
                </div>
                <div className='flex justify-between py-8 border-t border-white/20' >
                    <div className='flex flex-col gap-4'>
                        <p className='text-xl font-medium'>Android Studio</p>
                        <p className='text-xs'>Junior Product Designer</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <LucideArrowUpRight />
                        <p className='text-xs'>2014-2015</p>
                    </div>
                </div>
                <div className='flex justify-between py-8 border-t border-white/20' >
                    <div className='flex flex-col gap-4'>
                        <p className='text-xl font-medium'>Android Studio</p>
                        <p className='text-xs'>Junior Product Designer</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <LucideArrowUpRight />
                        <p className='text-xs'>2014-2015</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience 

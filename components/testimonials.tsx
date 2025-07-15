'use client'

import React, { useRef } from 'react'
import TextAnimation from './text-animation'

import Slider from './swiper'
import { ArrowLeft, ArrowRight } from 'lucide-react'


const Testimonials = ({ }) => {
    const nextRef = useRef<HTMLButtonElement>(null)
    const prevRef = useRef<HTMLButtonElement>(null)
    return (
        <div className="bg-[#1a1a1a] py-20 flex px-10 sm:px-20 lg:px-20 xl:px-28 w-full flex-col lg:flex-row gap-20 lg:gap-0">
            <div className='w-full lg:w-1/4 mr-20'>
                <p className='px-6 py-2 border border-white/50 rounded-full w-fit uppercase text-xs mb-4'>
                    What Clients Says?
                </p>
                <TextAnimation text='Testimonials' />
                <div className='flex mt-10'>
                    <button
                        ref={prevRef}
                        className='p-3 border rounded-full border-white/25 mr-10 cursor-pointer hover:bg-white/5'>
                        <ArrowLeft className='text-white/60' />
                    </button>
                    <button
                        ref={nextRef}
                        className='p-3 border rounded-full border-white/25 cursor-pointer hover:bg-white/5'>
                        <ArrowRight className='text-white/60' />
                    </button>
                </div>
            </div>

            <Slider prevRef={prevRef} nextRef={nextRef} />
        </div>
    )
}

export default Testimonials

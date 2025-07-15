'use client'

import { RefObject } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Star, Stars } from 'lucide-react';
import Image from 'next/image';


type TSliderProps = {
    prevRef: RefObject<HTMLButtonElement>;
    nextRef: RefObject<HTMLButtonElement>;
}
const Slider = ({ prevRef, nextRef }: TSliderProps) => {
    return (
        <div className='w-full lg:w-[calc(70%-80px)]'>

            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },
                    1200: {
                        slidesPerView: 2
                    }
                }}
                spaceBetween={30}
                navigation={{
                    nextEl: nextRef.current,
                    prevEl: prevRef.current
                }}
                loop={true}
                modules={[Navigation]}
                className="w-full h-full"
            >
                {[0, 1, 2, 3, 4].map((_, idx) => <SwiperSlide key={idx} className='text-black border border-white/10 rounded-3xl p-10'>
                    <div className='flex flex-col gap-5'>
                        <div className='flex'>
                            <Star fill='yellow' stroke='transparent' size={16} />
                            <Star fill='yellow' stroke='transparent' size={16} />
                            <Star fill='yellow' stroke='transparent' size={16} />
                            <Star fill='yellow' stroke='transparent' size={16} />
                            <Star fill='yellow' stroke='transparent' size={16} />
                        </div>
                        <p className='text-[#ddd] mb-5 leading-7'>I have been hiring people in this space for a number of years
                            and I have never seen this level of professionalism. It really feels like you are
                            working with a team that can get the job done.</p>

                        <div className='flex gap-7'>
                            <div className='rounded-full w-14 h-14 overflow-hidden'>
                                <Image alt='testimonial' width={50} height={50} src={'/user1.jpg'} className='w-full h-full object-cover' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-[#ddd]'>Leonard Heiser</p>
                                <p className='text-white/50 text-sm'>CEO</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                )}
            </Swiper>
        </div >
    )
}

export default Slider

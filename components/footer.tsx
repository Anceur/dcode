import React from 'react'
import TextAnimation from './text-animation'
import MagneticHover from './magnetic-hover'

const Footer = () => {
    return (
        <>
            <footer className='w-full flex flex-col lg:flex-row  px-5 sm:px-10 md:px-32 lg:px-20 xl:px-32 py-20'>
                <div className='w-full lg:w-1/2 pr-0 lg:pr-20 space-y-5'>
                    <p className='px-6 py-2 border border-white/50 rounded-full w-fit  uppercase text-xs mb-4'>Get in Touch</p>
                    <TextAnimation text="Let's make your brand brilliant!" />
                    <p className='text-[#ddd] font-light'>If you would like to work with us or just want to get in touch, we’d love to hear from you!</p>
                    <div className='py-10'>
                        <a className='underline text-3xl font-bold'>+1 840 841 25 69</a>
                    </div>

                    <div className='flex gap-5'>

                        <MagneticHover text='Facebook' />
                        <MagneticHover text='Twitter' />
                        <MagneticHover text='LinkedIn' />
                        <MagneticHover text='Instagram' />
                    </div>
                </div>
                <form className='w-full lg:w-1/2 px-0 lg:px-10 flex flex-col gap-7 mt-20 lg:mt-0'>
                    <div className='flex gap-6 flex-col lg:flex-row'>
                        <input type="text" placeholder='Name' className='bg-transparent w-full border border-white/25 rounded-md  placeholder:text-white/25 placeholder:text-sm p-3 text-sm' />
                        <input type="text" placeholder='Email' className='p-3 w-full bg-transparent border border-white/25 rounded-md  placeholder:text-white/25 placeholder:text-sm text-sm' />
                    </div>


                    <input type="text" placeholder='Subject' className='bg-transparent w-full border border-white/25 rounded-md  placeholder:text-white/25 placeholder:text-sm p-3 text-sm' />
                    <textarea rows={6} className='w-full bg-transparent placeholder:text-white/25 placeholder:text-sm border border-white/25 rounded-md p-3 text-sm' placeholder='Message'></textarea>

                    <button className='border border/white rounded-full p-3 duration-300 hover:bg-white hover:text-black text-sm'>Let's Talk</button>

                </form>
            </footer >
            <div className='bg-[#1a1a1a] flex lg:flex-row flex-col  justify-between lg:items-center px-5 sm:px-10 md:px-32 lg:px-20 xl:px-32 py-10'>

                <p className='text-xl font-bold'>Portfolio</p>
                <p className='text-[#ddd] text-sm'>© 2024 Portfolio.</p>

            </div>
        </>
    )
}

export default Footer

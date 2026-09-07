import React from 'react'

const Footer = () => {
    return (
        <>
            {/* Social Media Section */}
            <div className='bg-[#020617] flex flex-col relative pt-28 px-2 sm:px-28'>
                <div className='flex flex-col items-center space-y-8'>
                    <h3 className='text-2xl font-light text-center'>Follow Us</h3>
                    
                    {/* Social Icons */}
                    <div className='flex gap-8'>
                        {/* Instagram */}
                        <a 
                            href="https://www.instagram.com/dzair.code/" 
                            className='group relative w-14 h-14 border border-white/30 rounded-full flex items-center justify-center hover:border-white/80 transition-all duration-300 hover:scale-110'
                        >
                            <svg className='w-6 h-6 fill-white/70 group-hover:fill-white transition-all duration-300' viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                            <div className='absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                <span className='text-xs text-white/80 whitespace-nowrap'>Instagram</span>
                            </div>
                        </a>

                        {/* Facebook */}
                        <a 
                            href="https://web.facebook.com/profile.php?id=61581083883229" 
                            className='group relative w-14 h-14 border border-white/30 rounded-full flex items-center justify-center hover:border-white/80 transition-all duration-300 hover:scale-110'
                        >
                            <svg className='w-6 h-6 fill-white/70 group-hover:fill-white transition-all duration-300' viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            <div className='absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                <span className='text-xs text-white/80 whitespace-nowrap'>Facebook</span>
                            </div>
                        </a>

                        {/* LinkedIn */}
                                <a 
                            href="https://www.tiktok.com/@dzair.code" 
                            className='group relative w-14 h-14 border border-white/30 rounded-full flex items-center justify-center hover:border-white/80 transition-all duration-300 hover:scale-110'
                        >
                            <svg className='w-6 h-6 fill-white/70 group-hover:fill-white transition-all duration-300' viewBox="0 0 24 24">
                                <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.968-1.166-1.954-1.282-2.646h.004C16.362 1.026 16.36.5 16.359.5h-3.474v14.887c0 .188 0 .376-.008.562-.001.023-.003.045-.005.07-.001.01-.001.02-.002.03a4.283 4.283 0 0 1-2.156 3.404 4.253 4.253 0 0 1-2.104.554c-2.366 0-4.284-1.928-4.284-4.31 0-2.382 1.918-4.31 4.284-4.31.447 0 .878.07 1.283.198V7.987a7.788 7.788 0 0 0-1.283-.107C4.184 7.88.5 11.576.5 16.13.5 20.684 4.184 24.38 8.615 24.38c4.43 0 8.115-3.696 8.115-8.25V9.634a9.63 9.63 0 0 0 5.62 1.805V7.965c-1.09 0-2.11-.34-2.95-.918a5.518 5.518 0 0 1-.079-1.485z"/>
                            </svg>
                            <div className='absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                <span className='text-xs text-white/80 whitespace-nowrap'>TikTok</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className='bg-[#020617]  flex lg:flex-row flex-col justify-between lg:items-center px-5 sm:px-10 md:px-32 lg:px-20 xl:px-32 py-10'>
                <p className='text-xl font-bold text-white'>Dzair Code</p>
                <p className='text-[#ddd] text-sm'>© Dzair Code.</p>
            </div>
        </>
    )
}

export default Footer
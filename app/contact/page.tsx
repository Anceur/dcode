"use client"

import { useState } from 'react'
import { Send } from 'lucide-react'
import Footer from '@/components/footer';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        // Handle form submission here
    };

    return (
        <div className='min-h-screen bg-[#0a0a1a] text-white'>
            {/* Hero Section */}
            <div className='px-4 sm:px-8 lg:px-16 py-20 lg:py-32'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
                        
                        {/* Left Side - Content */}
                        <div className='space-y-8'>
                            <div className='inline-block'>
                                <div className='flex items-center gap-2 mb-6'>
                                    <div className='w-2 h-2 bg-white rounded-full'></div>
                                    <span className='text-sm uppercase tracking-wider text-white/80'>CONTACT US</span>
                                </div>
                            </div>
                            
                            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight'>
                                Let's make<br />
                                your brand <span className='text-white/80'>brilliant!</span>
                            </h1>
                            
                            <p className='text-lg text-white/70 leading-relaxed max-w-md'>
                                We help our clients succeed by creating brand identities, digital experiences, and print materials that communicate clearly, achieve marketing goals, and look fantastic.
                            </p>
                            
                            <div className='flex items-center gap-2 pt-4'>
                                <div className='w-2 h-2 bg-white rounded-full'></div>
                                <div className='w-2 h-2 bg-white/50 rounded-full'></div>
                                <div className='w-2 h-2 bg-white/30 rounded-full'></div>
                            </div>
                        </div>

                        {/* Right Side - Placeholder for visual element */}
                        <div className='hidden lg:block'>
                            <div className='w-full h-96 bg-white/5 rounded-2xl flex items-center justify-center'>
                                <div className='text-white/30 text-6xl'>📧</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className='px-4 sm:px-8 lg:px-16 py-20 bg-[#030712]'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
                        
                        {/* Left Side - Contact Info */}
                        <div className='space-y-8'>
                            <div className='inline-block'>
                                <div className='px-4 py-2 border border-white/20 rounded-full'>
                                    <span className='text-sm uppercase tracking-wider text-white/80'>GET IN TOUCH</span>
                                </div>
                            </div>
                            
                            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight'>
                                Let's get in<br />
                                touch with us.
                            </h2>
                            
                            <p className='text-lg text-white/70 leading-relaxed'>
                                If you would like to work with us or just want to get in touch, we'd love to hear from you!
                            </p>
                            
                            <div className='space-y-6 pt-8'>
                                <div>
                                    <h3 className='text-2xl font-semibold mb-2 underline decoration-white/50'>
                                        +1 840 841 25 69
                                    </h3>
                                </div>
                                
                                <div className='flex flex-wrap gap-6 pt-4'>
                                    <a href='#' className='text-white/70 hover:text-white transition-colors'>Facebook</a>
                                    <a href='#' className='text-white/70 hover:text-white transition-colors'>Twitter</a>
                                    <a href='#' className='text-white/70 hover:text-white transition-colors'>LinkedIn</a>
                                    <a href='#' className='text-white/70 hover:text-white transition-colors'>Instagram</a>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Contact Form */}
                        <div className='space-y-6'>
                            <div className='space-y-6'>
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                    <input
                                        type='text'
                                        name='name'
                                        placeholder='Name'
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className='w-full bg-transparent border border-white/20 rounded-lg py-4 px-4 text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-all duration-300'
                                    />
                                    <input
                                        type='email'
                                        name='email'
                                        placeholder='Email'
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className='w-full bg-transparent border border-white/20 rounded-lg py-4 px-4 text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-all duration-300'
                                    />
                                </div>
                                
                                <input
                                    type='text'
                                    name='subject'
                                    placeholder='Subject'
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className='w-full bg-transparent border border-white/20 rounded-lg py-4 px-4 text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-all duration-300'
                                />
                                
                                <textarea
                                    name='message'
                                    placeholder='Message'
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={8}
                                    className='w-full bg-transparent border border-white/20 rounded-lg py-4 px-4 text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-all duration-300 resize-none'
                                />
                                
                                <div className='flex items-center gap-2 pt-4'>
                                    <div className='w-2 h-2 bg-white rounded-full'></div>
                                </div>
                                
                                <button
                                    type='button'
                                    onClick={handleSubmit}
                                    className='px-8 py-4 border border-white/20 rounded-full text-white hover:bg-white hover:text-[#030712] transition-all duration-300 flex items-center gap-3 group'
                                >
                                    Let's Talk
                                    <Send className='group-hover:translate-x-1 transition-transform duration-300' size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animated Background Elements */}
            <div className='fixed inset-0 pointer-events-none z-0'>
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className='absolute w-1 h-1 bg-white/10 rounded-full animate-pulse'
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 3}s`
                        }}
                    />
                ))}
            </div>
                  {/* Footer */}
      <Footer />
    </div>
    )
}

export default Contact
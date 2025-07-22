import React from 'react'
import { ArrowUpRight, Smartphone, Globe, ExternalLink, Code, Star, Calendar, Users } from 'lucide-react'

const ProjectCard = ({ project, index }) => {
    const isEven = index % 2 === 0;
    
    return (
        <div className={`group relative`}>
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className={`relative flex flex-col lg:flex-row items-center gap-12 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                {/* Project Preview */}
                <div className='flex-1 relative'>
                    <div className='relative group/image overflow-hidden rounded-2xl'>
                        {/* Main Image Container */}
                        <div className='aspect-[4/3] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden'>
                            {project.imageUrl ? (
                                <img 
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-700"
                                />
                            ) : (
                                <div className={`w-full h-full flex items-center justify-center ${
                                    project.type === 'mobile' 
                                        ? 'bg-gradient-to-br from-emerald-500 to-teal-600' 
                                        : 'bg-gradient-to-br from-blue-500 to-purple-600'
                                }`}>
                                    <div className='text-white text-center transform group-hover/image:scale-110 transition-transform duration-300'>
                                        {project.type === 'mobile' ? (
                                            <Smartphone size={64} className='mx-auto mb-4 drop-shadow-lg' />
                                        ) : (
                                            <Globe size={64} className='mx-auto mb-4 drop-shadow-lg' />
                                        )}
                                        <p className='text-lg font-semibold opacity-90'>{project.title}</p>
                                    </div>
                                </div>
                            )}
                            
                            {/* Interactive Overlay */}
                            <div className='absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-all duration-300 flex items-center justify-center'>
                                <div className='transform translate-y-4 group-hover/image:translate-y-0 transition-transform duration-300 text-center'>
                                    <div className='bg-white/20 backdrop-blur-md rounded-2xl px-6 py-4 hover:bg-white/30 transition-all duration-200 hover:scale-105 shadow-lg'>
                                        <ExternalLink size={24} className='text-white mx-auto mb-2' />
                                        <p className='text-white text-sm opacity-90'>View Project</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                  
                    
                    </div>
                </div>

                {/* Project Details */}
                <div className='flex-1 space-y-8'>
                    {/* Header */}
                    <div>
                        <div className='flex items-center gap-4 mb-4'>
                            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                                project.type === 'mobile' 
                                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                                    : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                            }`}>
                                {project.type === 'mobile' ? 'Mobile App' : 'Web App'}
                            </span>
                            <div className='flex items-center gap-2 text-gray-400'>
                                <Calendar size={16} />
                                <span className='text-sm'>{project.year}</span>
                            </div>
                        </div>
                        
                        <h3 className='text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4'>
                            {project.title}
                        </h3>
                        
                        <p className='text-gray-300 text-lg leading-relaxed'>
                            {project.description}
                        </p>
                    </div>

                    {/* Technologies */}
                    <div className='space-y-4'>
                        <h4 className='text-white font-semibold flex items-center gap-3'>
                            <div className='p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg'>
                                <Code size={18} />
                            </div>
                            Tech Stack
                        </h4>
                        <div className='flex flex-wrap gap-3'>
                            {project.technologies.map((tech, i) => (
                                <span key={i} className='px-4 py-2 bg-white/5 border border-white/10 hover:border-white/20 text-gray-300 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-white/10'>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Features */}
                    <div className='space-y-4'>
                        <h4 className='text-white font-semibold flex items-center gap-3'>
                            <div className='p-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg'>
                                <Users size={18} />
                            </div>
                            Key Features
                        </h4>
                        <div className='grid grid-cols-1 gap-3'>
                            {project.features.map((feature, i) => (
                                <div key={i} className='flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200'>
                                    <div className='w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0' />
                                    <span className='text-gray-300 leading-relaxed'>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action Button */}
                    {project.liveUrl && (
                                                <a 
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='inline-flex items-center gap-3 bg-[#00C9D7] hover:bg-[#00b8c5] text-white px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-300/30 hover:-translate-y-1 font-semibold group/button'
                                >
                                <ExternalLink size={20} className='group-hover/button:rotate-45 transition-transform duration-300' />
                                View Live Project
                                </a>

                    )}
                </div>
            </div>
        </div>
    )
}

const Portfolio = () => {
    const projects = [
        {
            title: 'Good Flower',
            description: 'A multi-platform perfume application that allows users to explore, rate, and save their favorite scents. The app provides a smooth experience with real-time updates and push notifications for the ultimate fragrance discovery journey.',
            type: 'mobile',
            year: '2025',
            imageUrl: '/postgoodflower.png',
            liveUrl: 'https://play.google.com/store/apps/details?id=com.goodflower',
            technologies: ['Ionic', 'Firebase', 'Capacitor', 'Firestore', 'Push Notifications', 'TypeScript'],
            features: [
                'Browse extensive perfume catalog with advanced filtering',
                'Personalized favorites and wishlist system',
                'Community ratings and detailed reviews',
                'Smart push notifications for new releases',
                'Offline-first architecture for seamless experience',
                'Real-time cloud synchronization across devices'
            ]
        },
        {
            title: 'Moudir List',
            description: 'A comprehensive cross-platform e-commerce solution that delivers a premium shopping experience. Built with modern technologies to ensure scalability, security, and exceptional user engagement.',
            type: 'mobile',
            year: '2025',
            imageUrl: '/postmoudirlist.png',
            liveUrl: 'https://play.google.com/store/apps/details?id=com.moudir.list&hl=fr',
            technologies: ['Ionic', 'Firebase', 'Capacitor', 'Firestore', 'Stripe API', 'Angular'],
            features: [
                'Advanced product search with AI-powered recommendations',
                'Secure checkout with multiple payment options',
                'Real-time order tracking and notifications',
                'Comprehensive user profile and order history',
                'Dynamic inventory management system',
                'Multi-language support and localization'
            ]
        },
    ];

    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900'>
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}} />
            </div>
            
            <div className='relative px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-20'>
                {/* Enhanced Header */}
                <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center mb-24 gap-8'>
                    <div className='flex flex-col space-y-6'>
                        <div className='inline-flex items-center gap-3'>
                            <div className='w-2 h-2 bg-blue-500 rounded-full animate-pulse' />
                            <span className='px-6 py-3 border border-white/20 bg-white/5 backdrop-blur-sm rounded-full uppercase text-sm font-semibold text-gray-300 tracking-wider'>
                                Portfolio
                            </span>
                        </div>
                        
                        <h1 className='text-6xl md:text-7xl lg:text-8xl font-bold'>
                            <span className='bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent'>
                                Our Work
                            </span>
                            <span className='text-blue-500'>.</span>
                        </h1>
                        
                        <p className='text-gray-400 text-xl max-w-2xl leading-relaxed'>
                            Crafting digital experiences that blend innovation with exceptional user design. 
                            Each project represents our commitment to pushing boundaries and delivering excellence.
                        </p>
                    </div>
                    
              
                </div>

                {/* Projects Grid */}
                <div className='space-y-16'>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            
            </div>
        </div>
    )
}

export default Portfolio
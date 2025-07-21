import React from 'react'
import TextAnimation from './text-animation'
import { LucideArrowUpRight, LucideSmartphone, LucideGlobe, LucideExternalLink, LucideCode, LucidePlay } from 'lucide-react'
import { motion, Variants } from 'framer-motion'

const cardVariants: Variants = {
    offscreen: {
        opacity: 0,
        y: 20
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            ease: 'easeIn',
            duration: .5
        }
    }
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
    const isEven = index % 2 === 0;
    
    return (
        <motion.div 
            className={`flex flex-col lg:flex-row items-center gap-8 mb-20 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
            variants={cardVariants}
        >
            {/* Project Image/Demo */}
            <div className='flex-1 relative'>
                <div className='relative group'>
                    <div className={`w-full h-80 rounded-2xl overflow-hidden shadow-2xl ${
                        project.type === 'mobile' ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-900 to-purple-900'
                    }`}>
                        {project.type === 'mobile' ? (
                            <div className='flex justify-center items-center h-full'>
                                <div className='w-48 h-72 bg-black rounded-3xl p-2 shadow-xl relative'>
                                    {/* Phone notch */}
                                    <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-5 bg-black rounded-b-lg z-10'></div>
                                    {/* Screen content */}
                                    <div className={`w-full h-full rounded-2xl overflow-hidden ${project.bgColor}`}>
                                        {project.imageUrl ? (
                                            <img 
                                                src={project.imageUrl}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className='w-full h-full flex items-center justify-center'>
                                                <div className='text-white text-center p-4'>
                                                    <LucideSmartphone size={32} className='mx-auto mb-2' />
                                                    <p className='text-xs font-medium'>{project.title}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className='flex items-center justify-center h-full'>
                                <div className='w-full h-64 bg-white/10 rounded-lg flex items-center justify-center'>
                                    <div className='text-white text-center'>
                                        <LucideGlobe size={48} className='mx-auto mb-2' />
                                        <p className='text-sm font-medium'>{project.title}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    {/* Hover overlay */}
                    <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center'>
                        <button className='bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors'>
                            <LucidePlay size={24} className='text-white' />
                        </button>
                    </div>
                </div>
            </div>

            {/* Project Details */}
            <div className='flex-1 space-y-6'>
                <div>
                    <div className='flex items-center gap-3 mb-3'>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            project.type === 'mobile' 
                                ? 'bg-green-500/20 text-green-400' 
                                : 'bg-blue-500/20 text-blue-400'
                        }`}>
                            {project.type === 'mobile' ? 'Mobile App' : 'Website'}
                        </span>
                        <span className='text-gray-400 text-sm'>{project.year}</span>
                    </div>
                    <h3 className='text-3xl font-bold text-white mb-3'>{project.title}</h3>
                    <p className='text-gray-300 text-lg leading-relaxed'>{project.description}</p>
                </div>

                {/* Technologies */}
                <div>
                    <h4 className='text-white font-medium mb-3 flex items-center gap-2'>
                        <LucideCode size={18} />
                        Technologies Used
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                        {project.technologies.map((tech: string, i: number) => (
                            <span key={i} className='px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm'>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Features */}
                <div>
                    <h4 className='text-white font-medium mb-3'>Key Features</h4>
                    <ul className='space-y-2'>
                        {project.features.map((feature: string, i: number) => (
                            <li key={i} className='text-gray-300 flex items-start gap-2'>
                                <span className='w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0'></span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Action buttons */}
                <div className='flex gap-4 pt-4'>
             <button className='flex items-center gap-2 bg-[#00C9D7] hover:bg-[#00b0be] text-white px-6 py-3 rounded-full transition-colors'>
                <LucideExternalLink size={18} />
                Live Preview
                </button>

                
                </div>
            </div>
        </motion.div>
    )
}

const Portfolio = () => {
    const projects = [
        {
            title: 'Good Flower',
            description: 'A multi-platform perfume application that allows users to explore, rate, and save their favorite scents. The app provides a smooth experience with real-time updates and push notifications.',
            type: 'mobile',
            year: '2025',
            bgColor: 'bg-gradient-to-br from-pink-400 to-yellow-300',
            imageUrl: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            technologies: ['Ionic', 'Firebase', 'Capacitor', 'Firestore', 'Push Notifications'],
            features: [
                'Browse a wide variety of perfumes by category or scent',
                'Add perfumes to favorites',
                'Rate and review perfumes',
                'Push notifications for new arrivals and special offers',
                'Modern and user-friendly UI',
                'Firebase integration for authentication and cloud storage'
            ]
        },
        {
            title: 'Moudir List',
            description: 'A cross-platform e-commerce mobile application that allows users to browse, search, and purchase products with a smooth and secure experience powered by Firebase.',
            type: 'mobile',
            year: '2025',
            bgColor: 'bg-gradient-to-br from-indigo-500 to-purple-600',
            imageUrl: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            technologies: ['Ionic', 'Firebase', 'Capacitor', 'Firestore', 'Stripe API'],
            features: [
                'Product browsing with categories and filters',
                'Add to cart and checkout functionality',
                'User authentication and profile management',
                'Order tracking and history',
                'Push notifications for promotions and updates',
                'Firebase backend with real-time database and storage'
            ]
        },
    ];

    return (
        <div className='bg-[#0a0a1a] flex flex-col px-5 sm:px-10 md:px-32 lg:px-20 xl:px-32'>
            {/* Header */}
            <div className='flex flex-col md:flex-row justify-between items-center my-20'>
                <div className='flex flex-col'>
                    <p className='px-6 py-2 border border-white/50 rounded-full w-fit uppercase text-xs mb-4'>Portfolio</p>
                    <TextAnimation text="Our Work." />
                </div>
                <div className='flex items-center cursor-pointer hover:text-orange-500 transition-colors'>
                    <div className='w-14 h-14 bg-white/5 rounded-full -mr-5'></div>
                    <p className='text-sm'>View All Projects</p>
                    <LucideArrowUpRight size={20} />
                </div>
            </div>

            {/* Projects */}
            <motion.div 
                className='space-y-8'
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
            >
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </motion.div>
        </div>
    )
}

export default Portfolio
import { motion } from 'framer-motion';
import { Epilogue, Sora } from 'next/font/google';

const textSlideAnimation = {
    animate: {
        x: ["0%", "-100%"],
        transition: {
            x: {
                duration: 80,
                ease: "linear",
                repeat: Infinity,
            },
        },
    },
};

const sora = Sora({ subsets: ['latin'] });
const epilogue = Epilogue({ subsets: ['latin'] });

const items = [
    "UI-UX Experience",
    "Web Development",
    "Digital Marketing",
    "Product Design",
    "Mobile Solutions",
];

const TextSlide = () => {
    return (
        <div className="flex my-2 overflow-hidden gap-2">
            {[...Array(2)].map((_, index) => (
                <motion.div key={index} className="flex box" {...textSlideAnimation}>
                    {items.map((item, idx) => (
                        <div key={idx} className={`${epilogue.className} flex items-center justify-center ${index === 1 ? 'secondItem' : 'item'}`}>
                            <h4 className='p-20 text-white text-7xl whitespace-nowrap font-semibold'>{item}</h4>
                            <p className={`${sora.className} text-5xl -mb-5 customStroke`}>*</p>
                        </div>
                    ))}
                </motion.div>
            ))}
        </div>
    );
};

export default TextSlide;

import { motion } from 'framer-motion';

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

const items = [
    { text: "UI-UX Experience", color: "from-blue-400 to-cyan-400" },
    { text: "Web Development", color: "from-purple-400 to-indigo-400" },
    { text: "Digital Marketing", color: "from-emerald-400 to-teal-400" },
    { text: "Product Design", color: "from-pink-400 to-rose-400" },
    { text: "Mobile Solutions", color: "from-amber-400 to-orange-400" },
];

const TextSlide = () => {
    return (
        <div className="relative bg-[#030712] overflow-hidden py-10">
            <div className="flex overflow-hidden gap-2">
                {[...Array(2)].map((_, index) => (
                    <motion.div key={index} className="flex" {...textSlideAnimation}>
                        {items.map((item, idx) => (
                            <div key={idx} className="flex items-center justify-center">
                                <h4 
                                    className={`px-16 py-10 text-5xl md:text-7xl whitespace-nowrap font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                                >
                                    {item.text}
                                </h4>
                                <span className="text-4xl md:text-5xl -mb-4 text-slate-300 font-bold">
                                    ✦
                                </span>
                            </div>
                        ))}
                    </motion.div>
                ))}
            </div>

            {/* Static curve at the bottom */}
            <div className="hidden lg:block absolute left-0 w-full h-full -bottom-2">
                <svg 
                    className="absolute left-0 w-full h-[30%] bottom-0" 
                    viewBox="0 0 500 250" 
                    preserveAspectRatio="none"
                >
                    <path 
                        fill="#030712" 
                        d="M250,246.5c-97.85,0-186.344-40.044-250-104.633V250h500V141.867C436.344,206.456,347.85,246.5,250,246.5z"
                    />
                </svg>
            </div>
        </div>
    );
};

export default TextSlide;
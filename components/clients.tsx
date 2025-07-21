'use client';

import clients from '@/constants/images';
import { motion } from 'framer-motion';
import { Epilogue, Sora } from 'next/font/google';
import Image from 'next/image';
import TextAnimation from './text-animation';
import Link from 'next/link';

const textSlideAnimation = {
  animate: {
    x: ['0%', '-100%'],
    transition: {
      x: {
        duration: 80,
        ease: 'linear',
        repeat: Infinity,
      },
    },
  },
};

const sora = Sora({ subsets: ['latin'] });
const epilogue = Epilogue({ subsets: ['latin'] });

const Clients = () => {
  return (
    <div className="bg-[#020617] flex flex-col gap-10">
      <div className="flex items-center flex-col justify-center mt-20">
        <p className="px-6 py-2 border border-white/50 rounded-full w-fit uppercase text-xs mb-4">
          Our Clients
        </p>
        <TextAnimation text="Companies I've Worked With" />
      </div>

      <div className="flex overflow-hidden gap-2 py-60">
        {[...Array(2)].map((_, index) => (
          <motion.div key={index} className="flex" {...textSlideAnimation}>
            {clients.map((client, idx) => (
              <Link
                href={client.url}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                className={`${epilogue.className} border border-white/5 itemImg rounded-full p-2 flex items-center justify-center hover:border-white/50 duration-300 ease-in-out`}
              >
                <div className="w-80 h-80 flex items-center justify-center pointer-events-none">
                  <Image width={120} height={120} alt="client logo" src={client.src} />
                </div>
              </Link>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Clients;

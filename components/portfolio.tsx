import Image from 'next/image'
import Link from 'next/link'


const Portfolio = () => {
    return (
        <div className='bg-[#1a1a1a] w-full grid relative grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-10  px-5 sm:px-10 pb-20'>

            <Link href={''} className='w-full md:col-end-2 lg:col-span-2 lg:row-span-2'>
                <div className='rounded-xl overflow-hidden mb-8 pointer-events-none'>
                    <Image src={'/shoe.jpg'} alt='Portfolio projects' width={800} height={800} className='w-full h-full object-cover' />
                </div>
                <p className='font-light text-sm text-center text-white/70 mb-2 pointer-events-none'>DESIGN ART</p>
                <p className='font-medium text-xl text-center pointer-events-none'>Million Dollar Investment</p>
            </Link>
            <Link href={''} className='w-full'>
                <div className='rounded-xl overflow-hidden mb-8 pointer-events-none'>
                    <Image src={'/lamp.jpg'} alt='Portfolio projects' width={800} height={800} className='w-full h-full object-cover' />
                </div>
                <p className='font-light text-sm text-center text-white/70 mb-2 pointer-events-none'>DESIGN ART</p>
                <p className='font-medium text-xl text-center pointer-events-none'>Character Design</p>
            </Link>
            <Link href={''} className='w-full'>
                <div className='rounded-xl overflow-hidden mb-8 pointer-events-none'>
                    <Image src={'/laptop.jpg'} alt='Portfolio projects' width={800} height={800} className='w-full h-full object-cover' />
                </div>
                <p className='font-light text-sm text-center text-white/70 mb-2 pointer-events-none'>DESIGN ART</p>
                <p className='font-medium text-xl text-center pointer-events-none'>Arch Website Design</p>
            </Link>
            <Link href={''} className='w-ful md:col-end-3  lg:row-span-2 lg:col-span-2'>
                <div className='rounded-xl overflow-hidden mb-8 pointer-events-none'>
                    <Image src={'/paperbag.jpg'} alt='Portfolio projects' width={800} height={800} className='w-full h-full object-cover' />
                </div>
                <p className='font-light text-sm text-center text-white/70 mb-2 pointer-events-none'>DESIGN ART</p>
                <p className='font-medium text-xl text-center pointer-events-none'>Tamu Swahili Food</p>
            </Link>
            <Link href={''} className='relative'>
                <div className='rounded-xl overflow-hidden mb-8 pointer-events-none'>
                    <Image src={'/logo.jpg'} alt='Portfolio projects' width={800} height={800} className='w-full h-full object-cover' />
                </div>
                <p className='font-light text-sm text-center text-white/70 mb-2 pointer-events-none'>DESIGN ART</p>
                <p className='font-medium text-xl text-center pointer-events-none'>Sheno Brand Identity</p>
            </Link>
            <Link href={''} className='relative'>
                <div className='rounded-xl overflow-hidden mb-8 pointer-events-none'>
                    <Image src={'/card.jpg'} alt='Portfolio projects' width={800} height={800} className='w-full h-full object-cover' />
                </div>
                <p className='font-light text-sm text-center text-white/70 mb-2 pointer-events-none'>DESIGN ART</p>
                <p className='font-medium text-xl text-center pointer-events-none'>Digital research</p>
            </Link>
        </div >
    )
}

export default Portfolio

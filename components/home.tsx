import React from 'react'
import Header from './header'
import TextSlide from './text-slide'
import Services from './services'
import Portfolio from './portfolio'
import Experience from './experience-section'
import Testimonials from './testimonials'
import Clients from './clients'
import Blog from './blog'
import Footer from './footer'
import ScrollButton from './scroll-button'
import Cursor from './cursor'



export const Home = () => {
    return (
        <>
            <Header />
            <TextSlide />
            <Services />
            <Portfolio />
            <Experience />
            <Testimonials />
            <Clients />
            <Blog />
            <Footer />
            <ScrollButton />
            <Cursor />
        </>
    )
}


import React from 'react'
import Navbar from './Navbar'
import graphHero from '../images/illustration-mockups.svg'

const Hero = () => {
    const heading = "Build The Community Your Fans Will Love";
    const heroDesc = "Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.";

    return (
        <section className='bg-vpCyan pb-8 md:px-8 md:h-screen md:grid md:place-content-center md:items-center md:relative lg:px-16 md:text-left'>
            <Navbar />

            <div className=' md:flex md:items-center md:justify-between md:gap-4 md:mt-12 lg:gap-16'>
                <div className='w-[90%] mx-auto'>
                    <h1 className='text-4xl leading-[1.6] mt-16 mb-8 font-bold'>{heading}</h1>
                    <p className='font-[500] text-lg'>{heroDesc}</p>
                    <button className='mt-16 mb-24 w-[80%] bg-pink text-white rounded-full py-3 px-8 font-bold md:max-w-[279px]'>Get Started For Free</button>
                </div>
                <div className='w-[90%] mx-auto'>
                    <img src={graphHero} alt=""/>
                </div>

            </div>

        </section>
    )
}

export default Hero

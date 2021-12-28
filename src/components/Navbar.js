import React from 'react'
import logo from '../images/logo.svg'

const Navbar = () => {
    return (
        <header className='flex items-center justify-between px-4 py-7 md:absolute md:top-0 md:left-0 md:right-0 md:px-8 lg:px-16'>
            <img src={logo} alt="logo" className='w-[7.75em] md:w-[10.5em]' />
            <button className='bg-white py-2 px-8 text-vdCyan font-bold rounded-full shadow-[-1px_0px_24px_6px_rgba(97,97,97,0.15)]'>Try It Free</button>
        </header>
    )
}

export default Navbar

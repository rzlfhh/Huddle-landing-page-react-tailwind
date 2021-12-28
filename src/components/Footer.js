import React from 'react'
import logofoot from '../images/logo-footer.svg'
import loc from '../images/icon-location.svg'
import email from '../images/icon-email.svg'
import phone from '../images/icon-phone.svg'
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-vdCyan text-white px-4 py-8 pt-48 text-left md:px-8 lg:px-16'>
            <div className='lg:mb-12'>
                <img src={logofoot} alt="" className='w-[40%] max-w-[240px]' />
            </div>
            <div className='mt-8 lg:grid lg:grid-cols-3 lg:items-start'>
                <div className='flex flex-col gap-4'>
                    <div className='flex items-start gap-4'>
                        <img src={loc} alt="" className='max-w-[20px]' />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorem pariatur ad nobis aliquam commodi nihil voluptatum, alias iste explicabo!</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src={phone} alt="" className='max-w-[20px]' />
                        <p>+1-543-123-4567</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src={email} alt="" className='max-w-[20px]' />
                        <p>example@huddle.com</p>
                    </div>
                </div>
                <div className='my-8 lg:flex lg:items-center lg:justify-around  lg:my-0'>
                    <ul className='flex flex-col gap-4'>
                        <li>About Us</li>
                        <li>Waht We Do</li>
                        <li>FAQ</li>
                    </ul>
                    <ul className='flex flex-col gap-4 mt-4 lg:mt-0'>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className='flex justify-center gap-4 mb-8'>
                    <div className='border border-white p-3 rounded-full'><FaFacebookF /></div>
                    <div className='border border-white p-3 rounded-full'><FaTwitter /></div>
                    <div className='border border-white p-3 rounded-full'><FaInstagram /></div>
                </div>
            </div>
            <p className='text-center lg:mt-16 lg:text-right'>&copy; Copyright 2018 Huddle. All rights reserved.</p>
        </footer>
    )
}

export default Footer

import React from 'react'

const CardFeatures = ({ img, heading, desc }) => {
    return (
        <div className='bg-white p-8 rounded-2xl mb-8 shadow-[-1px_0px_24px_6px_rgba(97,97,97,0.15)] md:grid md:grid-cols-2 md:items-center md:gap-4 md:justify-center md:p-12 md:text-left'>
            <div className='mt-4 mb-16 md:mb-0 md:mt-0'>
                <img src={img} alt="" className='mx-auto md:max-w-[400px]'/>
            </div>
            <div>
                <h2 className='text-2xl font-bold my-6'>{heading}</h2>
                <p className='text-gray-400'>{desc}</p>
            </div>
        </div>
    )
}

export default CardFeatures

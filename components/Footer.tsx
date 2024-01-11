import React from 'react'
import Image from 'next/image'
import logo from '@/public/Logo.png'

const Footer = () => {
    return (
        <div className='border border-t-2 flex flex-col md:flex-row p-2 justify-between items-center'>
            <Image
                src={logo}
                alt='Logo chimba tour'
                height={100}
            // width={100}

            />
            <p className='font-extrabold text-3xl'>*</p>
            <div className='flex flex-col items-center'>
                <span className='uppercase font-extrabold text-lg'>+57 123 456 7890</span>
                <a className='uppercase font-extrabold text-lg' href="mailto:chimbatours@tour.com">
                    chimbatours@tour.com
                </a>
            </div>
        </div>
    )
}

export default Footer
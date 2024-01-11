'use client'
import React, { useState } from 'react'
import {
    MoonIcon,
    SunIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from 'next/image'
import logo from '@/public/Logo.png'

const navigation = [
    { name: 'Tours', href: '#tours', current: false },
    { name: 'Testimonios', href: '#testimonios', current: false },
    { name: 'Contacto', href: '#contacto', current: false },
]

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className='bg-gray-50 border-b-2 border-gray-100'>
            <div className="w-full mx-auto">
                <div className="flex w-full justify-around gap-2 lg:block lg:px-4">
                    {/* Primary menu and logo */}
                    <div className="flex items-center justify-between">
                        {/* logo */}
                        <div>
                            <a
                                href="/"
                            >
                                <Image
                                    src={logo}
                                    alt='Logo'
                                    height={100}
                                />
                            </a>
                        </div>
                        {/* primary */}
                        <div className="hidden lg:flex gap-8 ">
                            {
                                navigation.map((navigation, index) => (
                                    <a key={index} href={navigation.href} className='font-extrabold text-lg hover:text-primary'>
                                        {navigation.name}
                                    </a>
                                ))
                            }
                        </div>
                        <a href='https://api.whatsapp.com/send/?phone=573023698461&text&type=phone_number&app_absent=0' target='_blank' className='flex h-10 tracking-wide
                            uppercase items-center rounded-lg bg-primary text-black px-4 text-sm font-bold  transition-colors hover:bg-black hover:text-primary'>
                            Reservar
                        </a>
                    </div>
                    {/* secondary */}
                    <div className="flex gap-6">
                        <div className="hidden xs:flex items-center gap-10">
                            <div className="hidden lg:flex items-center gap-2">
                                <MoonIcon className="h-6 w-6" />
                                <SunIcon className="h-6 w-6" />
                            </div>

                        </div>
                        {/* Mobile navigation toggle */}
                        <div className="lg:hidden flex items-center">
                            <button onClick={() => setToggleMenu(!toggleMenu)}>
                                <Bars3Icon className="h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile navigation */}
            <div
                className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${!toggleMenu ? "h-0" : "h-full"
                    }`}
            >
                <div className="px-8">
                    <div className="flex flex-col gap-8 font-bold tracking-wider">
                        {
                            navigation.map((navigation, index) => (
                                <a key={index} href={navigation.href} onClick={(prev) => setToggleMenu(!prev)}>
                                    {navigation.name}
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
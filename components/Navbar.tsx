import React from 'react'
import Image from 'next/image'
import logo from '@/public/Logo.png'

const navigation = [
    { name: 'Inicio', href: '#', current: true },
    { name: 'Tours', href: '#', current: false },
    { name: 'Testimonios', href: '#', current: false },
    { name: 'Contacto', href: '#', current: false },
]

const Navbar = () => {
    return (
        <nav className='bg-gray-50 border-2 border-b-black-700 sticky'>
            <div className='flex h-1/3 space-x-1 items-center justify-evenly '>
                <Image
                    alt='Logo Chimba tours'
                    src={logo}
                    width={120}
                    height={200}
                    // className='w-full h-full'


                />
                <div className='flex'>

                    {
                        navigation.map((navigation, index) => (
                            <div key={index}>
                                <a href={navigation.href} className='text-black font-bold hover:text-primary
                                hover:bg-gray-900 rounded-md px-3 py-2 text-md '>
                                    {
                                        navigation.name
                                    }
                                </a>
                            </div>
                        ))
                    }
                </div>
                <button type='button' className='flex h-10 tracking-wide
            uppercase items-center rounded-lg bg-primary text-black px-4 text-sm font-bold  transition-colors hover:bg-black hover:text-primary '>
                    Reservar
                </button>
            </div>
        </nav>
    )
}

export default Navbar
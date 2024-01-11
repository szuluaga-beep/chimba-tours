import { Comic_Neue } from 'next/font/google'
import React from 'react'

const comic = Comic_Neue({ style: 'italic', weight: "300", subsets: ['latin'] })

const Contact = () => {
    return (
        <div className='bg-white flex justify-center items-center my-20' id='contacto'>
            <div className='bg-primary rounded-lg grid grid-rows-2 gap-3 p-10 items-center justify-items-center'>
                <h1 className='font-extrabold  text-lg sm:text-4xl uppercase text-center tracking-wide '>
                    Ven a conocer y<span className={`${comic.className} lowercase ml-2 tracking-wide`}>disfruta</span> con Chimba Tours
                </h1>
                <a href='https://api.whatsapp.com/send/?phone=573023698461&text&type=phone_number&app_absent=0' target='_blank' className='flex h-10 tracking-wide justify-center
                size-72
                            uppercase items-center rounded-lg bg-white text-black px-4 text-lg font-bold p-6  transition-colors hover:bg-black hover:text-primary'>
                    Reservar tour
                </a>
            </div>
        </div>
    )
}

export default Contact
import { users } from '@/lib/data'
import { Comic_Neue } from 'next/font/google'
import React from 'react'
import Testimonial from './Testimonial'

const comic = Comic_Neue({ style: 'italic', weight: "300", subsets: ['latin'] })

const Testimonials = () => {
    return (
        <div className='bg-primary mt-5 py-4 md:py-16' id='testimonios'>
            <h1 className='font-extrabold text-lg sm:text-4xl uppercase text-center tracking-wide '>
                Lo que dicen <span className={`${comic.className} lowercase`}>nuestros</span> clientes
            </h1>
            <div className='flex justify-center items-center'>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 px-5 mt-5 w-full md:w-5/6 lg:w-3/5'>

                    {
                        users.map((user) => (
                            <Testimonial key={user.id} user={user} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Testimonials
import { dataTours } from '@/lib/data'
import React from 'react'
import { Comic_Neue } from "next/font/google";
import Tour from './Tour';


const comic = Comic_Neue({ style: 'italic', weight: "300", subsets: ['latin'] })

const Tours = () => {
    return (
        <div className='m-5 '>
            <h1 className='font-extrabold text-lg sm:text-4xl uppercase text-center tracking-wide '>
                Hazlo, <span className={`${comic.className} lowercase`}>agenda</span> tu recorrido
            </h1>
            <div className='flex justify-center items-center'>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-5 mt-5 w-full md:w-5/6 lg:w-3/5'>

                    {
                        dataTours.map((tour) => (
                           <Tour key={ tour.id} tour={tour}/> 
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Tours
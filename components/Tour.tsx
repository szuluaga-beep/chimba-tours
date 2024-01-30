import React, { FC } from 'react'
import { ITours } from '@/interfaces/ITours'
import Image from 'next/image'
import { CheckIcon } from '@heroicons/react/24/outline'

interface Props {
  tour: ITours
}

const Tour: FC<Props> = ({ tour }) => {
  return (
    <div key={tour.id} className='w-full shadow-2xl rounded-lg p-3  cursor-pointer hover:scale-105' id='tours'>
      <Image
        className='rounded-lg hover:'
        src={`/images/${tour.image}`}
        alt=''
        width={500}
        height={200}
      />
      <div className='p-2 w-full'>

        <h1 className='font-extrabold uppercase text-2xl'>
          {tour.name}
        </h1>
        <p className='text-gray-700'>
          {tour.description}
        </p>
      </div>
      <span className='mt-2 font-semibold'>
        ¿Qué incluye?:
      </span>
      <ul
        className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
      >
        {
          tour.included.map((item) => (
            <li className="flex gap-x-3 text-lg text-gray-700" key={item.idIncluded}><CheckIcon className='h-6 w-5 flex-none text-indigo-600' />
              {item.nameIncluded}
            </li>
          ))
        }

      </ul>
      <div className='my-2 flex gap-2 flex-col items-center md:flex-row justify-between p-4'>
        <div className='flex items-center gap-2 '>

          <span className='mr-2 uppercase font-extrabold text-sm'>Precio:</span>
          <p className='font-extrabold text-lg md:text-2xl'>{`$ ${tour.price.toLocaleString('es-MX')}`}</p>
          <p className='text-primary font-extrabold text-xs'>x Persona</p>
        </div>
        <a href='https://api.whatsapp.com/send/?phone=573023698461&text&type=phone_number&app_absent=0' target='_blank' className='flex h-10 tracking-wide
                            uppercase items-center rounded-lg bg-primary text-black px-4 text-sm font-bold  transition-colors hover:bg-black hover:text-primary'>
          Reservar
        </a>
      </div>
    </div>
  )
}

export default Tour
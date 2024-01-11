import { IUser } from '@/interfaces/IUsers'
import Image from 'next/image'
import React, { FC } from 'react'

interface Props {
  user: IUser
}

const Testimonial: FC<Props> = ({ user }) => {
  return (
    <div key={user.id} className='w-full bg-white shadow-2xl rounded-lg p-3  cursor-pointer' id='tours'>
      <div className='flex justify-center flex-col items-center gap-2'>
        <Image
          width={60}
          height={60}
          src={`/avatar/${user.avatar}`}
          alt={`Avata de ${user.name}`}
        />
        <span className='flex font-extrabold text-lg'>
          {`${user.name}/${user.country}`}
        </span>
        <p className='text-gray-700 text-center'>
          {user.testimonial}
        </p>

      </div>
    </div>
  )
}

export default Testimonial
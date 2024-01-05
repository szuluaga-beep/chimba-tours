'use client'
import Image from 'next/image';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const slideImages = [
  {
    url: '/images/img1.jpg',
    caption: 'Slide 1'
  },
  {
    url: '/images/img2.jpeg',
    caption: 'Slide 2'
  },
  {
    url: '/images/img3.jpg',
    caption: 'Slide 3'
  },
];

export const Home = () => {
  return (
    <main id='inicio'>
      <div className='flex items-center justify-center flex-col mt-4'>
        <div className='w-2/4 mb-2 sm:mb-4 flex items-center align-middle flex-col gap-3'>

          <p className='font-extrabold text-lg sm:text-3xl uppercase text-center tracking-wide'>
            Ven y <span className='text-primary'>conoce</span> el graffi tour, donde podrás compartir en familia y aprender sobre la tranformación de la Comuna 13.
          </p>
          <p className='font-extrabold text-lg sm:text-3xl uppercase text-center tracking-wide'>
            Ven a tomarte muchas fotos llenas de color, en hermosos murales hechos por <span className='text-primary'>artistas</span> locales.
          </p>
        </div>

        <div className='w-full sm:w-2/4 h-96 mt-1 px-2'>

          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,

            }}
            pagination={{
              clickable: true,
              
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper rounded-lg"
          >
            {
              slideImages.map((image, index) => (

                <SwiperSlide key={index}>
                  <Image
                    src={image.url}
                    alt={image.caption}
                    width={1080}
                    height={500}
                  />
                </SwiperSlide>
              ))
            }

          </Swiper>
        </div>
      </div>
    </main>
  )
}

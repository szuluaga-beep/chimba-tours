'use client'
import Image from 'next/image';
import React from 'react'
import { Slide } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";

const divStyle = {
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '500px',

}

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


        <div className="slide-container w-full h-96 sm:w-3/4">
          <Slide
            duration={7000}
            // indicators
            easing="ease"
          >
            {slideImages.map((slideImage, index) => {

              const url = slideImage.url
              return (
                <div key={index}>
                  <div style={{ ...divStyle, 'backgroundImage': `url(${url})` }}>

                  </div>
                </div>
              )
            }

            )}
          </Slide>
        </div>
      </div>
    </main>
  )
}

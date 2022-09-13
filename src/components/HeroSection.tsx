import React from 'react';
import illustration from '../assets/illustration-working.svg';
export default function HeroSection() {
  return (
    <section id='hero'>
      <div className='container mx-auto flex flex-col-reverse p-6 md:flex-row'>
        {/* content */}
        <div className='flex flex-col space-y-10 mb-44 md:mt-16 md:w-1/2'>
          <h1 className='text-5xl font-bold text-center md:text-6xl md:max-w-md md:text-left'>
            More than just shorter links
          </h1>
          <p className='text-2xl text-center text-gray-400 md:text-left md:max-w-md'>
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </p>
          <div className='mx-auto md:mx-0'>
            <a
              href='#'
              className='py-5 px-8 text-2xl font-bold text-white bg-cyan rounded-full md:py-4 hover:opacity-70'
            >
              Get Started
            </a>
          </div>
        </div>
        {/* Image */}
        <div className='mx-auto mb-24 md:mb-0 md:w-1/2'>
          <img src={illustration} alt='' />
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import logo from '../assets/logo.svg';

export default function Navigation() {
  return (
    <div className='relative container mx-auto p-6'>
      <div className='flex items-center justify-between'>
        {/* logo/menu container */}
        <div className='flex items-center space-x-20'>
          <img src={logo} alt='' />
          <div className='hidden md:flex space-x-8 font-bold'>
            <a
              href='#'
              className='text-grayishViolet hover:text-veryDarkViolet'
            >
              Features
            </a>
            <a
              href='#'
              className='text-grayishViolet hover:text-veryDarkViolet'
            >
              Pricing
            </a>
            <a
              href='#'
              className='text-grayishViolet hover:text-veryDarkViolet'
            >
              Resources
            </a>
          </div>
        </div>
        {/* right buttoms */}
        <div className='hidden md:flex space-x-6 font-bold text-grayishViolet items-center'>
          <div className='hover:text-veryDarkViolet'>Login</div>
          <a
            href='#'
            className='py-3 px-8 font-bold text-white bg-cyan rounded-full hover:opacity-70'
          >
            Sign up
          </a>
        </div>
        {/* hamburger */}
      </div>
      {/* mobile navigation */}
    </div>
  );
}

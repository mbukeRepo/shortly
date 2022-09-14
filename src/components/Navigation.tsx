import React from 'react';
import logo from '../assets/logo.svg';
import './Navigation.css';

export default function Navigation() {
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');

  const onClick = () => {
    btn?.classList.toggle('open');
    menu?.classList.toggle('flex');
    menu?.classList.toggle('hidden');
  };
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
        <button
          id='menu-btn'
          className='block md:hidden focus:outline-none hamburger'
          onClick={onClick}
        >
          <span className='hamburger-top'></span>
          <span className='hamburger-middle'></span>
          <span className='hamburger-bottom'></span>
        </button>
      </div>
      {/* mobile navigation */}
      <div
        id='menu'
        className='absolute hidden top-20 left-6 right-6 z-100 bg-darkViolet p-6 rounded-lg'
      >
        <div className='flex flex-col items center justify-center w-full space-y-6 font-bold text-white rounded-sm'>
          <a href='' className='w-full text-center'>
            Features
          </a>
          <a href='' className='w-full text-center'>
            Pricing
          </a>
          <a href='' className='w-full text-center'>
            Resources
          </a>
          <a
            href=''
            className='w-full text-center pt-6 border-t-2 border-gray-300'
          >
            Features
          </a>
          <a href='' className='py-3 w-full rounded-full bg-cyan text-center'>
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

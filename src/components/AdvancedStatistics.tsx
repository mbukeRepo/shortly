import React from 'react';
import image1 from '../assets/icon-brand-recognition.svg';

export default function AdvancedStatistics() {
  return (
    <section className='py-24 bg-gray-100'>
      <div className='container mx-auto px-3'>
        <h2 className='text-4xl mb-6 font-bold text-center'>
          Advanced statistics
        </h2>
        <p className='max-w-xs mx-auto text-center text-gray-400 md:max-w-md'>
          Track how your links are performing accross the web with our Advanced
          statistics dashboard
        </p>
      </div>
      {/* features box */}
      <div className='py-24 w-full h-full '>
        <div className='relative container mx-auto flex flex-col md:flex-row items-start px-6 md:space-x-6 w-full h-full justify-between'>
          {/* horizontal line */}
          <div className='hidden absolute md:block top-24 left-16 h-3 bg-cyan w-10/12'></div>
          {/* vertical line */}
          <div className='absolute md:hidden w-3 h-[80%] mt-12 -m-1 bg-cyan left-1/2'></div>
          {/* boxes */}
          <div className='relative flex flex-col p-6 space-y-6 bg-white rounded-lg w-full md:w-1/3'>
            <div className='absolute -ml-10 -top-10 md:left-16 left-1/2'>
              <div className='flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet'>
                <img src={image1} alt='' />
              </div>
            </div>
            <h5 className='pt-6 text-xl font-bold text-center capitalize md:text-left'>
              Brand recognition
            </h5>
            <p className='text-center text-gray-400 md:text-left'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ut
              tenetur rem doloribus officiis quo enim impedit accusantium
              deleniti quibusdam.
            </p>
          </div>
          <div className='relative flex flex-col p-6 space-y-6 bg-white rounded-lg w-full md:w-1/3 mt-24 md:mt-8'>
            <div className='absolute -ml-10 -top-10 md:left-16 left-1/2'>
              <div className='flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet'>
                <img src={image1} alt='' />
              </div>
            </div>
            <h5 className='pt-6 text-xl font-bold text-center capitalize md:text-left'>
              Brand recognition
            </h5>
            <p className='text-center text-gray-400 md:text-left'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ut
              tenetur rem doloribus officiis quo enim impedit accusantium
              deleniti quibusdam.
            </p>
          </div>
          <div className='relative flex flex-col p-6 space-y-6 bg-white rounded-lg w-full md:w-1/3 mt-24 md:mt-16'>
            <div className='absolute -ml-10 -top-10 md:left-16 left-1/2'>
              <div className='flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet'>
                <img src={image1} alt='' />
              </div>
            </div>
            <h5 className='pt-6 text-xl font-bold text-center capitalize md:text-left'>
              Brand recognition
            </h5>
            <p className='text-center text-gray-400 md:text-left'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ut
              tenetur rem doloribus officiis quo enim impedit accusantium
              deleniti quibusdam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

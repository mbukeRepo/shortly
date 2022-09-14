import React from 'react';

export default function CTA() {
  return (
    <section className='py-24 bg-darkViolet'>
      <div className='flex flex-col p-2 space-y-6'>
        <h5 className='text-4xl font-bold text-center text-white mx-auto'>
          Boost your links today
        </h5>
        <button className='px-10 py-5 md:py-3 text-2xl font-bold text-white rounded-full bg-cyan hover:bg-cyanLight mx-auto md:text-base focus:outline-none'>
          Get started
        </button>
      </div>
    </section>
  );
}

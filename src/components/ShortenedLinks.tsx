import React from 'react';

export default function ShortenedLinks({ color = 'cyan' }: { color?: string }) {
  return (
    <div className='flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row'>
      <p className='font-bold text-center text-veryDarkViolet md:text-left'>
        https://frontendmentor.io
      </p>
      <div className='flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0'>
        <div className='font-bold text-cyan'>https://re.ink/k4523er</div>
        <button
          className={`py-2 px-8 text-white bg-${color} rounded-lg hover:opacity-70 focus:outline-none`}
        >
          copy
        </button>
      </div>
    </div>
  );
}

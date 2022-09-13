import React, { useEffect, useState } from 'react';
import ShortenedLinks from './ShortenedLinks';

export default function ShortenSection() {
  const [link, setLink] = useState('');
  const validURL = (str: string): boolean => {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
      'i'
    );
    return !!pattern.test(str);
  };
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const errMsg = document.getElementById('errMsg');
    const input = document.getElementById('link-input');
    if (link === '' && errMsg && input) {
      errMsg.innerHTML = 'Please enter a link';
      input.classList.add('border-red');
    } else if (!validURL(link) && input && errMsg) {
      errMsg.innerHTML = 'Please enter a valid link';
      input.classList.add('border-red');
    } else {
      errMsg && (errMsg.innerHTML = '');
      input && input.classList.remove('border-red');
    }
  };

  return (
    <section id='shorten' className='relative bg-gray-100'>
      {/* shorten container */}
      <div className='max-w-4xl mx-auto p-6 space-y-6'>
        <form
          action=''
          id='link-form'
          className='relative flex flex-col md:flex-row w-full p-10 -mt-20 space-y-4 md:space-y-0 bg-darkViolet rounded-lg md:space-x-3'
          onSubmit={onSubmit}
        >
          <input
            type='text'
            className='flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none'
            placeholder='shorten a link here'
            id='link-input'
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <button
            type='submit'
            className='py-3 px-10 bg-cyan hover:bg-cyanLight text-white focus:outline-none rounded-lg'
          >
            Shorten it!
          </button>
          <div
            id='errMsg'
            className='absolute bottom-3 left-7 text-red italic test-sm'
          ></div>
        </form>
        <ShortenedLinks />
        <ShortenedLinks color='veryDarkViolet' />
        <ShortenedLinks />
      </div>
    </section>
  );
}

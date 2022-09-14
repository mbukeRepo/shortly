import logo from '../assets/logo.svg';

export default function Footer() {
  return (
    <footer className='py-16 bg-veryDarkViolet'>
      <div className='container mx-auto flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0 md:items-start md:space-x-6'>
        <img src={logo} alt='' />
        {/* menu container */}
        <div className='flex flex-col md:flex-row space-y-16 md:space-y-0 md:space-x-16'>
          {/* menu 1 */}
          <div className='flex flex-col space-y-6 items-center w-full md:items-start'>
            <div className='font-bold text-white capitalize'>Features</div>
            <div className='flex flex-col space-y-3 items-center md:items-start'>
              <div className='text-gray-500 capitalize'>link shortening</div>
              <div className='text-gray-500 capitalize'>branded links</div>
              <div className='text-gray-500 capitalize'>analytics</div>
            </div>
          </div>
          {/* menu 2 */}
          <div className='flex flex-col space-y-6 items-center w-full md:items-start'>
            <div className='font-bold text-white capitalize'>Resources</div>
            <div className='flex flex-col space-y-3 items-center md:items-start'>
              <div className='text-gray-500 capitalize'>blog</div>
              <div className='text-gray-500 capitalize'>developers</div>
              <div className='text-gray-500 capitalize'>support</div>
            </div>
          </div>
          {/* menu 3 */}
          <div className='flex flex-col space-y-6 items-center w-full md:items-start'>
            <div className='font-bold text-white capitalize'>Company</div>
            <div className='flex flex-col space-y-3 items-center md:items-start'>
              <div className='text-gray-500 capitalize'>about</div>
              <div className='text-gray-500 capitalize'>our team</div>
              <div className='text-gray-500 capitalize'>careers</div>
              <div className='text-gray-500 capitalize'>contact</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

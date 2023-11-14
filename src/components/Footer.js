import Link from 'next/link';

const Footer = () => {
  return (
    <div className='bg-yellow-200'>
      <footer className='heropattern-topography-white text-gray-800 text-center px-2 py-2 text-xs flex items-center justify-between'>
        <div className='md:w-1/3 flex flex-col justify-start'>
          <p>© 1978-{new Date().getFullYear()}</p>
          <p>Royal Ridges Retreat</p>
        </div>
        <div className='text-green-200 hover:text-yellow-400 md:w-1/3 flex justify-center'>
          <Link href={'/donations'} className='flex flex-wrap'>
            <p className='mt-1 mr-1 font-semibold hidden md:block'>
              Donate
            </p>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6 2.5C5.44772 2.5 5 2.94772 5 3.5V5.5C5 6.05228 5.44772 6.5 6 6.5C6.55228 6.5 7 6.05228 7 5.5V3.5C7 2.94772 6.55228 2.5 6 2.5Z'
                fill='currentColor'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13 21.5C15.973 21.5 18.441 19.3377 18.917 16.5H19C21.2091 16.5 23 14.7091 23 12.5C23 10.2909 21.2091 8.5 19 8.5V7.5H1V15.5C1 18.8137 3.68629 21.5 7 21.5H13ZM3 9.5V15.5C3 17.7091 4.79086 19.5 7 19.5H13C15.2091 19.5 17 17.7091 17 15.5V9.5H3ZM21 12.5C21 13.6046 20.1046 14.5 19 14.5V10.5C20.1046 10.5 21 11.3954 21 12.5Z'
                fill='currentColor'
              />
              <path
                d='M9 3.5C9 2.94772 9.44771 2.5 10 2.5C10.5523 2.5 11 2.94772 11 3.5V5.5C11 6.05228 10.5523 6.5 10 6.5C9.44771 6.5 9 6.05228 9 5.5V3.5Z'
                fill='currentColor'
              />
              <path
                d='M14 2.5C13.4477 2.5 13 2.94772 13 3.5V5.5C13 6.05228 13.4477 6.5 14 6.5C14.5523 6.5 15 6.05228 15 5.5V3.5C15 2.94772 14.5523 2.5 14 2.5Z'
                fill='currentColor'
              />
            </svg>
          </Link>
        </div>
        <div className='md:w-1/3 flex flex-col justify-end'>
          <p>Another</p>
          <a
            href='https://mountaintopcoding.dev'
            className='text-green-200 hover:text-yellow-400'
            target='_blank'
            rel='noopener noreferrer'
          >
            mountainTopCoding(
            <span role='img' aria-label='mountain with snow-cap'>
              &#127956;
            </span>
            );
          </a>
          <p>project</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

import { getAllPosts } from '../lib/api';

import Blog from '../components/Blog';
import Header from '../components/Header';
import Footer from '../components/Footer';

export async function getStaticProps() {
  const allPosts = await getAllPosts();
  return {
    props: {
      allPosts,
    },
    // revalidate: 10,
    // The above line causes the website to push a 500 error
  };
}

export default function Home({ allPosts }) {
  return (
    <div>
      <link rel='icon' href='/favicon.png' />
      <Head>
        <title>
          Royal Ridges - An Adventure Camp in Southern Washington
        </title>
      </Head>
      {/* Sticky Header */}
      <div className='sticky top-0'>
        <div className='flex flex-wrap justify-between mt-1'>
          {/* Social Media */}
          <div className='ml-2 flex flex-wrap'>
            {/*Instagram*/}
            <a
              href='https://www.instagram.com/royalridges/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z'
                  fill='currentColor'
                />
                <path
                  d='M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z'
                  fill='currentColor'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z'
                  fill='currentColor'
                />
              </svg>
            </a>
            {/*Facebook*/}
            <a
              href='https://www.facebook.com/RoyalRidges'
              target='_blank'
              rel='noopener noreferrer'
              className='ml-4'
            >
              <svg
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z'
                  fill='currentColor'
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/*Windows*/}
      <div className='snap-y snap-mandatory'>
        {/* First window */}
        <div className='snap-always snap-center mb-2 flex flex-col h-screen justify-between bg-[url("/patternTopo.svg")]'>
          <div className='flex justify-center my-auto box-content'>
            <Image
              src='/images/logo.png'
              alt='Royal Ridges Logo'
              loading='eager'
              width={700}
              height={200}
            />
          </div>

          <div className='flex justify-center mb-10 bg-gray-100 rounded-full opacity-80 w-1/2 mx-auto'>
            <p className='px-1 text-gray-600 font-semibold text-lg'>
              Scroll Down
            </p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 animate-bounce text-gray-600'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 14l-7 7m0 0l-7-7m7 7V3'
              />
            </svg>
          </div>
        </div>

        {/* Second window */}
        <div className='flex flex-col h-screen bg-gradient-to-r from-yellow-500 to-yellow-200'>
          <Header />
          <div className='flex justify-center my-auto px-1'>
            <Image
              src='/images/D_C_G_Logo.png'
              alt='Summer'
              height={550}
              width={700}
            />
          </div>
        </div>

        {/* Third window */}
        <div className='flex flex-col justify-between bg-[url("/patternTwoDark.svg")]'>
          <div className='flex justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 animate-bounce text-gray-600'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 14l-7 7m0 0l-7-7m7 7V3'
              />
            </svg>
          </div>
          <div className='px-4'>
            <Blog allPosts={allPosts} />
          </div>
        </div>

        {/* Fourth Window */}
        <div
          className='min-h-screen grid grid-cols-2 gap-6 place-items-center
             bg-radial-[at_50%_40%] from-yellow-200 to-yellow-500 to-80%
             md:grid-cols-3 md:grid-rows-3 pt-2'
        >
          {[
            {
              href: '/summer-camp',
              alt: 'Summer',
              src: 'https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283063/royalRidges/icons/SummerIcon_wa521t.png',
              basePos: '', // normal 2-col flow on mobile
              posMd: 'md:col-start-1 md:row-start-1',
            },
            {
              href: '/programs',
              alt: 'Programs',
              src: 'https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283061/royalRidges/icons/ProgramIcon_ocgaad.png',
              basePos: '',
              posMd: 'md:col-start-3 md:row-start-1',
            },
            {
              href: '/about',
              alt: 'About',
              src: 'https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283059/royalRidges/icons/AboutIcon_pomsgv.png',
              basePos: '',
              posMd: 'md:col-start-2 md:row-start-2',
            },
            {
              href: '/support',
              alt: 'Support',
              src: 'https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283063/royalRidges/icons/SupportIcon_anp6bi.png',
              basePos: '',
              posMd: 'md:col-start-1 md:row-start-3',
            },
            {
              href: '/contact',
              alt: 'Contact',
              src: 'https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283059/royalRidges/icons/ContactIcon_obpqt4.png',
              // 👇 Center on mobile by spanning both columns
              basePos: 'col-span-2 justify-self-center',
              posMd: 'md:col-start-3 md:row-start-3',
            },
          ].map(({ href, src, alt, basePos = '', posMd = '' }) => (
            <div key={href} className={`${basePos} ${posMd}`}>
              <Link
                href={href}
                className='group block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500'
                aria-label={alt}
              >
                <div
                  className='relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-56 lg:h-56
                        transition-transform duration-200 motion-reduce:transition-none
                        group-hover:scale-105 active:scale-95'
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className='object-contain drop-shadow-md'
                    sizes='(min-width:1024px) 14rem, (min-width:768px) 11rem, 7rem'
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

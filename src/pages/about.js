'use client';

import Image from 'next/image';
import Link from 'next/link';

import Header from '../../(components)/Header';
import Footer from '../../(components)/Footer';

export default function About() {
  return (
    <div className='bg-gradient-to-l from-yellow-200 to-green-200'>
      <Header />
      <div className='max-w-6xl mx-auto'>
        <div className='flex justify-center'>
          <Image
            src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283059/royalRidges/icons/AboutIcon_pomsgv.png'
            alt='about'
            width={200}
            height={200}
            className='w-1/12 mt-1'
          />
        </div>

        {/* Icons */}
        <div className='grid grid-cols-2 gap-2 mx-2 h-screen'>
          <div className='flex items-center justify-center'>
            <Link href={'/mission'}>
              <Image
                src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283060/royalRidges/icons/MissionIcon_mo7qzk.png'
                alt='mission'
                width={200}
                height={200}
                className='w-40 md:w-64 mt-8 mx-auto'
              />
            </Link>
          </div>
          <div className='flex items-center justify-center'>
            <a
              href='https://hardcore-khorana-19151f.netlify.app'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283060/royalRidges/icons/NewsletterIcon_sz4zqb.png'
                alt='newsletter'
                width={200}
                height={200}
                className='w-40 md:w-64 mt-8 mx-auto'
              />
            </a>
          </div>
          <div className='flex items-center justify-center'>
            <Link href={'/staff'}>
              <Image
                src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283063/royalRidges/icons/StaffIcon_vbe284.png'
                alt='staff'
                width={200}
                height={200}
                className='w-40 md:w-64 mt-8 mx-auto'
              />
            </Link>
          </div>
          <div className='flex items-center justify-center'>
            <Link href={'/statement-of-faith'}>
              <Image
                src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283060/royalRidges/icons/FaithIcon_vyjdtj.png'
                alt='faith'
                width={200}
                height={200}
                className='w-40 md:w-64 mt-8 mx-auhref'
              />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

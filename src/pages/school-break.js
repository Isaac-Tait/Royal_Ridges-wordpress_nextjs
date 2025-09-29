import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
const SchoolBreak = () => {
  return (
    <div className='bg-gradient-to-r from-yellow-200 to-green-200'>
      <Head>
        <title>School Break Camps @ Royal Ridges</title>
      </Head>
      <Header />
      <div className='h-screen max-w-6xl mx-auto'>
        <Image
          src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/headerPhotos/SchoolBreakCamps.png'
          alt='summer camp descriptions'
          width={400}
          height={400}
          className='w-2/3 mx-auto rounded-xl mt-1'
        />

        <p className='flex flex-wrap text-green-200 font-cursive text-xl justify-center md:text-2xl'>School Break Camps</p>   
        <p className='mb-6'>Give your kids an unforgettable school break! Our day camps offer an amazing opportunity to
          get outside, discover new skills, connect with friends, and build confidence. Camps are aligned
          with the Battle Ground School District calendar.
        </p>
        
        <div className='flex justify-between w-2/3 mx-auto'>
          <Link
            href={'https://updatesroyalridges.org/spring-break-camp/'}
            className='font-cursive text-2xl my-4 hover:underline text-green-200 hover:text-indigo-500'
          >
            <p>Spring Day Camp</p>
          </Link>
          <Link
            href={'https://updatesroyalridges.org/winter-break-camp/'}
            className='font-cursive text-2xl my-4 hover:underline text-green-200 hover:text-indigo-500'
          >
            <p>Winter Day Camp</p>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SchoolBreak;

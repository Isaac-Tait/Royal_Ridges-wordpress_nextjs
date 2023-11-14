'use client';
import Image from 'next/image';
import Link from 'next/link';

import Header from '../../(components)/Header';
import Footer from '../../(components)/Footer';

const SchoolBreak = () => {
  return (
    <div className='bg-gradient-to-r from-yellow-200 to-green-200'>
      <Header />
      <div className='h-screen max-w-6xl mx-auto'>
        <Image
          src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/headerPhotos/SchoolBreakCamps.png'
          alt='summer camp descriptions'
          width={400}
          height={400}
          className='w-2/3 mx-auto rounded-xl mt-1'
        />

        <div className='flex justify-between w-2/3 mx-auto'>
          <Link
            href={'/spring-day-camp'}
            className='font-cursive text-2xl my-4 hover:underline text-green-200 hover:text-indigo-500'
          >
            <p>Spring Day Camp</p>
          </Link>
          <Link
            href={'/winter-day-camp'}
            className='font-cursive text-2xl my-4 hover:underline text-green-200 hover:text-indigo-500'
          >
            <p>Winter Day Camp</p>
          </Link>
        </div>

        <div className='mr-4'>
          <p>
            Looking for a great way for your kids to spend their
            school breaks. Then sign them up for one of our amazing
            day camp options and get them outside, discovering new
            skills, connecting with friends, and making new ones,
            while growing in their confidence. Our school break camps
            are aligned with the Battle Ground School District
            calender. Click on the specific camps for more details.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SchoolBreak;

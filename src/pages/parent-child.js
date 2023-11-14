'use client';
import Link from 'next/link';
import Image from 'next/image';

import Header from '../../(components)/Header';
import Footer from '../../(components)/Footer';

const ParentChild = () => {
  return (
    <div className='bg-gradient-to-r from-yellow-200 to-indigo-200'>
      <Header />
      <div className='max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen'>
        <Image
          src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/headerPhotos/parentChild.png'
          alt='parent child'
          width={400}
          height={400}
          className='w-2/3 mx-auto rounded-2xl shadow-xl mt-2'
        />
        <p>
          Come spend the day at Royal Ridges Retreat with your child!
          With multiple activities and special moments to spend
          together, you and your child will create unforgettable
          memories while building a better relationship with each
          other.
        </p>
        <div className='mt-2'>
          <p>
            Check-in will be at 9:00 am on Saturday at Upper Camp with
            lunch provided. Please wear long pants for riding and
            closed toe shoes.
          </p>
          <div className='flex flex-row justify-between'>
            <div>
              <Link href={'/mother-daughter'}>
                <p className='text-green-200 font-bold text-lg justify-center hover:underline hover:brightness-200 md:text-2xl'>
                  Mother Daughter
                </p>
              </Link>
            </div>
            <div>
              <Link href={'/mother-son'}>
                <p className='text-green-200 font-bold text-lg justify-center hover:underline hover:brightness-200 md:text-2xl'>
                  Mother Son
                </p>
              </Link>
            </div>
            <div>
              <Link href={'/father-daughter'}>
                <p className='text-green-200 font-bold text-lg justify-center hover:underline hover:brightness-200 md:text-2xl'>
                  Father Daughter
                </p>
              </Link>
            </div>
            <div>
              <Link href={'/father-son'}>
                <p className='text-green-200 font-bold text-lg justify-center hover:underline hover:brightness-200 md:text-2xl'>
                  Father Son
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ParentChild;

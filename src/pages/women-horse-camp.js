'use client';
import Image from 'next/image';

import Header from '../../(components)/Header';
import Footer from '../../(components)/Footer';
const WomenHorseCamp = () => {
  return (
    <div className='bg-gradient-to-r from-yellow-200 to-indigo-200'>
      <Header />
      <div className='max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen overflow-y-scroll'>
        <Image
          src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/headerPhotos/womensHorseCamps.png'
          alt='women horse camp'
          width={400}
          height={400}
          className='rounded-2xl shadow-xl mt-2 w-2/3 mx-auto'
        />
        <p>
          Please join us for a memorable day designed for women and
          horses. Some of the activities planned are crafts &
          fellowship time and, of course, HORSES! A delicious lunch is
          included.
        </p>
        <p className='font-semibold mt-4'>
          Please remember to wear long pants, closed-toe shoes, and
          dress weather appropriately.
        </p>
        <p className='mt-2 italic'>
          Stay tuned to our blog for upcoming opportunities to partake
          in a Women&#39;s Horse Camp
        </p>
        <p>
          You can register&nbsp;
          <a
            href='https://www.ultracamp.com/info/upcomingSessions.aspx?idCamp=1145&campCode=151&lnkCategory=Women%27s+Horse+Camp'
            className='text-green-200 hover:text-indigo-400 hover:underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            here
          </a>
          .
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default WomenHorseCamp;

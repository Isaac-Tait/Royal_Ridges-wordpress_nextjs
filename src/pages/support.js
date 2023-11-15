'use client';
import Link from 'next/link';
import Image from 'next/image';

import Header from '../../(components)/Header';
import Footer from '../../(components)/Footer';

const Support = () => {
  return (
    <div className='bg-gradient-to-b from-yellow-200 to-green-200'>
      <Header />
      <div className='min-h-screen max-w-6xl mx-auto'>
        <div className='flex justify-center'>
          <Image
            src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283063/royalRidges/icons/SupportIcon_anp6bi.png'
            alt='support'
            width={200}
            height={200}
            className='w-12 h-12 md:w-32 md:h-32'
          />
        </div>

        {/* Icons */}
        <div className='grid grid-cols-2 gap-2 mx-2 h-screen'>
          <div className='flex items-center justify-center'>
            <Link href={'/volunteers'}>
              <Image
                src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283065/royalRidges/icons/Volunteers_w5xxel.png'
                alt='volunteers'
                width={200}
                height={200}
                className='w-40 md:w-64'
              />
            </Link>
          </div>
          <div className='flex items-center justify-center'>
            <Link href={'/donations'}>
              <Image
                src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283060/royalRidges/icons/Donations_yujy2o.png'
                alt='donations'
                width={200}
                height={200}
                className='w-40 md:w-64'
              />
            </Link>
          </div>
          <div className='flex items-center justify-center'>
            <Link href={'/church-sponsors'}>
              <Image
                src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283059/royalRidges/icons/ChurchSponsors_uxo8mi.png'
                alt='church'
                width={200}
                height={200}
                className='w-40 md:w-64'
              />
            </Link>
          </div>
          <div className='flex items-center justify-center'>
            <Link href={'/business'}>
              <Image
                src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283059/royalRidges/icons/BusinessSponsors_u52a8e.png'
                alt='business'
                width={200}
                height={200}
                className='w-40 md:w-64'
              />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Support;

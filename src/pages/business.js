'use client';

import Image from 'next/image';

import Header from '../../(components)/Header';
import Footer from '../../(components)/Footer';

// import Impact from '../images/impactLogo.png';
// import Printing from '../images/printingLogo.png';

const Business = () => {
  return (
    <div className='bg-gradient-to-b from-yellow-200 to-indigo-200'>
      <Header />
      <div>
        <div className='max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen overflow-y-scroll pb-4'>
          <Image
            src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/support_page/header+photos/BusinessSponsors.png'
            alt='business sponsors'
            width={800}
            height={800}
            className='rounded-2xl shadow-xl mt-2 w-2/3 mx-auto'
          />
          <p className='text-center'>
            We are proud to call the following businesses
            &quot;Friends of Royal Ridges&quot;. If you are in need of
            any services they provide, we encourage you to consider
            purchasing from the following:
          </p>
          <div className='grid grid-cols-3'>
            {/*Blackbird Accounting*/}
            <div className='mt-4 flex flex-col items-center'>
              <Image
                src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/business-sponsors/Blackbird_Accounting.jpeg'
                alt='Black Bird Accounting'
                width={200}
                height={200}
                className='w-20 h-16 rounded-2xl'
              />
              <a
                href='https://blackbirdcpas.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-green-200 hover:underline hover:text-indigo-400 mx-4'
              >
                Blackbird Accounting
              </a>
              <p className='mx-6 hidden md:block'>
                Vancouver, Washington 360-904-4021
              </p>
            </div>
            {/*Farrier*/}
            <div className='flex flex-col items-center'>
              <Image
                src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/business-sponsors/farrier2.jpeg'
                alt='Farrier'
                width={200}
                height={200}
                className='h-20 w-16 rounded-2xl'
              />
              <a
                href='http://www.manta.com/c/mtgpc17/jc-farrier-service'
                target='_blank'
                rel='noopener noreferrer'
                className='text-green-200 hover:underline hover:text-indigo-400 mx-4'
              >
                JC Farrier Service
              </a>
              <p className='mx-6 hidden md:block'>360-687-4698</p>
            </div>
            {/*NAPA*/}
            <div className='flex flex-col items-center'>
              <Image
                src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699287638/royalRidges/business/impactLogo_ciwcgz.png'
                alt='impact'
                width={200}
                height={200}
                className='h-16 w-20 rounded-2xl'
              />
              <a
                href='https://www.impactautoyacolt.com/c'
                target='_blank'
                rel='noopener noreferrer'
                className='text-green-200 hover:underline hover:text-indigo-400 mx-4'
              >
                Impact Automotive
              </a>
              <p className='mx-6 hidden md:block'>360-686-8677</p>
            </div>
          </div>
          {/*Row Two*/}
          <div className='grid grid-cols-3'>
            <div className='mt-1 md:mt-12 flex flex-col items-center'>
              <Image
                src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/business-sponsors/NWAmbush1.jpeg'
                alt='NW Ambush'
                width={200}
                height={200}
                className='w-20 h-16 rounded-2xl'
              />
              <a
                href='http://nwambush.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-green-200 hover:underline hover:text-indigo-400 mx-4'
              >
                NW Ambush, Extreme Sports
              </a>
              <p className='mx-6 hidden md:block'>
                711 E Main Street, Suite #103 Battle Ground, WA 98604
                360-666-0029
              </p>
            </div>

            {/*Ink Printing */}
            <div className='mt-1 md:mt-12 flex flex-col items-center'>
              <Image
                src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699287639/royalRidges/business/printingLogo_boupns.png'
                alt='printing'
                width={200}
                height={200}
                className='w-20 h-16 rounded-2xl'
              />
              <a
                href='https://www.inkabilitybg.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-green-200 hover:underline hover:text-indigo-400 mx-4'
              >
                Ink Ability
              </a>
              <p className='mx-6 hidden md:block'>360-723-0151</p>
            </div>

            <div className='mt-1 md:mt-12 flex flex-col items-center'>
              <Image
                src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/business-sponsors/tn_Amazia_Logo.jpeg'
                alt='Amazia'
                width={200}
                height={200}
                className='w-20 h-16 rounded-2xl'
              />
              <a
                href='http://amaziavet.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-green-200 hover:underline hover:text-indigo-400 mx-4'
              >
                AMAZIA, Veterinary Services
              </a>
              <p className='mx-6 hidden md:block'>
                &quot;Dr. Scot&quot; Lubbers 12303 NE 152nd Street
                Brush Prairie, WA 98606 360-892-7524
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Business;

import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import Header from '../components/Header';
import Footer from '../components/Footer';

const GirlScouts = () => {
  return (
    <div className='bg-gradient-to-r from-yellow-200 to-indigo-200'>
      <Head>
        <title>Girl Scout Program @ Royal Ridges</title>
      </Head>
      <Header />
      <div>
        <div className='max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen overflow-y-scroll'>
          <Image
            src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/headerPhotos/girlScouts.png'
            alt='girlScouts'
            width={400}
            height={400}
            className='w-2/3 mx-auto rounded-2xl shadow-xl mt-2'
          />
          <p className='mt-2'>
           Help your Girl Scout troop earn their horse riding badge with our specialized class! Your
           troop will delve into the fundamentals of horses, covering essential facts, safety
           protocols, basic care, leading techniques, and how to groom and saddle. The class
           culminates in a fun arena ride.
          </p>

         <h3 className='font-bold text-xl mt-2'>Class Details:</h3>
         <p className='ml-2'><span className='font-bold'>◾️ Duration:</span>{' '}3 hours</p>
         <p className='ml-2'><span className='font-bold'>◾️ Requirements Fulfilled:</span>{' '}Fulfills most Girl Scout Riding Badge requirements for ages five and up (patch not included).</p>
         <p className='ml-2'><span className='font-bold'>◾️ Riding Time:</span>{' '}30 minutes of arena riding.</p>
         <p className='ml-2'><span className='font-bold'>◾️ Participation:</span>{' '}Leader and parents are welcome to ride.</p>
         <p className='ml-2'><span className='font-bold'>◾️ Weight Limit:</span>{' '}Please note a weight limit of 250lbs for riding.</p>

         <h3 className='font-bold text-xl mt-2'>Optional Trail Ride</h3>
         <p>For an additional fee and an extra hour, you can add a trail ride to your class on the same date.
            Riders must be at least nine years of age for trail rides.
         </p>

         <h3 className='font-bold text-xl mt-2'>Group Size & Contact</h3>
          <p className='ml-2'><span className='font-bold'>◾️ Minimum Group Size: </span>{' '}7 (for either the Badge Class or Trail Ride)</p>
          <p className='ml-2'><span className='font-bold'>◾️ Inquiries: </span>{' '}Interested? Please contact programs@royalridges.org</p>

        <h3 className='font-bold text-xl mt-2'>Important Notes for Girl Scouts:</h3>
         <p className='ml-2'><span className='font-bold'>◾️ Liability Form:</span>{' '}All riders must complete a liability form before class. Use this link:
          <a href='https://app.smartwaiver.com/editor/v2/qse1rw8pknrsfipt3ktayf#' className='hover:underline text-green-200 hover:text-indigo-500'>{' '}Liability Form</a>.</p>
         <p className='ml-2'><span className='font-bold'>◾️ Arrival:</span>{' '}Please arrive 15 minutes before your scheduled time.</p>
         <p className='ml-2'><span className='font-bold'>◾️ Attire:</span>{' '}Long pants and sturdy closed-toe shoes are required (no Crocs).</p>
         <p className='ml-2'><span className='font-bold'>◾️ Essentials:</span>{' '}Remember to bring a lunch and a refillable water bottle.</p>
         <p className='ml-2'><span className='font-bold'>◾️ Helmets:</span>{' '}Royal Ridges provides riding helmets. If bringing your own, it must be an
ASTM-certified helmet.</p>
         <p className='ml-2'><span className='font-bold'>◾️ Weather:</span>{' '}It can be cooler at camp; please wear weather-appropriate clothing.</p>
         <p className='ml-2 mb-4'><span className='font-bold'>◾️ Camp Store:</span>{' '}Our camp store will be open after your class if you wish to purchase
souvenirs like horse camp t-shirts, horse buttons, studies, lanyards, or other items.
Please cash only (items are $1-$15).</p>

         <Link href='https://updatesroyalridges.org/girl-scouts/' className='mb-4 hover:underline text-green-200 hover:text-indigo-500'>Click here for the latest updates</Link>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GirlScouts;

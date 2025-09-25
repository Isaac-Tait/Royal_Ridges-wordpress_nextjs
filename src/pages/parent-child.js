import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';

const ParentChild = () => {
  return (
    <div className='bg-gradient-to-r from-yellow-200 to-indigo-200'>
      <Head>
        <title>Parent Child Programs @ Royal Ridges</title>
      </Head>
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
          Come spend the day at Royal Ridges Camps with your child! Our specially designed
activities provide unique opportunities for connection and growth, strengthening your
bond in a fun and engaging environment. Come and experience the joy of spending
quality time together, creating a legacy of love and laughter that will last a lifetime.
        </p>
        <div className='mt-2'>
          <Link href='https://updatesroyalridges.org/parent-child-days/' className='hover:underline text-green-200 hover:text-indigo-500'>
            Click here for upcoming dates
          </Link>
          
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

import Image from 'next/image';
import Head from 'next/head';

import Form from '../components/Form';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Comments = () => {
  return (
    <div className='bg-gradient-to-l from-yellow-400 to-yellow-200'>
      <Head>
        <title>How to get in touch with Royal Ridges</title>
      </Head>
      <Header />
      <div className='max-w-6xl flex flex-col mx-auto md:h-screen overflow-auto mb-4 px-2'>
        <Image
          src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/headerPhotos/Contact+1.0+(1).png'
          alt='girlScouts'
          width={800}
          height={800}
          className='w-2/3 rounded-2xl shadow-xl mt-2 m-auto'
        />

        <div class='py-4'>
          <div class='w-full border-t border-gray-800'></div>
        </div>

        <div className='text-center'>
          <p className='mt-4'>General questions email:</p>
          <a
            href='mailto:info@royalridges.org'
            className='text-green-200 hover:underline'
          >
            info@royalridges.org
          </a>
          <p className='mt-4'>Program questions email:</p>
          <a
            href='mailto:programs@royalridges.org'
            className='text-green-200 hover:underline'
          >
            programs@royalridges.org
          </a>
          <p className='mt-4'>Registration questions email:</p>
          <a
            href='mailto:registrations@royalridges.org'
            className='text-green-200 hover:underline'
          >
            registrations@royalridges.org
          </a>
          <p className='mt-4'>
            <span className='font-medium text-lg'>
              Office Phone:&nbsp;
            </span>
            360-686-3737
          </p>
          <p className='mt-4'>
            <span className='font-medium text-lg'>
              Physical Address:&nbsp;
            </span>
            20115 NE 354th St Yacolt, WA 98675
          </p>
          <p className='my-4'>
            <span className='font-medium text-lg'>
              Mailing Address:&nbsp;
            </span>
            P.O. Box 3010 Battle Ground, WA 98604
          </p>

          <div class='py-4'>
            <div class='w-full border-t border-gray-800'></div>
          </div>

          <p className='mt-4'>
            Or you can in touch with us by filling out the form.
          </p>
        </div>
        <div className='w-full flex justify-center'>
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Comments;

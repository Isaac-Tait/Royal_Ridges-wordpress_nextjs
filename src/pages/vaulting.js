import Image from 'next/image';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Vaulting = () => {
  return (
    <div className='bg-gradient-to-r from-yellow-200 to-indigo-200'>
      <Head>
        <title>Vaulting Program @ Royal Ridges</title>
      </Head>
      <Header />
      <div className='max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen overflow-y-scroll'>
        <Image
          src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/headerPhotos/vaultingLessons.png'
          alt='vaulting class'
          width={400}
          height={400}
          className='w-2/3 mx-auto rounded-2xl shadow-xl mt-2'
        />
        <div className='my-4 text-center text-4xl'>
            <p>Have questions? Please email chrisy@royalridges.org</p>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Vaulting;

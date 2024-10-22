import Image from 'next/image';
import Head from 'next/head';

import SummerNavigation from '../components/SummerNav';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RecSportCamp() {
  return (
    <div className='bg-gradient-to-r from-yellow-200 to-indigo-200'>
      <Head>
        <title>Arts and Crafts Camp @ Royal Ridges</title>
      </Head>
      <Header />
      <div className='h-screen overflow-y-scroll px-1 sm:grid sm:grid-cols-2'>
        {/*Column 1*/}
        <div>
          <SummerNavigation />
        </div>
        {/* Column 2*/}
        <div></div>
      </div>
      <Footer />
    </div>
  );
}

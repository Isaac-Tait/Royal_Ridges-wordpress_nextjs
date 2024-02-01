import Head from 'next/head';

import SearchPage from '../components/Search';
import Header from '../components/Header';
import Footer from '../components/Footer';

const search = () => {
  return (
    <div className='heropattern-topography-yellow-400'>
      <Head>
        <title>Searching the Royal Ridges&#39; website</title>
      </Head>
      <Header />
      <SearchPage />
      <div className='fixed bottom-0 w-full'>
        <Footer />
      </div>
    </div>
  );
};

export default search;

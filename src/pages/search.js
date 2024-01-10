import Link from 'next/link';

import SearchPage from '../components/Search';
import Header from '../components/Header';
import Footer from '../components/Footer';

const search = () => {
  return (
    <div className='h-screen heropattern-topography-yellow-400'>
      <Header />
      <>
        <SearchPage />
      </>
      <div className='fixed bottom-0 w-full'>
        <Footer />
      </div>
    </div>
  );
};

export default search;

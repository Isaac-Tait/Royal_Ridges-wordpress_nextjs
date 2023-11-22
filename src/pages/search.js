import Link from 'next/link';

import Header from '../components/Header';
import Footer from '../components/Footer';

const search = () => {
  return (
    <div className='h-screen heropattern-topography-yellow-400'>
      <Header />
      <p className='h-1/4 opacity-80 bg-gray-100 max-w-5xl mx-auto pt-10 p-1 rounded-md'>
        This is the temporary search page while our amazing team of
        web developers (okay there is only one) work with{' '}
        <a
          href='https://www.algolia.com/'
          className='text-green-200 hover:underline hover:text-indigo-400'
          target='_blank'
          rel='noopener noreferrer'
        >
          Algolia
        </a>{' '}
        to build a really cool search solution for our site. If you
        need help finding anything in the meantime please do not
        hesitate to reach out to us directly. You can find all our
        contact information{' '}
        <Link
          href='/contact'
          className='text-green-200 hover:underline hover:text-indigo-400'
        >
          on our contact page, which you can find by clicking this
          link here
        </Link>
      </p>
      <div className='fixed bottom-0 w-full'>
        <Footer />
      </div>
    </div>
  );
};

export default search;

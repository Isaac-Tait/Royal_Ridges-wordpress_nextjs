import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Application = () => {
  return (
    <div>
      <Head>
        <title>Apply to work @ Royal Ridges</title>
      </Head>
      <Header />
      <div>
        <div className='max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen overflow-y-scroll'>
          <div className='flex justify-center'>
            <iframe
              src='https://docs.google.com/forms/d/e/1FAIpQLSdYF3yclj7izWczyREUIMRtf2oRPQGCcp6_lm6kQUJpUCTHJA/viewform?embedded=true'
              width='640'
              height='10479'
              frameborder='0'
              marginheight='0'
              marginwidth='0'
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Application;

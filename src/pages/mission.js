import Image from 'next/image';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Mission = () => {
  return (
    <div className='bg-gradient-to-t from-yellow-200 to-indigo-200'>
      <Head>
        <title>Royal Ridges&#39; Mission and Purpose</title>
      </Head>
      <Header />
      <div>
        <div className='max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen overflow-y-scroll mb-4'>
          <Image
            src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/about_page/Mission.png'
            alt='mission'
            width={400}
            height={400}
            className='rounded-2xl shadow-xl mt-2 w-2/3 mx-auto'
          />
          <p className='flex flex-wrap text-yellow-400 font-bold text-xl justify-center md:text-2xl mt-2'>
            Royal Ridges Camps: A Legacy of Faith and Nature
          </p>
          <p className='text-base lg:text-lg px-1'>
            Founded in 1978 with a generous gift of 78 acres from Roy
            and Jean Andersen, Royal Ridges is nestled 25 miles
            northeast of Vancouver, Washington, in the tranquil
            foothills of the Cascade Mountain range. What began with a
            small piece of land has since grown into a 378-acre
            sanctuary. Our property features rolling hills, winding
            trails, lush pastures, and peaceful streams leading to
            Andersen Lake, offering a picturesque backdrop for all who
            visit. As a Christian non-profit ministry, Royal Ridges is
            committed to bringing people closer to Christ. Our mission
            is to share the gospel of Jesus Christ through love and
            personal example. This mission is embodied in our guiding
            principles:{' '}
            <span className='text-yellow-400 font-bold'>
              Discover, Connect, and Grow
            </span>
            . We aim to create meaningful outdoor experiences that
            allow participants to discover purpose and passion,
            connect with God and others, and grow emotionally,
            physically, and spiritually. We welcome individuals of all
            backgrounds to experience the transformative power of our
            programs. Royal Ridges offers a wide range of
            opportunities for youth in grades 1 through 12, as well as
            for adults seeking retreats or group events. We also offer
            unique parent-child programs, designed to strengthen
            family bonds and create lasting memories.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mission;

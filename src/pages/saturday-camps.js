import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import Header from '../components/Header';
import Footer from '../components/Footer';

const SaturdayCamps = () => {
  return (
    <div className='bg-gradient-to-r from-yellow-200 to-indigo-200'>
      <Head>
        <title>Saturday Camps @ Royal Ridges</title>
      </Head>
      <Header />
      <div className='max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen overflow-y-scroll'>
        <Image
          src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/headerPhotos/saturdayCamps.png'
          alt='saturday camp'
          width={400}
          height={400}
          className='w-2/3 mx-auto rounded-2xl shadow-xl mt-2'
        />
        <p className='flex flex-wrap text-green-200 font-cursive text-xl justify-center md:text-3xl'>
          Saturday Horse Camp: Saddle Up for an Unforgettable Equestrian Journey!
        </p>
        <p className='mb-4'>
          Calling all aspiring equestrians! Our Day Horse Camp offers a unique opportunity to delve into
the captivating world of horses. Campers will receive a riding lesson from our team of skilled
and passionate instructors, catering to various experience levels. Beyond the thrill of riding,
participants will gain exciting insights into horse science, learning about equine anatomy,
behavior, and care. Crucial practical skills such as grooming, saddling, and bridling will be
taught, fostering confidence and competence around these magnificent animals. This camp is
not only a chance to develop valuable equestrian skills but also a wonderful environment to
forge new friendships and share a common love for horses.
        </p>

        <Link href='https://updatesroyalridges.org/saturday-horse-camps/' className='hover:underline text-green-200 hover:text-indigo-500'>Click here for available dates</Link>
        <p>
          Embark on your equestrian adventure today! Purchase camp&nbsp;
          <a
            href='https://www.ultracamp.com/info/upcomingSessions.aspx?idCamp=1145&campCode=151&lnkCategory=Saturday+Day+Camps'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:underline hover:text-indigo-400 text-green-200 mt-4'
          >
            here
          </a>
        </p>
        <p className='flex flex-wrap text-green-200 font-cursive text-xl justify-center md:text-xl mt-4'>
          Day Horse Camp
        </p>
        <p>
          Campers have the opportunity to take riding lessons from our
          skilled instructors, learn exciting information in horse
          science, grow valuable skills like grooming and saddling,
          and make friends along the way!
        </p>
        <p>
          Purchase camp&nbsp;
          <a
            href='https://www.ultracamp.com/info/upcomingSessions.aspx?idCamp=1145&campCode=151&lnkCategory=Saturday+Day+Camps'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:underline hover:text-indigo-400 text-green-200 uppercase text-lg mt-4'
          >
            here
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default SaturdayCamps;

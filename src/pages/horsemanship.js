import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import Header from '../components/Header';
import Footer from '../components/Footer';

const RidingLessons = () => {
  return (
    <div className='bg-gradient-to-r from-yellow-200 to-indigo-200'>
      <Head>
        <title>Royal Ridges&#39; Camps Horsemanship Riding Lessons Program</title>
      </Head>
      <Header />
      <div>
        <div className='max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen overflow-y-scroll'>
          <Image
            src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/summer_camp_page/Riding+Lessons+1.0+(3).png'
            alt='outdoor survival'
            width={400}
            height={400}
            className='w-2/3 mx-auto rounded-2xl shadow-xl mt-2'
          />
          <p className='flex flex-wrap text-green-200 font-cursive text-md justify-center md:text-3xl'>
            Royal Ridges&#39; Camps Horsemanship Riding Lessons Program
          </p>
          <p className='mt-2 font-bold'>
            Each Horsemanship lesson incorporates:
          </p>
          <ul className='prose'>
            <li>◾️ Dedicated riding time</li>
            <li>◾️ Fellowship, including prayer, discussion, and Bible topics relevant to horsemanship</li>
            <li>◾️ Horse science education</li>
          </ul>
        <p className='font-bold'>Program Details:</p>
        <ul className='prose mb-4'>
          <li>◾️ Ages: 6 to 18</li>
          <li>◾️ Price: $47 per week</li>
          <li className='font-bold'>◾️ Schedule:</li>
          <li className='ml-2'><span className='underline'>Wednesday:</span>{' '}September - May (10am-12pm)</li>
          <li className='ml-2'><span className='underline'>Thursday:</span>{' '}September - May (4:30pm-6:30pm)</li>
        </ul>

        <Link href='https://updatesroyalridges.org/lessons/' className='hover:underline text-green-200 hover:text-indigo-500'>Click here for the latest updates</Link>
          
          <div className='my-4 text-center text-2xl'>
            <a
              href='https://www.ultracamp.com/info/upcomingSessions.aspx?idCamp=1145&campCode=151&lnkCategory=Horsemanship+Lessons+Vaulting'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline hover:text-indigo-400 text-green-200 font-cursive'
            >
              Sign Up Here
            </a>
          </div>

          <p className='mb-2'>Scholarships may be available upon request for those with financial needs.</p>

          <p className='font-semibold'>Notes:</p>
          <ul className='prose list-disc pb-4'>
            <li>Horsemanship Lessons are once a week.</li>
            <li>
              Classes are 2 hours long and include 45 minutes on a
              horse.{' '}
            </li>
            <li>
              Due to our Summer Day Camp programs, Horsemanship
              Lessons are only offered during the school year.{' '}
            </li>
            <li>
              Winter Break and Spring Break aligned with the Battle
              Ground Public School schedule will also be off.{' '}
            </li>
            <li>
              Make-ups or refunds are not available for students that
              miss class since the instructor and horse still had to
              be available for the class whether you were there or
              not. If a class is canceled by Royal Ridges, a credit
              for the next term will be given.
            </li>
            <li>
              Riders must wear closed-toed sturdy shoes, preferably
              boots, and long pants. Please also wear layers and
              gloves in the winter as it can be colder at the barn
              than it is in town. Helmets are provided, or you can
              wear your own ASTM-certified riding helmet.
            </li>
            <li>
              Participants can withdraw from the program anytime
              during the session, but Royal Ridges requests a two-week
              notice.
            </li>
          </ul>

          <p>
            <span className='font-semibold'>Payments: </span>can be
            made monthly or for the entire term. (Fall, Winter,
            Spring) Unless you notify us otherwise, you will be
            automatically enrolled in the next session/term.
          </p>
          <p className='pb-12'>
            Scholarships may be available upon request for those with
            financial needs.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RidingLessons;

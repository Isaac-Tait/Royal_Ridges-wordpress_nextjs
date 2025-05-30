import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Navigation from '../components/SummerNav';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DayAdventureCamp = () => {
  return (
    <div className='bg-gradient-to-l from-yellow-200 to-indigo-200'>
      <Head>
        <title>Adventure Camp!</title>
      </Head>
      <Header />
      <div className='h-screen overflow-y-scroll px-1 sm:grid sm:grid-cols-2'>
        {/*Column 1*/}
        <div>
          <Navigation />
        </div>
        {/*Column 2*/}
        <div className='mr-4 overflow-y-scroll'>
          <Image
            src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1698884261/royalRidges/Adventure_Camp_Website__24_qs2trn.png'
            alt='day_adventure_camp'
            width={400}
            height={400}
            className='w-1/2 flex mx-auto rounded-xl my-6'
          />
          <Link
            href='https://www.ultracamp.com/info/upcomingSessions.aspx?idCamp=1145&campCode=151&lnkCategory=Adventure+Camp'
            target='_blank'
            rel='noopener noreferrer'
            className='text-yellow-400 font-extrabold text-3xl text-center hover:underline hover:text-indigo-400 flex justify-center'
          >
            Register for Adventure Camp
          </Link>
          <div className='font-semibold text-green-200 ml-4 my-4 text-center'>
            <p>Monday-Friday 9 am - 3:30 pm</p>
            <p>Entering Grades 3rd - 9th</p>
            <p>Adventure Camp (no high ropes)- $235 for the week</p>
            <p>
              Extreme Adventure Camp (with high ropes)- $285 for the
              week
            </p>
            <p>$65 Bus Transportation</p>
            <p>$125 ADD ON Overnight Blast Weeks 2, 4, and 6</p>
          </div>
          <hr />
          <p className='mt-4'>
            Our Adventure Camp is back and better than ever!
            Throughout the week, your camper will learn new outdoor
            survival skills, test their ability on the climbing wall,
            play fun team games like gaga ball and human foosball,
            hone their expertise with slingshots and archery, and
            spend meaningful time exploring the Bible. The Extreme
            Adventure groups will also experience the high ropes
            course and zip-line. Each day your camper will go home
            tired, dirty, and ready for the next day&#39;s adventures!
            Campers must wear closed-toe shoes to participate in
            adventure activities.
          </p>
          <p className='mt-4'>
            Adventure Campers (no high ropes) are divided into the
            following groups:
          </p>
          <p className='font-semibold text-green-200'>
            Explorers: Grades 3-5
          </p>
          <p className='font-semibold text-green-200 mb-4'>
            Navigators: Grades 5-7
          </p>

          <p className='mt-4'>
            Extreme Adventure Campers are divided into the following
            age groups:
          </p>
          <p className='font-semibold text-green-200'>
            Challengers Grades 4th-6th
          </p>
          <p className='font-semibold text-green-200'>
            Mountaineers: Grades 6th-9th
          </p>

          <p className='font-semibold'>
            Adventure Camp Overnight Blast Option:
          </p>
          <p>
            Our Overnight Blast Adventure Program will bring campers
            together for additional adventure activities unique to
            Overnight Blast. Night games will be the highlight of
            their week! Campers will stay overnight in the cabins on
            Thursday night of their week at camp. Dinner on Thursday,
            Breakfast on Friday, and a packed lunch for Friday will be
            provided! There is limited availability, and{' '}
            <span className='uppercase font-semibold'>onb</span> will
            only be available on certain weeks. Please sign up for
            this option early to reserve your space. Do not forget
            your sleeping bag and items needed for the next day.
          </p>
          <p className='mt-2'>Activities to Include:</p>
          <ul className='list-disc mb-2 ml-6'>
            <li className='mt-2'>Dinner and Campfire</li>
            <li className='mt-2'>
              Additional Adventure Camp Activities unique to Overnight
              Blast
            </li>
            <li className='mt-2'>Outdoor Games</li>
          </ul>

          <hr />
          <div className='my-2 ml-2 text-center'>
            <p>
              <span className='text-green-200 font-semibold'>
                Week #1
              </span>{' '}
              - June 16-20
            </p>
            <p>
              <span className='text-green-200 font-semibold'>
                Week #2
              </span>{' '}
              - June 23-27
              <span className='text-md font-semibold'>
                {' '}
                (ONB Available)
              </span>
            </p>
            <p>
              <span className='text-green-200 font-semibold'>
                Week #3
              </span>{' '}
              - June 30 July 3
            </p>
            <span className='italic text-xs'>No Camp on July 4</span>
            <p>
              <span className='text-green-200 font-semibold'>
                Week #4
              </span>{' '}
              - July 7-11
              <span className='text-md font-semibold'>
                {' '}
                (ONB Available)
              </span>
            </p>
            <p>
              <span className='text-green-200 font-semibold'>
                Week #5
              </span>{' '}
              - July 14-18
            </p>
            <p>
              <span className='text-green-200 font-semibold'>
                Week #6
              </span>{' '}
              - July 21-25
              <span className='text-md font-semibold'>
                {' '}
                (ONB Available)
              </span>
            </p>
            <p>
              <span className='text-green-200 font-semibold'>
                Week #7
              </span>{' '}
              - July 28 - August 1
            </p>
            <p>
              <span className='text-green-200 font-semibold'>
                Week #8
              </span>{' '}
              - August 4-8
            </p>
            <p>
              <span className='text-green-200 font-semibold'>
                Week #9
              </span>{' '}
              - August 11-15
            </p>
          </div>
          <a
            href='https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151'
            target='_blank'
            rel='noopener noreferrer'
            className='text-yellow-400 font-extrabold text-3xl text-center hover:underline hover:text-indigo-400 flex justify-center py-10'
          >
            Register for Adventure Camp
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DayAdventureCamp;

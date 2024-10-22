import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import SummerNavigation from '../components/SummerNav';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RecSportCamp() {
  return (
    <div className='bg-gradient-to-r from-yellow-200 to-indigo-200'>
      <Head>
        <title>Recreational Sports Camp @ Royal Ridges</title>
      </Head>
      <Header />
      <div className='h-screen overflow-y-scroll px-1 sm:grid sm:grid-cols-2'>
        {/*Column 1*/}
        <div>
          <SummerNavigation />
        </div>
        {/* Column 2*/}
        <div className='flex flex-col mr-4 overflow-y-scroll'>
          <Link
            href='https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151'
            target='_blank'
            rel='noopener noreferrer'
            className='text-yellow-400 font-extrabold text-3xl hover:underline hover:text-indigo-400 text-center'
          >
            Register for Recreational Sports Camp{' '}
          </Link>
          <div className='font-semibold text-green-200 ml-4 my-4 text-center'>
            <p>Monday-Friday 9 am-3:30 pm </p>
            <p>
              Weeks for campers entering Grades 1st-3rd and 3rd-5th
            </p>
            <p>$215 for the week</p>
            <p>$65 Bus Transportation</p>
          </div>
          <hr />
          <div className='my-4'>
            <p className='text-center'>
              New! Recreational Sports Camp is designed for the camper
              who never wants to get out of the GagaBall pit. We have
              added new sports activities and games so campers can be
              challenged through team activities and practice
              sportsmanship. No previous skills are required! Campers
              will experience team-building activities, explore the
              Bible during daily Bible lessons, sing songs, and visit
              the camp store each day. Recreational Sports Camps are
              divided into two age-level groups.
            </p>
          </div>
          <hr />

          <div className='my-2 ml-2 text-center'>
            <p>Week #1 - June 16-20 (Grades 5 - 7)</p>
            <p>Week #2 - June 23-27 (Grades 1 - 3)</p>

            <p>
              {' '}
              Week #3 - June 30-July 3
              <span className='text-xs italic mb-2'>
                &nbsp;No camp on July 4th
              </span>
              (Grades 3 - 5)
            </p>

            <p>Week #4 - July 7-11 (Grades 5 - 7)</p>

            <p>Week #5 - July 14-18 (Grades 3 - 5)</p>

            <p>Week #6 - July 21-25 (Grades 5 - 7)</p>

            <p>Week #7 - July 28 - August 1 (Grades 1 - 3)</p>

            <p>Week #8 - August 4-8 (Grades 3 - 5)</p>
          </div>
          <Link
            href='https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151'
            target='_blank'
            rel='noopener noreferrer'
            className='text-yellow-400 font-extrabold text-3xl hover:underline hover:text-indigo-400 text-center'
          >
            Register for Recreational Sports Camp{' '}
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

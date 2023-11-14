'use client';
import Link from 'next/link';
import Image from 'next/image';

import Header from '../../(components)/Header';
import Footer from '../../(components)/Footer';

const ProgramsPage = () => {
  return (
    <div className='bg-gradient-to-r from-yellow-100 to-yellow-400'>
      <Header />
      <div className=''>
        <div className='flex justify-center'>
          <Image
            src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283061/royalRidges/icons/ProgramIcon_ocgaad.png'
            alt='programs'
            width={200}
            height={200}
            className='w-1/12 mt-1'
          />
        </div>
        <div className='grid grid-cols-3 lg:grid-cols-4 m-auto h-screen my-4 overflow-auto mx-4'>
          {/*👇🏼First Row*/}
          <div className='justify-self-center relative box-content w-20 md:w-40 lg:w-60 h-20 md:h-40 lg:h-60'>
            <Link href={'/giddy-up'}>
              <Image
                alt='Giddy Up'
                src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283060/royalRidges/icons/GiddyUp_pmxkht.png'
                width={200}
                height={200}
              />
              <div className='text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-yellow-400'>
                <p className='text-white px-1 hidden lg:block'>
                  During the non-summer seasons come on up for a day
                  of fun and fellowship every week
                </p>
              </div>
            </Link>
          </div>

          <div className='justify-self-center relative box-content w-20 md:w-40 lg:w-60 h-20 md:h-40 lg:h-60'>
            <Link href={'/horsemanship'}>
              <Image
                src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283062/royalRidges/icons/RidingLessons_akzhjf.png'
                alt='horse lessons'
                width={200}
                height={200}
              />
              <div className='-mb-2 text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-yellow-200'>
                <p className='px-1 hidden lg:block'>
                  This series offers more than just learning how to
                  ride a horse - you learn to care for them too.
                </p>
              </div>
            </Link>
          </div>

          {/*
                <div className="relative box-content w-20 md:w-40 lg:w-60 h-20 md:h-40 lg:h-64">
                  <Link
                    to={'/adventure-class'}
                  >
                  <Image
                    alt="adventures galore"
                    src={AdventureClass}
                  />
                  <div className="text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-green-200 rounded-full">
                      <p className='text-white px-1 hidden lg:block'>If you are into learning survival and self-sufficiency then this is the place to be.</p>
                    </div>
                  </Link>
                </div>
                */}

          <div className='justify-self-center relative box-content w-20 md:w-40 lg:w-60 h-20 md:h-40 lg:h-60'>
            <Link href={'/girl-scouts'}>
              <Image
                src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283060/royalRidges/icons/GirlScouts_dv4e3q.png'
                alt='Girl Scouts'
                width={200}
                height={200}
              />
              <div className='-mb-2 text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-green-200'>
                <p className='px-1 text-white hidden lg:block'>
                  We have helped hundreds of Girl Scouts get their
                  horsemanship badges. Let us help your troop succeed
                  too!
                </p>
              </div>
            </Link>
          </div>

          <div className='justify-self-center relative box-content w-20 md:w-40 lg:w-60 h-20 md:h-40 lg:h-60'>
            <Link href={'/parent-child'}>
              <Image
                src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283061/royalRidges/icons/ParentChild_nohvt8.png'
                alt='Bears'
                width={200}
                height={200}
              />
              <div className='-mb-2 text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-yellow-400'>
                <p className='text-white px-1 hidden lg:block'>
                  A day of fun, adventures, and memories that will
                  last a life time.
                </p>
              </div>
            </Link>
          </div>

          {/*👇🏼Second Row*/}
          <div className='justify-self-center relative box-content w-20 md:w-40 lg:w-60 h-20 md:h-40 lg:h-60'>
            <Link href={'/saturday-camps'}>
              <Image
                src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283063/royalRidges/icons/SaturdayCamp_t25lgf.png'
                alt='Saturday Camps'
                width={200}
                height={200}
              />
              <div className='-mb-2 text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-yellow-200'>
                <p className='px-1 hidden lg:block'>
                  Are you looking for something for your kids to do
                  over the weekend? Look no further than this popular
                  camp series.
                </p>
              </div>
            </Link>
          </div>

          <div className='justify-self-center relative box-content w-20 md:w-40 lg:w-60 h-20 md:h-40 lg:h-60'>
            <Link href={'/school-break'}>
              <Image
                src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283063/royalRidges/icons/SchoolBreakCamps_hioq8c.png'
                alt='School Break'
                width={200}
                height={200}
              />
              <div className='-mb-2 text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-green-200'>
                <p className='px-2 text-white hidden lg:block'>
                  Need something for junior to do during school break?
                  Send them to Royal Ridges Retreat. We promise to
                  send them back tired and happy.
                </p>
              </div>
            </Link>
          </div>

          <div className='justify-self-center relative box-content w-20 md:w-40 lg:w-60 h-20 md:h-40 lg:h-60'>
            <Link href={'/vaulting'}>
              <Image
                src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283065/royalRidges/icons/Vaulting_wcpn6c.png'
                alt='Vault'
                width={200}
                height={200}
              />
              <div className='-mb-2 text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-yellow-400'>
                <p className='px-1 text-white hidden lg:block'>
                  Vaulting does not have to be scary. Let our fully
                  certified instructors show you the ropes in a fun
                  and safe environment.
                </p>
              </div>
            </Link>
          </div>

          <div className='justify-self-center relative box-content w-20 md:w-40 lg:w-60 h-20 md:h-40 lg:h-60'>
            <Link href={'/paintball'}>
              <Image
                src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283060/royalRidges/icons/Paintball_hzuita.png'
                alt='paintball camp'
                width={200}
                height={200}
              />
              <div className='-mb-2 text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-yellow-200'>
                <p className='px-1 hidden lg:block'>
                  We have the best paintball course in southern
                  Washington. Come and experience it for yourself.
                </p>
              </div>
            </Link>
          </div>

          {/*👇🏼Third Row*/}
          {/*Empty div to center*/}

          <div className='justify-self-center relative box-content w-20 md:w-40 lg:w-60 h-20 md:h-40 lg:h-60'>
            <Link href={'/guest-groups'}>
              <Image
                src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283060/royalRidges/icons/GuestGroup_x9t0gd.png'
                alt='Guest Groups Camp'
                width={200}
                height={200}
              />
              <div className='-mb-2 text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-green-200'>
                <p className='px-1 text-white hidden lg:block'>
                  Looking for a retreat location? Let Royal Ridges
                  Retreat meet and exceed your needs.
                </p>
              </div>
            </Link>
          </div>

          <div className='justify-self-center relative box-content w-20 md:w-40 lg:w-60 h-20 md:h-40 lg:h-60'>
            <Link href={'/book-a-ride'}>
              <Image
                src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283059/royalRidges/icons/Book-a-ride_kvdzff.png'
                alt='Book a Ride'
                width={200}
                height={200}
              />
              <div className='-mb-2 text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-yellow-400'>
                <p className='text-white px-1 hidden lg:block'>
                  A perfect gift for that special someone - great for
                  birthdays, graduation gifts, or just because...
                </p>
              </div>
            </Link>
          </div>
          {/*
                <div className='relative box-content w-20 md:w-40 lg:w-60 h-20 md:h-40 lg:h-64'>
                  <Link
                    to={'/women-horse-camp'}
                  >
                  <Image
                    alt="Women Camp"
                    src={Women}
                  />
                  <div className="text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-yellow-200 rounded-full">
                      <p className='px-1 hidden lg:block'>A day for the ladies to relax in Creation with good friends, great food, and amazing views.</p>
                    </div>
                  </Link>
                </div>
                */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProgramsPage;

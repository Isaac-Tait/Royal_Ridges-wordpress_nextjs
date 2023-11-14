'use client';
import Image from 'next/image';
import Link from 'next/link';

import Header from '../../(components)/Header';
import Footer from '../../(components)/Footer';

const SummerCampPage = () => {
  return (
    <div className='bg-gradient-to-l from-yellow-200 to-green-200'>
      <Header />
      <div className='max-w-6xl mx-auto'>
        <div className='flex justify-center'>
          <Image
            src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283063/royalRidges/icons/SummerIcon_wa521t.png'
            alt='summer'
            width={200}
            height={200}
            className='w-1/12 mt-1'
          />
        </div>
        <div className='grid grid-cols-3 gap-2 h-screen mx-2'>
          {/* Column One */}
          <div className='flex items-center justify-center'>
            <Link href={'/registration'}>
              <Image
                src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283060/royalRidges/icons/CampRegistration_tujq5u.png'
                alt='registration'
                width={200}
                height={200}
                className='w-40 md:w-64 mt-8 mx-auto'
              />
            </Link>
          </div>
          {/* Empty Div */}
          <div></div>
          {/* Column Three */}
          <div className='flex items-center justify-center'>
            <Link href={'/parent-manual'}>
              <Image
                src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283061/royalRidges/icons/ParentManual_bcqq3p.png'
                alt='parents_manual'
                width={200}
                height={200}
                className='w-40 md:w-64 mt-8 mx-auto'
              />
            </Link>
          </div>
          {/* Column One */}
          <div className='flex items-center justify-center'>
            <Link href={'/summer-staff-app'}>
              <Image
                src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283063/royalRidges/icons/SummerStaffApp_za2hzd.png'
                alt='staff_application'
                width={200}
                height={200}
                className='w-40 md:w-64 mt-8 mx-auto'
              />
            </Link>
          </div>
          {/* Empty Div */}
          <div></div>
          {/* Column Three */}
          <div className='flex items-center justify-center'>
            <Link href={'/scholarships'}>
              <Image
                src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283063/royalRidges/icons/Scholarships_e4ztnz.png'
                alt='scholarships'
                width={200}
                height={200}
                className='w-40 md:w-64 mt-8 mx-auto'
              />
            </Link>
          </div>
          {/* Empty Div */}
          <div></div>
          {/* Column Two */}
          <div className='flex items-center justify-center'>
            <Link href={'/faq'}>
              <Image
                src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283060/royalRidges/icons/FAQ_xhpbtl.png'
                alt='facts'
                width={200}
                height={200}
                className='w-40 md:w-64 mx-auto'
              />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SummerCampPage;

import Image from 'next/image';
import Head from 'next/head';

import Navigation from '../components/SummerNav';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Staff = () => {
  return (
    <div className='bg-gradient-to-t from-yellow-200 to-indigo-200'>
      <Head>
        <title>Specialty Horse Camp @ Royal Ridges</title>
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
            src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1698884263/royalRidges/Specialty_Horse_Camps_Web__24_rdtva4.png'
            alt='multi-week-camp'
            width={400}
            height={400}
            className='w-1/2 mx-auto rounded-xl my-6'
          />
          <a
            href='https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151'
            target='_blank'
            rel='noopener noreferrer'
            className='text-yellow-400 font-extrabold text-3xl text-center hover:underline hover:text-indigo-400 flex justify-center'
          >
            Register for Specialty Horse Camps
          </a>
          <p className='mt-2'>
            Theme weeks are suitable for returning campers or
            experienced riders looking for some variety at horse camp.
          </p>
          <hr />
          <div className='text-center'>
            <p>Monday-Friday 9:00 am - 3:30 pm</p>
            <p>$485 for the week</p>
            <p>$60 Bus Transportation</p>
            <p>Ages 8-16</p>
          </div>

          <h3 className='font-semibold text-xl mt-4'>
            Trail Camp{' '}
            <span className='text-sm italic'>&nbsp;ages 10 - 16</span>
            (Week 1 - 8) - $485
          </h3>
          <p className='mb-4'>
            Campers will have a blast getting set to ride the trails.
            They will learn about trail prep, the roles of each trail
            rider, trail safety, and types of knots for packing and
            tying. Riders will have a short arena ride to work on some
            safety skills for the trail and then they will set out on
            a new trail each day, learning new skills along the way.
            Campers should be confident on the horse and have some
            riding experience to enjoy the beauty of the trails.
            Campers should dress in jeans and riding boots with a
            heel.
          </p>

          <h3 className='font-semibold text-xl mt-4'>
            Miniature Horse Driving Camp -{' '}
            <span className='text-sm italic'>&nbsp;ages 9 - 16</span>
            (Week 6) - $485
          </h3>
          <p>
            Campers will get a unique experience learning how to care
            for and drive a miniature horse in a cart. Horse science
            and horse activity will include leading the mini horses
            through patterns and obstacles. Campers will also take the
            reins, learn how to harness a miniature horse, and learn
            new driving skills each day.
          </p>

          <h3 className='font-semibold text-xl mt-4'>
            Vaulting Camp -{' '}
            <span className='text-sm italic'>&nbsp;ages 8 - 16</span>{' '}
            (Week 4) - $485
          </h3>
          <p className='mb-4'>
            This special week-long Vaulting Day Camp program will
            introduce your child to the basics of Vaulting. Vaulting
            is essentially a gymnastic routine performed on horseback
            while the horse is moving. The horse is controlled by a
            staff member on a lunge line, and your vaulter will learn
            basic moves under the supervision and support of our
            vaulting instructor. Vaulting is a wonderful activity for
            the brave horse-loving kiddo as well as the more cautious
            first-time horse lover. Vaulters should wear leggings or
            sweatpants and soft tennis shoes to be more free moving
            and comfortable for the horse.
          </p>
          <hr />
          <div className='text-center mt-6'>
            <p>
              <span className='text-green-200 font-semibold'>
                Week #1
              </span>{' '}
              June 16-20 (ONB and Trail Camp Available)
            </p>
            <p>
              <span className='text-green-200 font-semibold'>
                Week #2
              </span>{' '}
              June 23-27 (Trail Camp Available)
            </p>
            <p>
              <span className='text-green-200 font-semibold'>
                Week #3
              </span>{' '}
              June 30 - July 3&nbsp;
              <span className='italic text-xs'>
                No Camp on July 4
              </span>{' '}
              (Cowpoke and Trail Camp Available)
            </p>
            <p>
              <span className='text-green-200 font-semibold'>
                Week #4
              </span>{' '}
              July 7 - 11 (Vaulting and Trail Camp Available)
            </p>
            <p>
              <span className='text-green-200 font-semibold'>
                Week #5
              </span>{' '}
              July 14 - July 18 (ONB and Trail Camp Available)
            </p>
            <p>
              <span className='text-green-200 font-semibold'>
                Week #6
              </span>{' '}
              July 21 - July 25 (Mini Driving and Trail Camp
              Available)
            </p>
            <p>
              <span className='text-green-200 font-semibold'>
                Week #7
              </span>{' '}
              July 28 - August 1 (ONB and Teen Trail Camp Available)
            </p>
            <p>
              <span className='text-green-200 font-semibold'>
                Week #8
              </span>{' '}
              August 4-8 (Trail Camp Available)
            </p>
            <p>
              <span className='text-green-200 font-semibold'>
                Week #9
              </span>{' '}
              August 11 - August 15
            </p>
          </div>
          <a
            href='https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151'
            target='_blank'
            rel='noopener noreferrer'
            className='text-yellow-400 font-extrabold text-3xl text-center hover:underline hover:text-indigo-400 flex justify-center mb-8'
          >
            Register for Specialty Horse Camps
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Staff;

import Image from 'next/image';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';

const BookARide = () => {
  return (
    <div className='bg-gradient-to-r from-yellow-200 to-indigo-200'>
      <Head>
        <title>Book A Horseback Ride @ Royal Ridges</title>
      </Head>
      <Header />
      <div>
        <div className='max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen'>
          <div className='flex justify-center content-center pt-4'>
            <Image
              src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283059/royalRidges/icons/Book-a-ride_kvdzff.png'
              alt='book a ride'
              width={200}
              height={200}
              className='rounded-xl'
            />
          </div>
          <h3 className='flex flex-wrap text-green-200 font-cursive text-xl justify-center md:text-3xl mb-2'>Book-A-Ride at Royal Ridges Camps</h3>
          <p>Experience horseback riding at Royal Ridges Camps! We offer two options:</p>
          <p className='ml-2'><span className='font-bold'>◾️ Trail Rides:</span>{' '}For guests ages nine and older. No exceptions to the age limit.</p>
          <p className='ml-2'><span className='font-bold'>◾️ Arena Rides:</span>{' '}Available for ages six and up. Your group must choose either a trail ride or
an arena ride, as we cannot accommodate both simultaneously.</p>

          <h3 className='font-bold mt-6'>Ready to Ride?</h3>
          <p>Contact programs@royalridges.org to express your interest.</p>

          <h3 className='font-bold mt-6'>Important Information for Your Ride:</h3>
          <p className='ml-2'><span className='font-bold'>◾️ Arrival Time:</span>{' '}Please arrive 15 minutes before your scheduled ride.</p>
          <p className='ml-2'><span className='font-bold'>◾️ Duration:</span>{' '}The riding time is approximately 45 minutes. Plan for your entire Book-A-Ride
experience to last 1 to 1.5 hours. Your group may have the opportunity to assist with
unsaddling and grooming, at the wrangler's discretion.</p>
          <p className='ml-2'><span className='font-bold'>◾️ Liability Form:</span>{' '}All riders must complete a liability form. Please ensure this is done
before you arrive to avoid wasting your scheduled time. You can access the form here:
<a 
  href='https://waiver.smartwaiver.com/w/qse1rw8pknrsfipt3ktayf/web/'
  target='_blank'
  rel='noopener noreferrer'
  className='hover:underline hover:text-indigo-400 text-green-200'>{' '}Horse Liability Form</a></p>
          <p className='ml-2'><span className='font-bold'>◾️ Safety Requirements:</span>{' '}The weight limit for riders is 250 lbs. For safety reasons,
expectant mothers are not permitted to ride. We kindly ask you to respect our weight
limit, as our horses are older and primarily used for youth and children's programs.</p>
          <p className='ml-2'><span className='font-bold'>◾️ Cancellations:</span>{' '}If you need to cancel your ride, you must do so by noon the day before
your scheduled time. A 50% cancellation fee will apply to the total fee.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookARide;

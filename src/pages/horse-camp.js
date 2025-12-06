import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import Navigation from "../components/SummerNav";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DayHorseCamp = () => {
  return (
    <div className="bg-gradient-to-l from-yellow-200 to-indigo-200">
      <Head>
        <title>Horse Camp @ Royal Ridges</title>
      </Head>
      <Header />
      <div className="h-screen overflow-y-scroll px-1 sm:grid sm:grid-cols-2">
        {/*Column 1*/}
        <div>
          <Navigation />
        </div>
        {/*Column 2*/}
        <div className="mr-4 overflow-y-scroll">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1698884262/royalRidges/Horse_Camp_Website__24_dskych.png"
            alt="day_horse_camp"
            width={400}
            height={400}
            className="w-1/2 mx-auto rounded-xl my-6"
          />
          <Link
            href="https://www.ultracamp.com/info/upcomingSessions.aspx?idCamp=1145&campCode=151&lnkCategory=Horse+Camp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 font-extrabold text-3xl text-center hover:underline hover:text-indigo-400 flex justify-center"
          >
            Register for Horse Camp
          </Link>
          <div className=" text-green-200 ml-4 my-4 text-center">
            <p>Monday-Friday 9 am - 3:30 pm</p>
            <p>8-14 Years Old</p>
            <p>$425 for the week</p>
            <p>$65 Bus Transportation</p>
            <p>$150 ADD ON Overnight Blast Weeks 3, 5, and 7</p>
            <p className="pt-2">
              Special groups designed for younger and older horse lovers
            </p>
          </div>
          <hr />
          <div>
            <p>
              Is your child crazy about horses? Our Horse Camp is the perfect
              fit! Campers will receive daily riding lessons from skilled
              instructors and delve into horse science. They&#39;ll develop
              valuable skills such as grooming and saddling, explore the Bible
              during daily lessons, and forge new friendships. Beyond
              horsemanship, activities include team building, group Bible
              studies, and scenic trail rides. Riders are required to wear
              closed-toe shoes and long pants; helmets are provided.
            </p>
            {/*Updated for 2024*/}
            <p className="text-xl font-bold mt-2">
              Horse Camp Overnight Blast Option
            </p>
            <p>
              Our Overnight Blast Horse Program offers an extended horse
              experience, including an overnight stay in our cabins on Thursday
              night of your camp week. Campers will continue their day at camp
              after regular activities conclude on Thursday. Dinner on Thursday,
              breakfast on Friday, and a packed lunch for Friday are all
              provided. Availability is limited, and this program is only
              offered during specific weeks. We recommend signing up early to
              secure your spot. Don&#39;t forget to bring your sleeping bag and
              any personal items needed for the next day! (Ages 9-16)
            </p>
            <p className="mt-4">Activities to Include:</p>
            <p className="italic ml-2">* Dinner</p>
            <p className="italic ml-2">* Additional Trail or Arena Ride</p>
            <p className="italic ml-2">
              * More Horse Science, Horse Activities, and Groom/Saddle Time
            </p>
            <p className="italic ml-2">* Outdoor Games</p>
          </div>
          <hr />
          <div className="my-2 ml-2 text-center">
            <p>
              <span className="text-green-200 font-semibold">Week #1</span> -
              June 22-26
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #2</span> -
              June 29-July 3
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #3</span> -
              July 6-10 (ONB Available)
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #4</span> -
              July 13-17
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #5</span> -
              July 20-24 (ONB Available)
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #6</span> -
              July 27-31
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #7</span> -
              August 3-7 (ONB Available)
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #8</span> -
              August 10-14
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #9</span> -
              August 17-21
            </p>
          </div>
          <a
            href="https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 py-10 font-extrabold text-3xl text-center hover:underline hover:text-indigo-400 flex justify-center"
          >
            Register for Horse Camp
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DayHorseCamp;

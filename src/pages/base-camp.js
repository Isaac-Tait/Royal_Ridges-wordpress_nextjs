import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/SummerNav";

const DayCamp = () => {
  return (
    <div className="bg-gradient-to-l from-yellow-200 to-indigo-200">
      <Head>
        <title>Base Camp @ Royal Ridges</title>
      </Head>
      <Head>
        <title>Adventure Camp!</title>
      </Head>
      <Header />
      <div className="h-screen overflow-y-scroll px-1 sm:grid sm:grid-cols-2">
        {/*Column 1*/}
        <div>
          <Navigation />
        </div>
        {/*Column 2*/}
        <div className="flex flex-col mr-4 overflow-y-scroll">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1698884263/royalRidges/Base_Camp_Website_2024_pvkljy.png"
            alt="base_camp"
            width={300}
            height={300}
            className="w-1/2 mx-auto rounded-xl my-6"
          />
          <Link
            href="https://www.ultracamp.com/info/upcomingSessions.aspx?idCamp=1145&campCode=151&lnkCategory=Base+Camp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 font-extrabold text-3xl hover:underline hover:text-indigo-400 text-center"
          >
            Register for Base Camp
          </Link>
          <div className="font-semibold text-green-200 ml-4 my-4 text-center">
            <p>Monday-Friday 9 am - 3:30 pm</p>
            <p>Entering Grades 1st-5th</p>
            <p>Spruce and Cedar Groups - $195</p>
            <p>Pony Express - $215</p>
            <p>Bus Transportation - $65</p>
          </div>
          <hr />
          <div className="my-4">
            <p>
              Our Base Camps offer an abundance of activities and fun! Campers
              will engage in games, participate in team-building exercises,
              delve into Bible lessons daily, enjoy singing songs, and visit the
              camp store. Base Camps are structured for two distinct age groups:
            </p>
            <p className="font-bold underline mt-4">
              Spruce Group - Grades 1st - 3rd
            </p>
            <p>
              The Spruce Group&#39;s week is brimming with fun. Campers will
              experience the pony corral and petting zoo, have fun on the giant
              jump pillow, play games, participate in group team-building
              activities, and more!
            </p>

            <p className="font-bold underline mt-4">
              Pony Express! Spruce Group- Grades 1st-3rd
            </p>
            <p>
              For the horse lovers, campers will get to visit the corral a
              second time where they will get an additional lead line ride,
              horse science and grooming. Campers will enjoy all of the fun Base
              Camp activities with the added bonus of more time in the corral!
            </p>

            <p className="font-bold underline mt-4">
              Cedar Group - Grades 3rd - 5th
            </p>
            <p>
              Fun times abound for the Cedar Group campers! From visiting the
              pony corral to an adventurous hike, your child is sure to have a
              great time. Additional activities include fun games, team
              challenges and a visit to the giant jump pillow and so much
              more!{" "}
            </p>
          </div>
          <hr />
          <div className="my-2 ml-2 text-center">
            <p>
              <span className="text-green-200 font-semibold">Week #1</span> -
              June 22-26{" "}
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #2</span> -
              June 29-July 3{" "}
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #3</span> -
              July 6-10{" "}
              <span className="italic text-xs">No Camp on July 4</span>
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #4</span> -
              July 13-17{" "}
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #5</span> -
              July 20-24{" "}
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #6</span> -
              July 27-31{" "}
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #7</span> -
              August 3-7{" "}
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #8</span> -
              August 10-14{" "}
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #9</span> -
              August 17-21{" "}
            </p>
            {/* <p>
              <span className='text-green-200 font-semibold'>
                Week #10
              </span>{' '}
              - August 19-23
            </p> */}
          </div>
          <a
            href="https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 font-extrabold text-3xl my-10 hover:underline hover:text-indigo-400 text-center bg-indigo-300"
          >
            Register for Base Camp
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DayCamp;

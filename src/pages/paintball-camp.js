import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import Navigation from "../components/SummerNav";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DayPaintBall = () => {
  return (
    <div className="bg-gradient-to-l from-yellow-200 to-indigo-200">
      <Head>
        <title>Paintball Camp @ Royal Ridges</title>
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
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1698884263/royalRidges/Paintball_Camp_Website_2024_m3rhge.png"
            alt="paintball_day_camp"
            width={400}
            height={400}
            className="w-1/2 flex mx-auto rounded-xl my-6"
          />
          <Link
            href="https://www.ultracamp.com/info/upcomingSessions.aspx?idCamp=1145&campCode=151&lnkCategory=Paintball+Camp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 font-extrabold text-3xl text-center hover:underline hover:text-indigo-400 flex justify-center"
          >
            Register for Paintball Camp
          </Link>
          <div className="font-semibold text-green-200 ml-4 my-4 text-center">
            <p>Monday-Friday 9 am - 3:30 pm</p>
            <p>$380 for the week</p>
            <p>$65 Bus Transportation</p>
            <p>SPLAT Entering Grades 3rd - 6th</p>
            <p>EXTREME Entering Grades 6th - 10th</p>
          </div>
          <hr />
          <p>
            <span className="text-green-200 font-semibold">
              Paintball Day Camp
            </span>
            &nbsp;~&nbsp;At our Paintball Day Camp, Campers learn to play the
            extreme sport of Paintball. Campers learn the game&#39;s finer
            points in the morning while fine-tuning their skills. Team building
            activities help teach communication skills while we grow our
            character through daily Bible Study. The last three hours of the day
            are game time when it is time to sling paint!
          </p>
          <p className="italic mt-4">
            <span className="font-semibold">Extreme</span>uses conventional
            markers and balls at 240-260 fps, with woodsball being the primary
            emphasis.
          </p>
          <p className="italic my-4">
            <span className="font-semibold">Splat</span> is our low-impact
            paintball, which uses makers with a smaller paintball and a max
            speed of 140 fps.
          </p>
          <hr />
          <div className="my-2 ml-2 text-center">
            <p>
              <span className="text-green-200 font-semibold">Week #1</span> -
              June 6-10
              <span className="text-green-200 font-bold">
                &nbsp;SPLAT Grades 3-5
              </span>
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #2</span> -
              June 29-July 3
              <span className="text-green-200 font-bold">
                &nbsp;SPLAT Grades 4-6
              </span>
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #3</span> -
              July 6-10{" "}
              <span className="text-yellow-400 font-bold">
                &nbsp;EXTREME Grades 6-10
              </span>
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #4</span> -
              July 13-17
              <span className="text-green-200 font-bold">
                &nbsp;SPLAT Grades 3-5
              </span>
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #5</span> -
              July 20-24
              <span className="text-green-200 font-bold">
                &nbsp;SPLAT Grades 4-6
              </span>
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #6</span> -
              July 27-31
              <span className="text-yellow-400 font-bold">
                &nbsp;EXTREME Grades 6-10
              </span>
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #7</span>{" "}
              August 3-7
              <span className="text-green-200 font-bold">
                &nbsp;SPLAT Grades 4-6
              </span>
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #8</span> -
              August 10-14
              <span className="text-green-200 font-bold">
                &nbsp;SPLAT Grades 3-5
              </span>
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #9</span> -
              August 17-21
              <span className="text-yellow-400 font-bold">
                &nbsp;EXTREME Grades 6-10
              </span>
            </p>
          </div>
          <a
            href="https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 font-extrabold text-3xl text-center hover:underline hover:text-indigo-400 flex justify-center py-10"
          >
            Register for Paintball Camp
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DayPaintBall;

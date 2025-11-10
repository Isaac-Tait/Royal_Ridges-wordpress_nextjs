import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/SummerNav";

const SportCamp = () => {
  return (
    <div className="bg-gradient-to-l from-yellow-200 to-indigo-200">
      <Head>
        <title>Sports Camp @ Royal Ridges</title>
      </Head>
      <Head>
        <title>Sports Camp!</title>
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
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1729788080/Royal-Ridges/Rec_Sport_Camp_UC_25_qoz6cf.png"
            alt="sports_camp"
            width={300}
            height={300}
            className="w-1/2 mx-auto rounded-xl my-6"
          />
          <Link
            href="https://www.ultracamp.com/info/upcomingSessions.aspx?idCamp=1145&campCode=151&lnkCategory=Recreational+Sports+Camp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 font-extrabold text-3xl hover:underline hover:text-indigo-400 text-center"
          >
            Register for Sports Camp
          </Link>
          <div className="font-semibold text-green-200 ml-4 my-4 text-center">
            <p>Monday-Friday 9 am - 3:30 pm</p>
            <p>Weeks for campers entering Grades 1st-3rd and 3rd-5th</p>
            <p>$225 for the week</p>
            <p>Bus Transportation - $65</p>
          </div>
          <hr />
          <div className="my-4">
            <div className="mb-4">
              <p>
                Our Recreational Sports Camp is ideal for active campers,
                especially those who enjoy GagaBall. We've added new sports
                activities and games to offer team-based fun and promote good
                sportsmanship, with no prior experience needed. Campers will
                take part in team-building exercises, daily Bible lessons,
                singing, and visits to the camp store. We offer Recreational
                Sports Camps for three different age groups.
              </p>
            </div>
            <hr />
            <div className="my-4 ml-2 text-center">
              <p>
                <span className="text-green-200 font-semibold">Week #1</span> -
                June 22-26 (Grades 5-7){" "}
              </p>
              <p>
                <span className="text-green-200 font-semibold">Week #2</span> -
                June 29-July 3 (Grades 3-5){" "}
              </p>
              <p>
                <span className="text-green-200 font-semibold">Week #3</span> -
                July 6-10 (Grades 1-3){" "}
                <span className="italic text-xs">No Camp on July 4</span>
              </p>
              <p>
                <span className="text-green-200 font-semibold">Week #4</span> -
                July 13-17 (Grades 5-7){" "}
              </p>
              <p>
                <span className="text-green-200 font-semibold">Week #5</span> -
                July 20-24 (Grades 3-5){" "}
              </p>
              <p>
                <span className="text-green-200 font-semibold">Week #6</span> -
                July 27-31 (Grades 5-7){" "}
              </p>
              <p>
                <span className="text-green-200 font-semibold">Week #7</span> -
                August 3-7 (Grades 1-3){" "}
              </p>
              <p>
                <span className="text-green-200 font-semibold">Week #8</span> -
                August 10-14 (Grades 3-5){" "}
              </p>
              <div className="my-10">
                {" "}
                <a
                  href="https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 font-extrabold text-3xl hover:underline hover:text-indigo-400 text-center"
                >
                  Register for Sports Camp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportCamp;

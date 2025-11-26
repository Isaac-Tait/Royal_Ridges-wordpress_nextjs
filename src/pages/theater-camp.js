import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/SummerNav";

const TheaterCamp = () => {
  return (
    <div className="bg-gradient-to-l from-yellow-200 to-indigo-200">
      <Head>
        <title>Theater Camp @ Royal Ridges</title>
      </Head>
      <Head>
        <title>Theater Camp!</title>
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
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1762742804/Royal-Ridges/Theater_Camp_UC_26_kndmdh.png"
            alt="sports_camp"
            width={300}
            height={300}
            className="w-1/2 mx-auto rounded-xl my-6"
          />
          <Link
            href="https://www.ultracamp.com/info/upcomingSessions.aspx?idCamp=1145&campCode=151&lnkCategory=Arts+and+Crafts+Camp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 font-extrabold text-3xl hover:underline hover:text-indigo-400 text-center"
          >
            Register for Theater Camp
          </Link>
          <div className="font-semibold text-green-200 ml-4 my-4 text-center">
            <p>Monday-Friday 9 am - 3:30 pm</p>
            <p>Weeks for campers entering Grades 3rd-5th and 6th-8th</p>
            <p>$225 for the week</p>
            <p>Bus Transportation - $65</p>
          </div>
          <hr />
          <div className="my-4">
            <div className="mb-4">
              <p>
                Unleash your child&#39;s creativity in our Theater Camp! Theater
                camp is designed for outgoing and charismatic campers who enjoy
                center stage. Each day, campers will be challenged with drama
                and improv games and will spend time each day practicing for a
                skit to present to younger groups at the end of the week. The
                camp also includes daily Bible lessons, singing, team-building
                activities, and visits to the camp store. Theater Camps are
                offered for two weeks for two distinct age groups.
              </p>
            </div>
            <hr />
            <div className="my-4 ml-2 text-center">
              <p>
                <span className="text-green-200 font-semibold">Week #5</span> -
                July 20-24 (Grades 3-5)
              </p>
              <p>
                <span className="text-green-200 font-semibold">Week #7</span> -{" "}
                August 3-7 (Grades 6-8)
              </p>
              <div className="my-10">
                {" "}
                <a
                  href="https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 font-extrabold text-3xl hover:underline hover:text-indigo-400 text-center"
                >
                  Register for Theater Camp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TheaterCamp;

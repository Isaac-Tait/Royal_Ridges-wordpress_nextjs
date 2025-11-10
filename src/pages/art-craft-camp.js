import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import SummerNavigation from "../components/SummerNav";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RecSportCamp() {
  return (
    <div className="bg-gradient-to-r from-yellow-200 to-indigo-200">
      <Head>
        <title>Arts and Crafts Camp</title>
      </Head>
      <Header />
      <div className="h-screen overflow-y-scroll px-1 sm:grid sm:grid-cols-2">
        {/*Column 1*/}
        <div>
          <SummerNavigation />
        </div>
        {/* Column 2*/}
        <div className="flex flex-col mr-4 overflow-y-scroll">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1729788079/Royal-Ridges/Art_Camp_UC_25_okj2zb.png"
            alt="art and craft camp"
            width={400}
            height={400}
            className="w-1/2 flex mx-auto rounded-xl my-6"
          />
          <Link
            href="https://www.ultracamp.com/info/upcomingSessions.aspx?idCamp=1145&campCode=151&lnkCategory=Arts+and+Crafts+Camp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 font-extrabold text-3xl hover:underline hover:text-indigo-400 text-center"
          >
            Register for Arts and Crafts Camp
          </Link>
          <div className="font-semibold text-green-200 ml-4 my-4 text-center">
            <p>Monday-Friday 9 am-3:30pm</p>
            <p>Weeks for campers entering Grades 1st-3rd, 3rd-5th, 6th-9th*</p>
            <p>$225 for the week</p>
            <p>$65 Bus Transportation</p>
          </div>
          <hr />
          <p className="my-4">
            Our Arts and Crafts Camp is designed for creative campers who enjoy
            drawing, painting, and making things. Each day, campers will engage
            in an art or craft activity to foster their creativity and
            imagination, along with outdoor games and play time. The camp also
            includes daily Bible lessons, singing, team-building activities, and
            visits to the camp store. Arts and Crafts Camps are offered for two
            distinct age groups. *(One week available for grades 6-9.)
          </p>
          <hr />
          <div className="my-2 ml-2 text-center">
            <p>
              <span className="text-green-200 font-semibold">Week #1</span> June
              22-26 (Grades 3 - 5)
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #2</span> June
              29-July 3 (Grades 1 - 3)
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #3</span> July
              13-17 (Grades 3 - 5)
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #4</span> July
              13-17 (Grades 1 - 3)
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #5</span> July
              20-24 (Grades 6 - 9)
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #6</span> July
              27-30 (Grades 1 - 3)
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #7</span>{" "}
              August 3 - 7 (Grades 3 - 5)
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #8</span>{" "}
              August 10-14 (Grades 1 - 3)
            </p>
          </div>
          <Link
            href="https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 font-extrabold text-3xl hover:underline hover:text-indigo-400 text-center"
          >
            Register for Arts and Crafts Camp
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

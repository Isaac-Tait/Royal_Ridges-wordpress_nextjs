import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import Navigation from "../components/SummerNav";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SummerReg = () => {
  return (
    <div className="bg-gradient-to-l from-yellow-200 to-indigo-200">
      <Head>
        <title>Register for Summer Camp</title>
      </Head>
      <Header />
      <div className="h-screen overflow-auto px-1 sm:grid sm:grid-cols-2">
        {/*Column 1*/}
        <div>
          <Navigation />
        </div>
        {/*Column 2*/}
        <div className="mr-4 ">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1762742806/Royal-Ridges/Summer_Camp_Descriptions_-_2026_ry4mg8.png"
            alt="summer camp descriptions"
            width={400}
            height={400}
            className="w-1/2 flex mx-auto rounded-xl my-6"
          />
          {/* Mobile Text */}
          <div className="text-center md:hidden text-xs italic w-2/3 mx-auto">
            <p className="mb-1">
              To access specific information about our camps tap the
            </p>
            <span className="text-yellow-200 bg-yellow-400 p-1 rounded-lg w-fit">
              Summer Camp Options
            </span>
            <p className="mt-1">button above the image</p>
          </div>
          <hr />
          <p>
            Packed with high-energy fun, our Summer Camps offer engaging games,
            team-building challenges, daily Bible studies, and spirited camp
            songs, along with trips to the Camp Store. Expect your camper to
            return home delightfully tired and dirty after an action-packed day!
            Please keep in mind that core Bible themes and primary activities
            remain the same across weeks within each camp. To keep your child
            comfortable, dress them in weather-appropriate attire (coat
            recommended for chilly mornings) along with sturdy, closed-toe shoes
            (no Crocs). Pack a refillable water bottle and a lunch in a
            self-insulated container. To promote full participation and
            connection,{" "}
            <span className="font-bold underline">
              electronic devices are not permitted.
            </span>
          </p>
          {/*New Content for 2024*/}
          <p className="font-semibold text-xl text-green-200 text-center mt-4">
            What&#39;s New for Summer Camp 2027!
          </p>
          <p className="text-center font-bold">
            We&#39;re looking forward to Summer Camp 2027 and are delighted to
            let you know about exciting new adventures and changes.
          </p>

          <p className="mt-2">
            <span className="font-bold">NEW this summer…Airsoft Camp!</span>{" "}
            Campers will engage in exciting, team-building airsoft games and
            daily educational activities that offer both challenge and fun.
          </p>
          <div className="text-center">
            <p className="text-xs italic mt-4">
              For questions regarding registrations, please email{" "}
              <a
                href="mailto:registrations@royalridges.org"
                className="underline text-green-200 hover:text-indigo-500"
              >
                our Registrations department
              </a>
            </p>
            <p className="text-xs italic mb-8">
              For questions regarding our summer camp programs please email{" "}
              <a
                href="mailto:programs@royalridges.org"
                className="underline text-green-200 hover:text-indigo-500"
              >
                our Programs department
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SummerReg;

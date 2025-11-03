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
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1729788080/Royal-Ridges/Summer_Camp_Descriptions_-_2025_ldu6mg.png"
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
            Our Summer Camps are packed with fun, featuring games, team-building
            activities, Bible studies, and lively camp songs. Campers will also
            have the opportunity to visit the Camp Store. Be prepared for your
            camper to come home tired and a bit dirty from their exciting day!
            Please note that within each camp, the Bible themes and main
            activities are repeated each week. For your camper's comfort, please
            ensure they wear weather-appropriate clothing (mornings can be
            chilly, so a coat is recommended) and closed-toe shoes. Remember to
            pack a lunch in a self-insulated lunch box and a water bottle. To
            encourage a focused and engaging experience,{" "}
            <span className="font-bold underline">please do not</span> send your
            camper with any electronic devices.
          </p>
          {/*New Content for 2024*/}
          <p className="font-semibold text-xl text-green-200 text-center mt-4">
            What&#39;s New for Summer Camp 2026!
          </p>
          <p className="text-center font-bold">
            We&#39;re looking forward to Summer Camp 2026 and are delighted to
            let you know about some exciting new adventures and changes.
          </p>
          <ul className="list-disc mb-2 ml-6">
            <li className="mt-2">
              <span className="font-bold">
                Introducing the NEW Pony Express Camp!{" "}
              </span>
              This exciting adaptation of Base Camp is designed for Spruce
              campers eager for more time with horses. Campers will enjoy an
              extra visit to the corral, gaining additional grooming and horse
              science experience, all while participating in the classic Base
              Camp activities.
            </li>
            <li className="mt-2">
              <span className="font-bold">New this Summer: Theater Camp! </span>
              Unleash your inner star at our new Theater Camp, available for
              select weeks this summer! This camp is perfect for creative,
              outgoing campers who love to act. Throughout the week, campers
              will engage in drama skill-building games and work together to
              prepare a play, culminating in a special performance for our
              younger campers.
            </li>
          </ul>
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

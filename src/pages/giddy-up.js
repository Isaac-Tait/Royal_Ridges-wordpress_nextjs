import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import Header from "../components/Header";
import Footer from "../components/Footer";
import GiddyupSchedule from "../components/GiddyupSchedule";

const GiddyUp = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-200 to-indigo-200">
      <Head>
        <title>Giddy Up Program</title>
      </Head>
      <Header />
      <div>
        <div className="max-w-6xl h-screen overflow-y-scroll mx-2 md:mx-auto text-xs md:text-base">
          <Image
            src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/headerPhotos/giddyUp.png"
            alt="giddy up"
            width={400}
            height={400}
            className="w-2/3 mx-auto rounded-xl shadow-2xl mt-2"
          />
          <p className="flex flex-wrap text-green-200 font-cursive text-md justify-center md:text-3xl">
            Giddy Up: Year-Round Camp Fun!
          </p>
          <p className="flex flex-wrap text-green-200 text-md justify-center md:text-xl">
            &quot;Giddy Up&quot; means to move forward or accelerate, and that's
            exactly what our program does—helping campers keep their summer camp
            excitement alive throughout the entire year!
          </p>

          <p className="my-2">
            <span className="font-bold">Program Overview</span>
            Designed for children ages 5 to 12, the Giddy Up program provides an
            exciting &quot;Day at Camp&quot; experience twice a month on
            Wednesdays from September through May, running from 9:00 am to 3:00
            pm. Campers will participate in classic camp activities, games, and
            wonderful opportunities to make friends and socialize. Each month
            features two unique Wednesday sessions: the first is dedicated to
            &quot;Horse Fun&quot;, while the second is focused on Outdoor
            Fun&quot;.
          </p>

          <p className="mt-4">
            The Giddy Up program runs from September through May - every
            Wednesday from 9:00 am - 3:00 pm.
          </p>
          <p>Ages: 5 - 12</p>
          <p>Price: $35 per session</p>
          <p>Single-day drop-off option available ($40)</p>
          <p>Dates: September - May</p>
          <p>
            Schedule: Every Wednesday (two sessions each month), 9:00 am - 3:00
            pm <span className="text-sm italics">*See schedule below</span>
          </p>

          <div className="my-4 hover:underline text-green-200 hover:text-indigo-500">
            <Link
              href="https://updatesroyalridges.org/giddyup-wednesdays/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here for the latest updates!
            </Link>

            <Link
              href="https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click Here To Register
            </Link>
          </div>

          <p className="font-bold">Important Notes:</p>
          <ul className="list-disc">
            <li className="my-2">
              ● Please ensure your camper is dressed in weather-appropriate
              attire, such as layers, gloves, long pants, sturdy footwear, and
              rain gear.
            </li>
            <li className="my-2">
              ● Be sure to pack a lunch, a snack, and a refillable water bottle.
            </li>
            <li className="my-2">
              ● Morning drop-off and afternoon pick-up take place at the lower
              camp two-rail fence archway at 9:00 am and 3:00 pm, respectively.
              Program staff will shuttle campers up the hill for morning
              activities, and covered spaces are available on cold or rainy
              days.
            </li>
            <li className="my-2">
              ● Refunds or make-up sessions are not provided for missed days.
              However, if Royal Ridges cancels a session, a credit will be
              issued.
            </li>
            <li className="my-2">
              ● GiddyUp Day at Camp is offered exclusively during the school
              year due to our Summer Camp operations.
            </li>
            <li className="my-2">
              ● Sessions will not be held during Winter Break and Spring Break,
              aligning with the Battle Ground Public School calendar.
            </li>
          </ul>

          <p className="my-2">
            You can pay in full or choose a monthly payment plan.
            <br />
            <strong>
              One-day drop-in options ($40) can be booked by calling
              360.686.3737 or via email at
              <Link
                href="mailto:registrations@royalridges.org"
                className="hover:underline"
              >
                registrations@royalridges.org
              </Link>
              .
            </strong>
          </p>

          <GiddyupSchedule />

          <p className="font-bold">Ready to Sign Up?</p>
          <div className="text-lg my-6">
            <a
              href="https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-indigo-400 text-green-200 font-cursive"
            >
              Click Here To Register
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GiddyUp;

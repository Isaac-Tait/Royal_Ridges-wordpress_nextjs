import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import Header from "../components/Header";
import Footer from "../components/Footer";

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
          <p>
            ● Please ensure your camper is dressed in weather-appropriate
            attire, such as layers, gloves, long pants, sturdy footwear, and
            rain gear.
          </p>
          <p>
            ● Be sure to pack a lunch, a snack, and a refillable water bottle.
          </p>
          <p>
            ● Morning drop-off and afternoon pick-up take place at the lower
            camp two-rail fence archway at 9:00 am and 3:00 pm, respectively.
            Program staff will shuttle campers up the hill for morning
            activities, and covered spaces are available on cold or rainy days.
          </p>
          <p>
            ● Refunds or make-up sessions are not provided for missed days.
            However, if Royal Ridges cancels a session, a credit will be issued.
          </p>
          <p>
            ● GiddyUp Day at Camp is offered exclusively during the school year
            due to our Summer Camp operations.
          </p>
          <p>
            ● Sessions will not be held during Winter Break and Spring Break,
            aligning with the Battle Ground Public School calendar.
          </p>

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

          <p className="uppercase font-semibold">Notes:</p>
          <ul className="list-disc">
            <li>
              * Please dress your camper in weather-appropriate clothing
              (layers, gloves, long pants, sturdy shoes, rain jackets, etc.)
            </li>
            <li>
              * Pack a lunch and a snack and send a refillable water bottle.
            </li>
            <li>
              * Drop off and pick up is at the lower camp two-rail fence archway
              at 9 am and 3 pm. Campers will be shuttled up the hill by program
              staff for morning activities. Covered, warm spaces are available
              on rainy and cold days.
            </li>
            <li>
              * Make-ups or refunds are not available for campers that miss a
              day. If Royal Ridges cancel a day, a credit for the next term will
              be given.
            </li>
            <li>
              * Due to our Summer Camp programs, GiddyUp Day at Camp is only
              offered during the school year.
            </li>
            <li>
              * Winter Break and Spring Break are aligned with the Battle Ground
              Public School schedule and will also be off.
            </li>
            <li>
              * Participants can withdraw from the program at any time during
              the session but Royal Ridges requests a two week notice.
            </li>
          </ul>

          <p className="my-2">
            <span className="font-bold">Payments: </span>can be made monthly or
            for the entire term. (Fall, Winter, Spring) Unless you notify us
            otherwise, you will be automatically enrolled in the next
            session/term.
          </p>
          <p>
            Scholarships may be available upon request for those with financial
            needs.
          </p>

          <div className="pb-20 text-center text-4xl mt-6">
            <a
              href="https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-indigo-400 text-green-200 font-cursive"
            >
              Sign Up Here
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GiddyUp;

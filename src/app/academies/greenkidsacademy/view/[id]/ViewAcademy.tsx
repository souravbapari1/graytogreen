import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ViewAcademy() {
  return (
    <div className={`container ${montserrat.className} py-20`}>
      <div className="">
        <div className="">
          <h1 className="md:text-2xl mb-5 font-bold">Academy</h1>
          <h3 className="md:text-4xl text-2xl font-bold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet,
            perspiciatis.
          </h3>
          <p className="font-semibold mt-5">Country - DE</p>
          <p className="mt-2">Date - 12. Oct 2024</p>
          <div className="flex md:flex-row flex-col gap-8  justify-between mt-10 items-center">
            <p className="font-semibold text-lg">Participate for free</p>
            <Link
              href="academies/greenkidsacademy/registration/adad"
              className="donateBtn py-3 shadow-none rounded-2xl"
            >
              Register Now
            </Link>
          </div>
          <br />
          <br />

          <div className="grid md:grid-cols-4 md:gap-5 border-b-2 border-t-2">
            <div className="border-l-2 border-r-2 md:border-b-0 border-b-2 p-5">
              <p className="text-xl font-bold mb-2">Time</p>
              <p>09:00 - 17:15</p>
            </div>
            <div className=" border-r-2 p-5 md:border-b-0 border-b-2 md:border-l-0 border-l-2">
              <p className="text-xl font-bold mb-2">Schedule</p>
              <Link href="#">View Flyer</Link>
            </div>
            <div className=" border-r-2 p-5 md:border-b-0 border-b-2 md:border-l-0 border-l-2">
              <p className="text-xl font-bold mb-2">Max Participants</p>
              <p>09:00 - 17:15</p>
            </div>
            <div className=" border-r-2 p-5 md:border-l-0 border-l-2">
              <p className="text-xl font-bold mb-2">Language</p>
              <p className="uppercase">de</p>
            </div>
          </div>

          <br />
          <br />

          <div className="">
            <Image
              src="https://www.plant-for-the-planet.org/wp-content/uploads/2023/02/girl-at-a-plant-for-the-planet-academy-in-bhutan.jpeg"
              width={1200}
              height={600}
              alt=""
              className="w-full h-auto rounded-3xl"
            />
            <div className="max-w-[1150px] mx-auto mt-20">
              <div>
                <h1>Kids Learn About Climate Crisis and Global Justice</h1>
                <section>
                  <h2>Climate Crisis and Global Justice</h2>
                  <p>
                    <strong>
                      What is the climate crisis and what does it cause?
                    </strong>{" "}
                    - The climate crisis refers to the rapid and harmful changes
                    in the climate caused by human activity, primarily through
                    the release of greenhouse gases. It affects ecosystems,
                    communities, and economies worldwide, leading to more severe
                    weather, rising sea levels, and habitat destruction.
                  </p>

                  <p>
                    <strong>
                      How does it affect different places in the world?
                    </strong>{" "}
                    - While the climate crisis is a global issue, its impacts
                    are felt more severely in certain regions. Low-lying areas
                    face flooding, and dry regions may experience harsher
                    droughts, endangering food security and people's lives.
                  </p>
                </section>
                <br />
                <section>
                  <h2>Ecological Relationships</h2>
                  <p>
                    <strong>
                      What impact do trees have on the climate crisis?
                    </strong>{" "}
                    - Trees absorb carbon dioxide (CO2) during photosynthesis,
                    helping to reduce the amount of this greenhouse gas in the
                    atmosphere. Planting more trees is one of the natural
                    solutions to mitigate the effects of climate change.
                  </p>

                  <p>
                    <strong>How do trees help reduce CO2?</strong> - Trees act
                    as "carbon sinks" by capturing and storing carbon, which
                    would otherwise contribute to global warming. Their presence
                    plays a vital role in balancing the carbon cycle.
                  </p>
                </section>
                <br />
                <section>
                  <h2>Ideas for Activities</h2>
                  <p>
                    <strong>What can you do yourself?</strong> - Take small but
                    meaningful steps like planting trees, reducing waste, and
                    using less energy. You can also spread awareness among your
                    friends, school, or even reach out to the media about
                    climate action!
                  </p>
                  <p>
                    <strong>How can you influence others?</strong> - Organize
                    group discussions, initiate school projects, or use social
                    media platforms to advocate for sustainable practices.
                  </p>
                </section>
                <br />
                <section>
                  <h2>What to Bring</h2>
                  <ul>
                    <li>
                      Weather-appropriate clothing (optional change of clothes)
                    </li>
                    <li>Rubber boots and spare shoes</li>
                    <li>Work/gardening gloves for planting</li>
                    <li>Shovel or spade, if possible</li>
                    <li>
                      Water bottle (drinks will be available on-site, but we
                      prefer avoiding disposable cups)
                    </li>
                  </ul>
                  <br />
                  <p>Please label your belongings with your name.</p>
                </section>
                <br />
                <section>
                  <h2>Participation and Catering</h2>
                  <p>Participation and catering are free of charge.</p>
                  <p>
                    <strong>Dear parents</strong>, you are cordially invited to
                    the closing event starting at 16:30.
                  </p>
                </section>
                <br />
                <section>
                  <h2>Supported by:</h2>
                  <p>
                    This academy is held under the patronage of Mayor Norbert
                    Riepl and supported by Gärtnerei Winkler in Odelzhausen.
                  </p>
                </section>
                <br />
                <section>
                  <h2>Address</h2>
                  <p>Schulstraße 11, Oberschweinbach, 82294, Germany</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewAcademy;

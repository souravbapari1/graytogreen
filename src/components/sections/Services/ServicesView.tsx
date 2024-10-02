import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ServicesListView() {
  // Industry Titles and Images Array
  const industries = [
    {
      title: "Energy & Oil and Gas",
      image:
        "https://www.ep2c-energy.com/wp-content/uploads/2020/02/EP2C-Energy_OilGas_img1.jpg", // replace with real URLs
    },
    {
      title: "Construction",
      image:
        "https://www.worldconstructiontoday.com/wp-content/uploads/2020/11/constructon-worker-wellfare.jpg",
    },
    {
      title: "Transportation",
      image:
        "https://www.globaltranz.com/wp-content/uploads/sites/2/terminology.jpg",
    },
    {
      title: "Manufacturing",
      image:
        "https://www.mrpeasy.com/blog/wp-content/uploads/2019/03/discrete-manufacturing-process-manufacturing.jpg",
    },
    {
      title: "Finance, Banking",
      image:
        "https://securityintelligence.com/wp-content/uploads/2020/06/si-catagory-bankingAndFinance@2x.jpg",
    },
    {
      title: "Healthcare",
      image:
        "https://www.zebra.com/content/dam/zebra_dam/global/photography/application/0006/healthcare-photography-application-et40-hc-et45-hc-patient-identification-bedside-16x9-3600.jpg.imgo.jpg",
    },
    {
      title: "Agriculture",
      image:
        "https://images.cnbctv18.com/wp-content/uploads/2021/03/tractor1.jpg?impolicy=website&width=1200&height=900",
    },
    {
      title: "Education",
      image:
        "https://www.unicef.org/sites/default/files/styles/hero_tablet/public/Hero%20-%20Transforming%20Education%20%2811%29.jpg.webp?itok=YVdEA0yi",
    },
    {
      title: "Retail",
      image:
        "https://assets.ey.com/content/dam/ey-sites/ey-com/en_in/news/2022/11/ey-women-shopping-in-store.jpeg.rendition.690.460.jpg",
    },
    {
      title: "Other",
      image:
        "https://www.yukonwellness.ca/wp-content/uploads/2020/02/Reaching-out-for-support.jpg",
    },
  ];

  return (
    <div
      className={`${montserrat.className} container grid xl:grid-cols-10 my-20 gap-10`}
    >
      {/* Top Section */}
      <div className="w-full md:bg-main/10 rounded-3xl xl:col-span-10 sm:p-6 md:p-8 lg:p-12 shadow-lg">
        <h1 className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-4 md:mb-6 leading-tight text-gray-900">
          Transform your ideas into <span className="text-main">Action</span>!
        </h1>
        <p className="text-base sm:text-sm md:text-lg text-gray-700 leading-relaxed sm:mb-6 md:mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          maiores rem dolorem a expedita itaque impedit esse, voluptates
          commodi. Dignissimos exercitationem minima sapiente blanditiis
          consectetur error dolorum animi atque dicta.
        </p>
        <h2 className="text-2xl sm:text-xl md:text-3xl font-bold col-span-10 mb-4 sm:mb-6 text-main">
          Industries
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {industries.map((industry, i) => (
            <div
              key={i}
              className="h-48 md:h-64 lg:h-40 relative w-full overflow-hidden  hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={industry.image}
                width={1200}
                height={1200}
                alt={`Industry Image for ${industry.title}`}
                className="w-full h-full object-cover absolute top-0 right-0"
              />
              <div className="w-full h-full bg-gradient-to-t from-black/60 via-black/30 to-transparent relative flex justify-center items-center text-center">
                <p className="text-lg sm:text-base md:text-xl lg:text-xl p-5 font-bold text-white">
                  {industry.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col gap-12 xl:col-span-10 xl:mt-10 xl:mb-6">
        {/* Row 1 */}
        <div className="grid md:grid-cols-2 gap-8">
          <ServiceCard
            icon="🤝"
            title="Partner With Us"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ullam expedita vero aspernatur, placeat alias ipsam saepe dolore excepturi."
            link="/partners"
          />
          <ServiceCard
            icon="🎤"
            title="Sustainable Event"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ullam expedita vero aspernatur, placeat alias ipsam saepe dolore excepturi."
            link="/sustainable-events"
          />
        </div>

        {/* Row 2 */}
        <div className="grid md:grid-cols-2 gap-8">
          <ServiceCard
            icon="🧩"
            title="Membership"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ullam expedita vero aspernatur, placeat alias ipsam saepe dolore excepturi."
            link="/membership"
          />
          <ServiceCard
            icon="💡"
            title="Consultation"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ullam expedita vero aspernatur, placeat alias ipsam saepe dolore excepturi."
            link="/consultation"
          />
        </div>

        {/* Row 3 */}
        <div className="grid md:grid-cols-2 gap-8">
          <ServiceCard
            icon="💙"
            title="Training Programs"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ullam expedita vero aspernatur, placeat alias ipsam saepe dolore excepturi."
            link="/academies"
          />
        </div>
      </div>
    </div>
  );
}

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
}

function ServiceCard({ icon, title, description, link }: ServiceCardProps) {
  return (
    <div className="w-full bg-white border border-gray-300 rounded-3xl p-10 flex flex-col gap-6 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="w-16 h-16 rounded-full bg-main flex justify-center items-center text-4xl text-white">
        {icon}
      </div>
      <p className="text-xl font-semibold text-gray-800">{title}</p>
      <p className="text-base text-gray-600 leading-relaxed">{description}</p>
      <Link
        className="py-3 text-center w-full bg-main text-white font-semibold rounded-xl mt-4 hover:bg-main-dark transition duration-200"
        href={link}
      >
        Let's Go
      </Link>
    </div>
  );
}

export default ServicesListView;

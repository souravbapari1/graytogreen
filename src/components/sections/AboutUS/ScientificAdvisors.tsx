import { PartenerWithUse } from "@/app/partners/partners";
import { montserrat } from "@/fonts/font";
import { strApi } from "@/graphql/client";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

function ScientificAdvisors({
  desc,
  title,
  data,
}: {
  title?: string;
  desc?: string | null;
  data?: PartenerWithUse["ourTeam"] | any[];
}) {
  if (!data) {
    return <></>;
  }
  return (
    <div className="container mt-20 mb-20 flex justify-center items-center flex-col gap-6 ">
      <h1
        className={`${montserrat.className} text-4xl font-bold text-center text-main`}
      >
        {title || "Scientific Advisors"}
      </h1>
      <p className="text-center text-lg max-w-[800px] ">
        {desc ||
          "We would like to thank our patrons who have accompanied  from the very beginning."}
      </p>
      <div className="grid lg:grid-cols-3 gap-10 mt-10">
        {data.map((e, i) => {
          return (
            <div
              className="flex flex-col justify-center items-center text-center"
              key={e.id}
            >
              <div className="">
                <div className=" bg-gradient-to-r from-green-600 to-green-900 p-3 rounded-full">
                  <Image
                    src={strApi + e.image.url}
                    height={3000}
                    alt=""
                    width={3000}
                    className=" object-cover rounded-full w-56 h-56  border-main"
                  />
                </div>
              </div>
              <h1 className="text-xl font-bold mt-8 mb-3">{e.name}</h1>
              <p className="text-sm">{e.about}</p>
              <Link
                target="_blank"
                href={e?.linkdinProfile || "#"}
                className="flex  flex-row gap-4 mt-5 text-gray-500 "
              >
                <FaLinkedinIn className="hover:text-gray-900" size={18} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ScientificAdvisors;

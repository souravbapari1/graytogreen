import { AboutUse } from "@/app/about-us/aboutus";
import { montserrat } from "@/fonts/font";
import { strApi } from "@/graphql/client";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

function ScientificAndSustainabilityAdvisors({
  data,
}: {
  data?: AboutUse["scientificAndSustainabilityAdvisors"];
}) {
  if (!data) {
    return <></>;
  }
  return (
    <div className="w-full   bg-gradient-to-br from-[rgba(160,249,138,0.2)] via-[rgba(219,255,213,0)] to-[rgba(187,249,138,0.2)] mt-20 py-10">
      <div className="container flex justify-center items-center flex-col">
        <h1
          className={`${montserrat.className} text-2xl lg:text-3xl font-bold text-center`}
          dangerouslySetInnerHTML={{ __html: data?.title || "" }}
        />
        <p
          className="text-center  max-w-[700px] mt-4 mb-5  "
          dangerouslySetInnerHTML={{ __html: data?.description || "" }}
        />

        <div className="grid lg:grid-cols-3 gap-10 mt-10 lg:px-20 w-full max-w-[1100px]">
          {data.member.map((e, i) => {
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
                <h1
                  className="text-2xl font-bold mt-8 mb-3"
                  dangerouslySetInnerHTML={{ __html: e.name || "" }}
                />
                <p dangerouslySetInnerHTML={{ __html: e.about || "" }} />
                <div className="flex  flex-row gap-4 mt-5 text-gray-500 ">
                  {/* <FaSquareXTwitter className="hover:text-gray-900" size={18} /> */}
                  <Link href={e.linkdinProfile} target="_blank">
                    <FaLinkedinIn className="hover:text-gray-900" size={18} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ScientificAndSustainabilityAdvisors;

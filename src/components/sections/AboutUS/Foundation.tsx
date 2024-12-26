import { AboutUse } from "@/app/about-us/aboutus";
import { Button } from "@/components/ui/button";
import { lora, montserrat } from "@/fonts/font";
import { strApi } from "@/graphql/client";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

function Foundation({
  data,
  link1,
  link2,
}: {
  data?: AboutUse["foundationCouncil"];
  link1?: AboutUse["foundationCouncilLink1"];
  link2?: AboutUse["foundationCouncilLink2"];
}) {
  if (!data) {
    return <></>;
  }
  return (
    <div className="w-full  shadow-lg bg-gradient-to-br from-[rgba(160,249,138,0.2)] via-[rgba(219,255,213,0)] to-[rgba(187,249,138,0.2)] mt-20 py-10">
      <div className="container flex justify-center items-center flex-col">
        <h1
          className={`${montserrat.className} md:text-4xl text-2xl font-bold text-center`}
          dangerouslySetInnerHTML={{ __html: data?.title || "" }}
        />

        <p
          className="text-center max-w-[600px] mt-4 "
          dangerouslySetInnerHTML={{ __html: data?.description || "" }}
        />
        <h1
          className={`${montserrat.className} text-2xl mt-8 text-main font-bold text-center`}
        >
          Foundation Council
        </h1>
        <div className="grid lg:grid-cols-3 gap-10 mt-10 lg:px-20 max-w-[1100px]">
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
        <div className="flex md:justify-start md:items-start gap-3 justify-center items-center md:gap-4 mt-20">
          {link1 && (
            <Link href={link1.linkUrl}>
              <Button
                className={`${lora.className} text-xl py-[24px] md:w-auto w-full  px-8 rounded-full donateBtn border-none`}
              >
                {link1.linkText}
              </Button>
            </Link>
          )}
          {link2 && (
            <Link href={link2.linkUrl}>
              <Button
                className={`${lora.className} text-xl py-[22px] md:w-auto w-full  px-7 rounded-full  border-2 border-main bg-transparent text-main hover:text-white`}
              >
                {link2.linkText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Foundation;

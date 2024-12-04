import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import { montserrat } from "@/fonts/font";
import { genPbFiles } from "@/request/actions";
import { getMembershipById } from "@/request/worker/membership";
import Image from "next/image";
import Link from "next/link";
import Qna from "./Qna";
import NotFound from "@/app/not-found";
import Icon from "@/icons/Icon";

async function Page({ params }: { params: { id: string } }) {
  try {
    const data = await getMembershipById(params.id);
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="min-h-[70vh] mt-10">
            <h1 className="text-center font-bold text-2xl underline">
              {data.name}
            </h1>
            <div className="mt-10 grid grid-cols-2 gap-8">
              <div className="flex justify-center  items-center">
                <div className="w-full max-w-80   bg-main/10 rounded-3xl overflow-hidden  sticky top-40">
                  <div className="w-full h-48 bg-main/20 border-b-[8px] border-white flex justify-center items-center">
                    <Image
                      src={genPbFiles(data, data.image)}
                      alt=""
                      width={1200}
                      height={1200}
                      className="h-20 w-auto"
                    />
                  </div>
                  <div
                    className={`${montserrat.className} text-center  p-3 pt-10 pb-3 flex justify-between flex-col items-center`}
                  >
                    <div className="">
                      <h1 className="font-bold text-xl mb-6">{data.name}</h1>
                      <p className="font-semibold">{data.amount} OMR</p>
                      <p className="capitalize mb-5">Lifetime</p>
                    </div>
                    <div className="w-full flex justify-center items-center mb-4 gap-2 flex-col">
                      {data.info?.map((info, i) => {
                        return (
                          <div
                            key={i}
                            className="flex justify-start items-center text-xs"
                          >
                            <div className="w-5 ">
                              <Icon name={info.icon} size={12} />
                            </div>
                            <p>{info.title}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <h3 className="text-xl">Answer these basic questions.</h3>
                <Qna data={data} id={params.id} />
              </div>
            </div>
          </div>
        </div>
        <FooterTop />
        <Footer />
      </div>
    );
  } catch (error) {
    return <NotFound />;
  }
}

export default Page;

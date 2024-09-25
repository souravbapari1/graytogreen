import { montserrat } from "@/fonts/font";
import Image from "next/image";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

function Donate() {
  return (
    <div className="w-screen h-screen md:bg-[url('https://images.pexels.com/photos/1643409/pexels-photo-1643409.jpeg')] bg-cover bg-center bg-no-repeat">
      <div className="w-full h-full bg-black/50 flex justify-center items-center">
        <div className=" xl:max-w-[30vw] md:max-w-[60vw] w-full md:h-auto h-full relative  md:rounded-3xl md:shadow-xl  bg-white grid xl:grid-cols-2 gap-5 p-5">
          <div className="w-full col-span-2 md:p-8 p-4 ">
            <Image
              alt=""
              src="/logo/main-logo.png"
              width={600}
              height={100}
              className="w-32 h-auto"
            />
            <p className={`${montserrat.className} text-sm mt-4 text-gray-700`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae ab facere eaque deserunt ad quaerat accusamus
              voluptatem molestias, quo incidunt, blanditiis iure provident,
              omnis suscipit culpa illo. Fuga, praesentium debitis.
            </p>
            <div className="">
              <p
                className={`text-xl font-semibold text-gray-700 mt-8  ${montserrat.className}`}
              >
                Choose a donation amount
              </p>
              <div className={`mt-6 ${montserrat.className}`}>
                <div className="grid grid-cols-2 gap-4">
                  {[10, 25, 50, 100].map((e, i) => {
                    return (
                      <div className="w-full h-16 bg-gray-100 flex justify-center items-center border-2 text-gray-600 rounded-xl text-lg font-bold">
                        $ {e}.00
                      </div>
                    );
                  })}
                </div>
              </div>
              <p
                className={`${montserrat.className} mt-10  text-main underline`}
              >
                Enter a custom donation amount
              </p>
              <p className={`${montserrat.className}  text-xs mt-5`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat pariatur nam tenetur deserunt quis laboriosam illum
                tempora nemo cum ab alias mollitia dolorem odit dolores, fugiat
                animi nobis numquam! Fuga?
              </p>
              <Button
                className={`w-full h-14 donateBtn border-none shadow-none mt-8 ${montserrat.className} font-bold`}
              >
                Send Donation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate;

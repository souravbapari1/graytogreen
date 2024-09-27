import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function EndowmentAction() {
  return (
    <div className={`py-20 ${montserrat.className}`}>
      <div className="container flex flex-col gap-5 justify-center items-center">
        <p className="md:text-xl ">
          An endowment is a contribution to the assets of the
          Plant-for-the-Planet Foundation. An endowment makes sense, for
          example, if you wish to support a specific cause but do not want to
          establish your own foundation for this purpose. In contrast to
          donations, endowments do not have to be used promptly, but are
          permanently added to the foundation's assets. An endowment can also be
          any small or regular contribution and, like a donation, it is
          tax-deductible.
        </p>
        <Link
          className="donateBtn py-4 px-10 mt-10 text-center"
          href="/platform"
        >
          Endow
        </Link>
      </div>
      <div className="flex container justify-start md:flex-row flex-col items-center  md:gap-20 gap-10   mt-28  ">
        <div className="">
          <Image
            src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/10/Maike-Grundmann.jpg"
            width={1000}
            height={1000}
            alt=""
            className="w-72 h-96 object-cover rounded-3xl"
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-8 ">
          <h1 className="text-xl font-bold">
            Maike Grundmann will be happy to answer any questions you may have.
          </h1>
          <p className="">
            Email:{" "}
            <Link href="#" className="text-main">
              maike.grundmann@plant-for-the-planet.org
            </Link>
          </p>
          <p className="">
            Tel:{" "}
            <Link href="#" className="text-main">
              +49 8808 921 08 111
            </Link>
          </p>
          <Link className="donateBtn py-3 capitalize shadow-none" href="#">
            Book 15 min Meeting
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EndowmentAction;

import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import { montserrat } from "@/fonts/font";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <Navbar />
      <div
        className={`container ${montserrat.className} py-20 flex justify-center items-center flex-col gap-10`}
      >
        <div className=" max-w-[800px] md:shadow-lg md:p-14 md:border md:rounded-xl md:border-gray-100">
          <h1 className="md:text-4xl text-2xl font-bold text-center mb-8">
            Fullstack Developer
          </h1>
          <div className="">
            <p className="text-justify lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              illo sequi saepe possimus vero. Consequatur aliquid quis esse ut
              placeat officiis eum laboriosam maxime distinctio mollitia
              perspiciatis cupiditate sapiente porro tempore hic alias, animi
              iure ipsa omnis? Tenetur, vitae. Excepturi sint esse optio iusto
              deleniti obcaecati, facere natus libero incidunt dolorum quis
              eveniet? Minima veniam repellat dolor aperiam, quos officia odit
              animi inventore in incidunt commodi sit laudantium facere saepe
              facilis, officiis, accusantium ipsa tenetur ipsam deleniti vel
              corporis! Totam ratione voluptatem id officia vel impedit. Officia
              aperiam recusandae repudiandae, tempore cum sunt placeat dolores
              debitis? Nam quia quisquam placeat quos nobis odit, eos facilis
              minima fugit impedit exercitationem voluptate reprehenderit
              eveniet corporis, aspernatur accusantium voluptates quas quo
              expedita sapiente, ipsa corrupti cum neque? Accusamus, libero.
              Corporis, magnam laudantium saepe cupiditate aspernatur blanditiis
              ipsam maxime ratione fuga quia laborum itaque mollitia quasi
              repellat sit enim, temporibus ad laboriosam nulla beatae tempore?
              Odit, deleniti voluptas ducimus porro, similique culpa aspernatur
              deserunt a, dolores natus illo perferendis? Illum earum obcaecati
              voluptas nemo aspernatur neque incidunt, illo voluptates dolore
              distinctio eveniet. Atque assumenda dolore reprehenderit aliquid
              nam eveniet fugiat, laborum distinctio voluptatem. Velit quam
              provident tenetur optio ex odit perferendis quos sed repudiandae!
            </p>
            <br />
            <br />
            <Link
              href="/careers/page/apply"
              className="donateBtn py-4 mx-auto block text-center shadow-none"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
      <FooterTop />
      <Footer />
    </div>
  );
}

export default page;

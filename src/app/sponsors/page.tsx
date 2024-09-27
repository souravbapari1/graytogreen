import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <Navbar />
      <div className={`${montserrat.className} container`}>
        <h1 className="md:text-4xl text-3xl md:mt-16 mt-10 font-extrabold text-center">
          Our <span className="text-main ">Sponsor</span>
        </h1>
        <div className="grid md:grid-cols-4 grid-cols-2 md:mt-14 mt-5 md:mb-10 items-center ">
          {[
            "https://www.savatree.com/wp-content/uploads/2021/10/savatree-mobile-500.png",
            "https://livelihoods.eu/wp-content/uploads/2017/03/HD-LOGO-LIVELIHOODS-FUNDS-HORIZONTAL.png",
            "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Tropicana_green_flat_logo.svg/800px-Tropicana_green_flat_logo.svg.png",
            "https://cdn.shopify.com/s/files/1/0582/8457/2829/files/fft_logo_1.png?v=1634643664",
            "https://www.savatree.com/wp-content/uploads/2021/10/savatree-mobile-500.png",
            "https://livelihoods.eu/wp-content/uploads/2017/03/HD-LOGO-LIVELIHOODS-FUNDS-HORIZONTAL.png",
            "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Tropicana_green_flat_logo.svg/800px-Tropicana_green_flat_logo.svg.png",
            "https://www.savatree.com/wp-content/uploads/2021/10/savatree-mobile-500.png",
            "https://livelihoods.eu/wp-content/uploads/2017/03/HD-LOGO-LIVELIHOODS-FUNDS-HORIZONTAL.png",
            "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Tropicana_green_flat_logo.svg/800px-Tropicana_green_flat_logo.svg.png",
            "https://cdn.shopify.com/s/files/1/0582/8457/2829/files/fft_logo_1.png?v=1634643664",
            "https://www.savatree.com/wp-content/uploads/2021/10/savatree-mobile-500.png",
            "https://livelihoods.eu/wp-content/uploads/2017/03/HD-LOGO-LIVELIHOODS-FUNDS-HORIZONTAL.png",
            "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Tropicana_green_flat_logo.svg/800px-Tropicana_green_flat_logo.svg.png",
          ].map((e, i) => {
            return (
              <Link
                href="/sponsors/brand"
                className="w-full border flex flex-col hover:bg-green-50 transition-all justify-center items-center"
              >
                <Image
                  src={e}
                  key={i}
                  alt=""
                  className=" h-36 object-contain md:mx-10  mx-5"
                  width={100}
                  height={100}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <FooterTop />
      <Footer />
    </div>
  );
}

export default page;

import { montserrat } from "@/fonts/font";
import React from "react";
import { Fade } from "react-slideshow-image";
import ResearchSlide from "./ResearchSlide";
import Image from "next/image";

function RecentPublications() {
  return (
    <>
      <br />
      {/* <div className="container py-20 flex flex-col justify-center items-center">
        <h1
          className={`${montserrat.className} md:text-4xl text-3xl font-bold text-center`}
        >
          Recent <span className="text-main">Publications</span>
        </h1>
        <div className="grid grid-cols-12 mt-20 lg:max-w-[1200px] w-full lg:-ml-20 ">
          <div className="col-span-2 lg:flex hidden justify-between flex-col gap-5 xl:mb-5 mb-10 items-center">
            <h1 className={`${montserrat.className} text-4xl font-bold`}>
              20<span className="text-main">22</span>
            </h1>
            <div className="w-[2px] h-full bg-gray-300/30"></div>
            <h1 className={`${montserrat.className} text-4xl font-bold `}>
              20<span className="text-main">21</span>
            </h1>
          </div>
          <div className="lg:col-span-10 col-span-12 h-auto">
            <div>
              <h1
                className={`${montserrat.className} lg:hidden block text-4xl font-bold mb-5`}
              >
                20<span className="text-main">22</span>
              </h1>
              <p className="lg:text-lg mb-20">
                Averill, C., Anthony, M.A., Baldrian, P. et al. Defending
                Earth’s terrestrial microbiome. Nat Microbiol
                (2022). https://doi.org/10.1038/s41564-022-01228-3 We argue for
                the conservation and restoration of soil microbial life. We
                analyse 80 experiments and show that native soil microbiome
                restoration can accelerate plant biomass production by ~64%
                across ecosystems.Restoring the soil microbiome should be a
                central goal when we restore ecosystems. <br /> <br /> At the
                same time, intentionally restoring the microbiome – especially
                soil fungi – helps us restore the rest of the ecosystem. <br />
                <br /> Werden, L.K., Zarges, S., Holl, K.D., Oliver, C.L.,
                Oviedo-Brenes, F., Rosales, J.A. and Zahawi, R.A.,
                2022. Assisted restoration interventions drive functional
                recovery of tropical wet forest tree communities. Frontiers in
                Forests and Global Change, 5, p.935011. San-José, M., Werden,
                L.K., Joyce, F.H. et al. Effects of landscape structure on
                restoration success in tropical premontane forest. Sci Rep 12,
                13452 (2022). https://doi.org/10.1038/s41598-022-16542-3
              </p>
              <h1
                className={`${montserrat.className} text-4xl font-bold mb-5  lg:hidden block`}
              >
                20<span className="text-main">21</span>
              </h1>
              <p className=" lg:text-lg">
                Díaz-Páez, M., Werden, L.K., Zahawi, R.A., Usuga, J. and
                Polanía, J., 2021. Vegetative propagation of native tree
                species: an alternative restoration strategy for the tropical
                Andes. Restoration Ecology, p.e13611.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <ResearchSlide />

      <div className="flex  justify-center flex-wrap md:mt-14 mt-5 md:mb-20 items-center ">
        {[
          "https://www.savatree.com/wp-content/uploads/2021/10/savatree-mobile-500.png",
          "https://livelihoods.eu/wp-content/uploads/2017/03/HD-LOGO-LIVELIHOODS-FUNDS-HORIZONTAL.png",
          "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Tropicana_green_flat_logo.svg/800px-Tropicana_green_flat_logo.svg.png",
          "https://cdn.shopify.com/s/files/1/0582/8457/2829/files/fft_logo_1.png?v=1634643664",
          "https://www.savatree.com/wp-content/uploads/2021/10/savatree-mobile-500.png",
          "https://livelihoods.eu/wp-content/uploads/2017/03/HD-LOGO-LIVELIHOODS-FUNDS-HORIZONTAL.png",
        ].map((e, i) => {
          return (
            <Image
              src={e}
              key={i}
              alt=""
              className="w-28 h-28 object-contain md:mx-10  mx-5"
              width={100}
              height={100}
            />
          );
        })}
      </div>
    </>
  );
}

export default RecentPublications;

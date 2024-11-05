// import { montserrat } from "@/fonts/font";
// import React from "react";
// import ResearchCard from "./ResearchCard";
// import Link from "next/link";
// import Image from "next/image";

// function OngoingResearch() {
//   return (
//     <>
//       <div className="bg-green-50/50 w-full  py-20 ">
//         <div className="container gap-10 ">
//           <h1
//             className={`${montserrat.className} md:text-4xl text-3xl text-center font-bold `}
//           >
//             <span className="text-main">Ongoing</span> Research
//           </h1>
//           <div
//             className={`flex justify-center items-center md:gap-6 gap-3 ${montserrat.className} mt-10 md:text-base text-sm font-bold`}
//           >
//             {["Active", "Completed", "Restoration", "Planting"].map((e) => (
//               <p className={`${e == "Active" ? "underline text-main" : null}`}>
//                 {e}
//               </p>
//             ))}
//           </div>
//           <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 gap-y-5 mt-10">
//             {Array.from({ length: 6 }).map(() => {
//               return <ResearchCard />;
//             })}
//           </div>
//           <div className="w-full flex justify-center items-center pt-10">
//             <Link href="/research" className="donateBtn py-4">
//               View More
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div
//         className=" w-full bg-gradient-to-r from-green-500 to-emerald-700 relative
//     "
//       >
//         <div className=" grid md:order-1 order-last lg:grid-cols-2 md:gap-16 gap-10 container py-10">
//           <div className="flex flex-col gap-5 justify-center">
//             <h1
//               className={`${montserrat.className} uppercase md:text-3xl text-2xl text-white font-bold`}
//             >
//               Forest Soil Microbiome Restoration
//             </h1>
//             <p className="text-white/80 md:text-lg">
//               We are also testing a hypothesis that a simple addition of forest
//               soil to a tree’s planting hole can increase survival rates. We
//               expect to be introducing symbiotic microbes through the soil
//               addition and thus the soil microorganism diversity in degraded
//               soil towards communities that ‘help’ the trees grow.
//             </p>
//           </div>
//           <iframe
//             width="560"
//             height="315"
//             src="https://www.youtube.com/embed/zFmeeMZioio?si=VCJ45jaB0xb5Y9h5"
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             referrerPolicy="strict-origin-when-cross-origin"
//             allowFullScreen
//             className="w-full lg:h-96 h-52 rounded-3xl object-cover"
//           ></iframe>
//         </div>
//         <Image
//           src="/assets/yucatan_bush.svg"
//           className="absolute w-36 ml-28 -mt-10"
//           width={1200}
//           height={1200}
//           alt=""
//         />
//       </div>
//     </>
//   );
// }

// export default OngoingResearch;

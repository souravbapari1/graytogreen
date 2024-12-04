import Navbar from "@/components/sections/Navbar/Navbar";
import { montserrat } from "@/fonts/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ApplyForm from "./ApplyForm";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import { UpcomingAcademyData } from "../../view/[id]/academy";

export const revalidate = 0;
async function page({ params }: { params: { id: string } }) {
  const id = params.id;
  const data = await client.query<UpcomingAcademyData>({
    query: gql`
      query UpcomingAcademie($documentId: ID!) {
        upcomingAcademie(documentId: $documentId) {
          amount
          name
          documentId
          applications
          maxParticipents
          pricing
          time
          title
          startDate
          slug
          registerationEndDate
          locationType
          endDate
          languge
          location
        }
      }
    `,
    variables: {
      documentId: id,
    },
  });
  console.log(data);

  return (
    <div className="w-full h-screen overflow-auto flex-col  md:bg-[url('/assets/form-bg.jpg')] bg-no-repeat bg-cover bg-center flex justify-start items-center">
      <div className="block md:mb-40">
        <div className="md:h-60"></div>
        <div className="w-[98vw] max-w-[700px]   md:mt-24 bg-white border-t-[5px] shadow-2xl md:rounded-3xl p-8 border-primary">
          <br />
          <Link href="/" className="mt-6 mb-6">
            <Image
              src="/logo/main-logo.png"
              width={200}
              height={200}
              alt="logo"
              className="w-auto mx-auto object-contain md:h-[65px] lg:-mt-3 h-16 py-3 mb:pb-5"
            />
          </Link>
          <br />
          <hr />
          <div className={montserrat.className}>
            <h1 className="text-2xl font-bold mt-8 mb-3">
              Registration for {data.data.upcomingAcademie.name}
            </h1>
            <p>
              T {data.data.upcomingAcademie.time} |{" "}
              {data.data.upcomingAcademie.startDate}{" "}
              <span className="text-main font-bold">to</span>{" "}
              {data.data.upcomingAcademie.endDate} at{" "}
            </p>
            <br />
            <ApplyForm data={data.data.upcomingAcademie} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

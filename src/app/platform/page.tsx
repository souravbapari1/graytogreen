import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/sections/Navbar/Navbar";
import { client } from "@/request/actions";
import { ProjectDataType } from "@/interface/project";
const GGMapBox = dynamic(() => import("@/components/GMapBox/GGMapBox"), {
  ssr: false,
});

export const revalidate = 0;
async function page() {
  const data = await client.get("/api/v1/project").send<ProjectDataType[]>();
  return (
    <div>
      <Navbar />
      <GGMapBox
        style={{ width: "100%", height: "90.8vh" }}
        className="rounded-none shadow-none"
        data={data}
      />
    </div>
  );
}

export default page;

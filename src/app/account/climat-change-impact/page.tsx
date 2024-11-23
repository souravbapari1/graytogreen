import React from "react";
import WorkSpace from "../components/workspace";
import EnvironmentalStatistics from "../components/EnvironmentalStatistics";
import { client } from "@/request/actions";
import { SDGITEM } from "@/interface/sdg";

export const revalidate = 0;
async function page() {
  const data = await client.get("/impact/status").send<
    (SDGITEM & {
      count: {
        id: string;
        name: string;
        unit: string;
        value: string;
      }[];
    })[]
  >();
  return (
    <WorkSpace>
      <EnvironmentalStatistics data={data} />
    </WorkSpace>
  );
}

export default page;

import { montserrat } from "@/fonts/font";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import React from "react";
import { StatisticsAndRecordData } from "./StatusData";

async function StatisticsCount() {
  const starts = await client.query<StatisticsAndRecordData>({
    query: gql`
      query StatisticsAndRecord {
        statisticsAndRecord {
          updatedAt
          count_title_list {
            counter
            id
            name
          }
        }
      }
    `,
  });
  return (
    <div
      className={` w-full donateBtn rounded-none shadow-none py-20 ${montserrat.className}`}
    >
      <div className="container grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-10 md:gap-y-20  text-center">
        {starts.data.statisticsAndRecord.count_title_list.map((e, i) => {
          return (
            <div
              className="w-full   rounded-3xl    flex justify-center items-center flex-col gap-5"
              key={i}
            >
              <h1 className={`text-6xl font-bold text-white`}>{e.counter}</h1>
              <p className="capitalize text-xl font-semibold text-white/50">
                {e.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StatisticsCount;

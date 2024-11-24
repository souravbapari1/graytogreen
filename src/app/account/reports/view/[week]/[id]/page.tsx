import NotFound from "@/app/not-found";
import { MonthlyReportItem, Week } from "@/interface/monthlyReport";
import { client } from "@/request/actions";
import React from "react";
import ReportView from "./ReportView";
import WorkSpace from "@/app/account/components/workspace";

export const revalidate = 60;
async function page({ params }: { params: { week: string; id: string } }) {
  try {
    const { week, id } = params;
    const data = await client
      .get("/api/collections/weekly_reports/records/" + id)
      .send<MonthlyReportItem>();

    const weekData = data[week as keyof MonthlyReportItem];
    if (!weekData) {
      return <NotFound />;
    }

    return (
      <WorkSpace>
        <ReportView data={data} week={weekData as Week} name={week} />
      </WorkSpace>
    );
  } catch (error) {
    return <NotFound />;
  }
}

export default page;

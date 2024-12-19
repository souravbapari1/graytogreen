import { client } from "@/request/actions";
import { getAccessToken } from "../auth";
import { Collection } from "@/interface/collection";
import { MonthlyReportItem } from "@/interface/monthlyReport";

export const getReports = async (
  user: string,
  year: string,
  filter?: string
) => {
  const token = await getAccessToken();
  const req = await client
    .get("/api/collections/weekly_reports/records", {
      filter: filter || `(user='${user}' && year='${year}')`,
    })
    .send<Collection<MonthlyReportItem>>(token);
  return req;
};

export const setTheReportOnDB = async (data: {
  year: string;
  month: string;
  user: string;
  [key: string]: any;
}) => {
  const filter = `(year='${data.year}' && month='${data.month}' && user='${data.user}')`;
  const reports = await getReports(data.user, data.year, filter);
  const token = await getAccessToken();
  if (reports.items.length == 0) {
    const req = await client
      .post("/api/collections/weekly_reports/records")
      .json(data)
      .send<MonthlyReportItem>(token);
    return req;
  }
  const report = reports.items[0];
  const req = await client
    .patch("/api/collections/weekly_reports/records/" + report.id)
    .json(data)
    .send<MonthlyReportItem>(token);
  return req;
};

export const getAlertRequests = async (user: string) => {
  const req = await client
    .get("/api/collections/user_alerts/records", {
      filter: `(user='${user}')`,
    })
    .send<
      Collection<{
        id: string;
        collectionId: string;
        collectionName: string;
        created: string;
        updated: string;
        title: string;
        description: string;
        actionLink: string;
        reportID: string;
        user: string;
      }>
    >();
  return req;
};

export const deleteAlertRequest = async (id: string) => {
  const req = await client
    .delete("/api/collections/user_alerts/records/" + id)
    .send();
  return req;
};

import { MonthlyReportItem, Week } from "@/interface/monthlyReport";
import Link from "next/link";
import React from "react";

function ReportView({
  data,
  week,
  name,
}: {
  data: MonthlyReportItem;
  week: Week | null;
  name: string;
}) {
  const genPageTitle = () => {
    switch (name.toUpperCase()) {
      case "WEEK1":
        return `Week 1 ( 1st - 7th of ${data.month}, ${data.year}) Reporting`;
      case "WEEK2":
        return `Week 2 ( 8th - 14th of ${data.month}, ${data.year}) Reporting`;
      case "WEEK3":
        return `Week 3 ( 15th - 21st of ${data.month}, ${data.year}) Reporting`;
      case "WEEK4":
        return `Week 4 ( 22nd - 28th of ${data.month}, ${data.year}) Reporting`;
      default:
        return "Unknown Report";
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl text-center font-bold mb-10">{genPageTitle()}</h1>
      <div className="mb-8">
        <p className="font-bold mb-2">Summary Of This Week</p>
        <div
          className="content mt-2 bg-white border rounded-lg p-4"
          dangerouslySetInnerHTML={{ __html: week?.summery || "" }}
        />
      </div>

      <h1 className="font-bold text-xl mt-10 mb-4">Events List</h1>
      <div className="grid grid-cols-1   gap-4">
        {week?.events.map((e, i) => (
          <div key={i} className="bg-white border rounded-lg p-4">
            <h2 className="font-bold mb-2">Event {i + 1}</h2>
            <div
              className="content mb-2"
              dangerouslySetInnerHTML={{ __html: e.title || "" }}
            />
            <p className="font-semibold">Activates:</p>
            <div
              className="content mb-2"
              dangerouslySetInnerHTML={{ __html: e.activates || "" }}
            />
            <p className="font-semibold">Outcomes:</p>
            <div
              className="content mb-2"
              dangerouslySetInnerHTML={{ __html: e.outcomes || "" }}
            />
            <p className="font-semibold">Media:</p>
            <div className="flex flex-col gap-2">
              {e.file?.map((file) => (
                <Link
                  className="text-main underline"
                  href={file.url}
                  key={file.id}
                  target="_blank"
                >
                  {file.file.filename}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h1 className="font-bold text-xl mt-10 mb-4">Challenges Faced</h1>
      <div className="grid grid-cols-1   gap-4">
        {week?.challenges.map((e, i) => (
          <div key={i} className="bg-white border rounded-lg p-4">
            <h2 className="font-bold mb-2">Challenge {i + 1}</h2>
            <div
              className="content mb-2"
              dangerouslySetInnerHTML={{ __html: e.title || "" }}
            />
            <p className="font-semibold">What You Did:</p>
            <div
              className="content mb-2"
              dangerouslySetInnerHTML={{ __html: e.whatYouDid || "" }}
            />
            {e.file && (
              <div className="">
                <p className="font-semibold">Media:</p>
                <div className="flex flex-col gap-2">
                  {e.file?.map((file) => (
                    <Link
                      className="text-main underline"
                      href={file.url}
                      key={file.id}
                      target="_blank"
                    >
                      {file.file.filename}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10">
        <p className="font-bold mb-2">Plan For Next Week</p>
        <div
          className="content bg-white border rounded-lg p-4"
          dangerouslySetInnerHTML={{ __html: week?.nextStep || "" }}
        />
      </div>
    </div>
  );
}

export default ReportView;

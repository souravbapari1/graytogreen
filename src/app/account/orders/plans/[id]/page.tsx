import React from "react";
import { getPlanData } from "./plan";
import WorkSpace from "@/app/account/components/workspace";
import { cn } from "@/lib/utils";
import { montserrat } from "@/fonts/font";
import Icon from "@/icons/Icon";
export default async function page({ params }: { params: { id: string } }) {
  const { id } = params;
  const data = await getPlanData(params.id);
  const {
    amount,

    gateway_response,
    qna,
    payurl,
    status,
    created,
    updated,
  } = data;

  const membership = data.expand.membership;
  return (
    <WorkSpace>
      <div className="container mx-auto px-4 sm:px-6 mb-12">
        <div className="bg-white shadow-lg rounded-lg p-6">
          {/* Title */}
          <h1 className="text-2xl font-semibold text-center text-gray-900 mb-4">
            Payment Details
          </h1>

          {/* Payment Information */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Payment Summary
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <DetailRow label="Amount" value={`${amount} OMR`} />
              <DetailRow label="Status" value={status} />
            </div>
          </section>

          {/* Membership Information */}
          <section className="space-y-4 mt-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Membership Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <DetailRow label="Membership Name" value={membership.name} />
              <DetailRow
                label="Active Status"
                value={membership.active ? "Active" : "Inactive"}
              />
              <DetailRow label="Amount" value={`${membership.amount} OMR`} />
              <DetailRow label="Stock Available" value={membership.stocks} />
              <DetailRow
                className="flex-col items-start justify-start"
                label="Q&A"
                value={qna.map((item: any, index: number) => (
                  <div key={index}>
                    <strong>{item.qus}</strong>
                    <div>{item.answers}</div>
                  </div>
                ))}
              />
            </div>
          </section>

          {/* Gateway Response */}
          <section className="space-y-4 mt-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Gateway Response
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <DetailRow
                label="Invoice"
                value={gateway_response.data.invoice}
              />
              <DetailRow
                label="Currency"
                value={gateway_response.data.currency}
              />
            </div>
          </section>
          <div
            className={cn(
              "w-full flex text-left justify-start  items-start mb-4 gap-4 flex-col mt-10",
              montserrat.className
            )}
          >
            {membership.info?.map((info, i) => {
              return (
                <div
                  key={i}
                  className="flex justify-start items-start gap-4 text-xs"
                >
                  <div className="w-5 mt-1 ">
                    <Icon name={info.icon} className="text-primary" size={12} />
                  </div>
                  <p>{info.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </WorkSpace>
  );
}

function DetailRow({
  label,
  value,
  className,
}: {
  label: string;
  value: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(`flex justify-start items-center gap-4`, className)}>
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <div className="px-3 py-2 bg-gray-100 rounded-md text-sm text-gray-800">
        {value}
      </div>
    </div>
  );
}

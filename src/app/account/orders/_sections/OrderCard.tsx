import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formatTimestampCustom } from "@/helper/dateTime";
import { RequestOrderHistoryData } from "@/request/worker/account/ordersRequest";
import Link from "next/link";
import React from "react";
import { MdFileDownload } from "react-icons/md";

export default function OrderCard({ data }: { data: RequestOrderHistoryData }) {
  return (
    <Card key={data.id}>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div className="">
            <h3 className="font-semibold">Support {data?.reason}</h3>
            <p>{formatTimestampCustom(data.created || "")}</p>
          </div>
          <div className="">
            <h3 className="font-semibold">{data.amount} OMR</h3>
            <p className="text-primary">Successful</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 border-t pt-5">
          <div className="flex flex-col gap-5">
            <div className="">
              <h3 className="font-semibold">Status</h3>
              <p>Successful</p>
            </div>
            <div className="">
              <h3 className="font-semibold">Paid Amount</h3>
              <p>{data.amount} OMR</p>
            </div>
            <div className="">
              <h3 className="font-semibold">Reference</h3>
              <p className="uppercase">{data.ref_id}</p>
            </div>
            {/* {data.certificate_Link && (
              <div className="">
                <h3 className="font-semibold">Downloads</h3>
                <p className="font-semibold text-primary flex justify-normal items-center  gap-3">
                  <MdFileDownload />
                  Certificate
                </p>
              </div>
            )} */}
            <div className="">
              <h3 className="font-semibold">Downloads</h3>
              <Link
                href="/doc.pdf"
                target="_blank"
                className="font-semibold text-primary flex justify-normal items-center  gap-3"
              >
                <MdFileDownload />
                Certificate
              </Link>
            </div>
            {data.donat_unit == "academic" && (
              <Link href={`/account/orders/academic/${data.ref_id}`}>
                <Button>View Details</Button>
              </Link>
            )}
            {data.donat_unit == "membership" && (
              <div className="">
                <Button>View Plan Details</Button>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-5">
            <div className="">
              <h3 className="font-semibold">Date Created</h3>
              <p>{formatTimestampCustom(data.created || "")}</p>
            </div>
            <div className="">
              <h3 className="font-semibold">Payment Method</h3>
              <p>Credit/Debit Card</p>
            </div>
            <div className="">
              <h3 className="font-semibold">Quantity</h3>
              <p className="uppercase">{data.quntity}</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="">
              <h3 className="font-semibold">Last Updated</h3>
              <p>{formatTimestampCustom(data.updated || "")}</p>
            </div>
            <div className="">
              <h3 className="font-semibold">Project Name</h3>
              <p> {data?.reason}</p>
            </div>
            <div>
              <h3 className="font-semibold">Price</h3>
              <p className="uppercase">{data.pricing_sum}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

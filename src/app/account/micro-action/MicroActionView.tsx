"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserItem } from "@/interface/user";
import { useMutation } from "@tanstack/react-query";
import { Session } from "next-auth";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { TbCopyCheckFilled, TbScreenShare } from "react-icons/tb";
import { createNewImpact, getImpactStatus, isMAsubmitToday } from "./actions";

import ThanksView from "./ThanksView";
import UserImpactInfo from "./UserImpactInfo";
import { useMicroActionState } from "./microActioonState";
import Image from "next/image";
import { Leaf } from "lucide-react";

const MicroActionMetrics = ({
  statusData,
}: {
  statusData: any;
  count: number;
}) => (
  <div className="grid md:grid-cols-2 gap-6 mt-5">
    {[
      {
        title: "Impacters from",
        value: statusData.data?.totalCity + " locations",
      },
      {
        title: "Impact (ongoing micro-action)",
        value: `${statusData.data?.current?.impact || 0} Kg of Co2 `,
        sub: "Eq Avoided Or Saved / Year",
      },
      {
        title: "Sustainability Warriors",
        value: statusData.data?.users.users || 0,
      },
      {
        title: "Total impact of ReThink",
        value: `${statusData.data?.total?.impact || 0} Kg of Co2 `,
        sub: "Eq Avoided Or Saved / Year",
      },
    ].map((metric, index) => (
      <div
        key={index}
        className="w-full h-36 border rounded-lg bg-primary/5 flex flex-col justify-center items-center donateBtn border-white shadow p-5 text-center"
      >
        <p className="font-medium text-white mb-3">{metric.title}</p>
        <h4 className="text-2xl text-white font-bold text-primary">
          {metric.value}
          {metric.sub && <p className="text-xs"> {metric.sub}</p>}
        </h4>
      </div>
    ))}
  </div>
);
const MicroActionSubmission = ({ data, session, handelSubmit }: any) => (
  <div className="md:mt-5 mt-3 border-2 border-primary/10 relative bg-white rounded-md p-8 ">
    <div className="mb-5">
      <Image
        src="/assets/brand-shape.png"
        width={40}
        height={40}
        alt=""
        className="object-contain  absolute -top-3 h-28 "
      />
      <h1 className="font-bold text-2xl text-center">{data.selected.title}</h1>
    </div>
    <div>
      <div className="flex flex-col md:flex-row gap-5 items-start md:items-center">
        <div
          className="text-sm text-left flex-1 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: data.selected?.description || "" }}
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-6">
        <Input
          disabled={!isMAsubmitToday(data.selected.id)}
          placeholder="Enter Your Micro Impact Count."
          className="shadow-none rounded-none bg-primary/15 p-6 border-none"
          type="number"
          value={data.data.impact}
          onChange={(e) => data.setData("impact", +e.target.value)}
        />
        <div className="flex gap-5 mt-6">
          {isMAsubmitToday(data.selected.id) ? (
            <Button
              onClick={handelSubmit}
              className=" shadow-none text-white rounded px-6 py-3 "
            >
              <Leaf size={15} className="mr-3" /> Apply Your Impact
            </Button>
          ) : (
            <></>
          )}
          {session?.user.user_type === "ambassador" && (
            <Button
              variant="outline"
              className="shadow-none text-primary border-primary/20 rounded flex items-center gap-2"
              onClick={() => {
                navigator.clipboard.writeText(
                  `https://gray-to-green.com/rethink?id=${data?.selected.id}&refer=${session?.user?.id}`
                );
                toast.success("Link Copy To clipboard");
              }}
            >
              <TbCopyCheckFilled />
            </Button>
          )}
        </div>
        {!isMAsubmitToday(data.selected.id) && (
          <p className="text-gray-600 mt-8">You can submit only once per day</p>
        )}
      </div>
    </div>
  </div>
);

function MicroActionView({
  session,
  count,
}: {
  session: Session | null;
  count: number;
}) {
  const data = useMicroActionState();
  const [thankyou, setThankYou] = useState(false);
  const [open, setOpen] = useState(false);
  const params = useSearchParams();

  useEffect(() => {
    if (session?.user) {
      const userData = localStorage.getItem("user");

      if (!userData) {
        return;
      }

      const user: UserItem = JSON.parse(userData);
      data.setData("name", user.first_name + " " + user.last_name || "");
      data.setData("email", user.email || "");
      data.setData("mobile_no", user.mobile_no || "");
      data.setData("city", user.city || "");
      data.setData("country", user.country || "");
      data.setData("id", user.id || null);
    }
  }, [session]);

  const handelSubmit = async () => {
    if (data.data.impact == undefined || data.data.impact <= 0) {
      toast.error("Action count is required");
      return;
    }
    if (!session?.user) {
      setOpen(true);
      return;
    }
    if (data.validateData()) {
      try {
        toast.dismiss();
        toast.loading("Submitting...");
        await createNewImpact({
          micro_action: data.selected?.id || "",
          submit: data.data.impact || 0,
          impact: (data.data.impact || 0) * (data.selected?.kgPerUnit || 0),
          userData: JSON.stringify(data.data),
          isPartner: session.user.user_type == "partner",
          user: data.data.id || undefined,
          refer: params.get("refer") || undefined,
        });
        toast.dismiss();
        toast.success("Submitted successfully");
        setThankYou(true);
        statusData.mutate();
        setOpen(false);
      } catch (error) {
        toast.dismiss();
        toast.error("Submission failed");
      }
    } else {
      setOpen(true);
    }
  };

  const statusData = useMutation({
    mutationKey: ["status", data.selected?.id],
    mutationFn: () =>
      getImpactStatus(
        data.selected?.id || "",
        params.get("refer") || session?.user.id || ""
      ),
  });

  const path = usePathname();

  useEffect(() => {
    if (data.selected?.id) {
      statusData.mutate();
    }
  }, [data.selected?.id]);

  if (data.selected == null) {
    return null;
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <ThanksView open={thankyou} setOpen={setThankYou} />
      <UserImpactInfo
        open={open}
        setOpen={setOpen}
        isPartner={session?.user.user_type == "partner"}
        onComplete={() => {
          setThankYou(true);
          statusData.mutate();
        }}
      />

      <div className="">
        <MicroActionSubmission
          data={data}
          session={session}
          handelSubmit={handelSubmit}
        />
      </div>

      <div className="">
        <h1 className="text-2xl font-bold text-center">Impact Statistics</h1>
        <div className="">
          <MicroActionMetrics statusData={statusData} count={count} />
          {!path.startsWith("/rethink") && (
            <div className="grid md:grid-cols-2 gap-5 mt-6">
              <div className="w-full h-36 border rounded-lg bg-primary/5 flex gap-2 flex-col justify-center items-center donateBtn border-white shadow p-5 text-center">
                <h1>
                  {" "}
                  {session?.user.user_type == "ambassador"
                    ? "Total impact ( Through links + By Ambassador )"
                    : "Total Your Impact"}
                </h1>
                <p className="text-xl font-bold text-white">
                  {statusData.data?.ambassadorImpact.impact || 0} Kg co2 Save
                </p>
                <small>Eq Avoided Or Saved / Year</small>
              </div>
              {/* No. Submitted Actions  */}
              <div className="w-full h-36 border rounded-lg bg-primary/5 flex gap-2 flex-col justify-center items-center donateBtn border-white shadow p-5 text-center">
                <h1>No. Submitted Actions</h1>
                <p className="text-xl font-bold text-white">{count || 0}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MicroActionView;

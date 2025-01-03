"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserItem } from "@/interface/user";
import { useMutation } from "@tanstack/react-query";
import { Session } from "next-auth";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { TbCopyCheckFilled, TbScreenShare } from "react-icons/tb";
import { createNewImpact, getImpactStatus, isMAsubmitToday } from "./actions";

import ThanksView from "./ThanksView";
import UserImpactInfo from "./UserImpactInfo";
import { useMicroActionState } from "./microActioonState";

const MicroActionMetrics = ({ statusData }: { statusData: any }) => (
  <div className="grid md:grid-cols-2 gap-6 mt-5">
    {[
      {
        title: "Impacters from",
        value: statusData.data?.totalCity + " locations",
      },
      {
        title: "Impact (ongoing micro-action)",
        value: `${statusData.data?.current?.impact || 0} Kgs CO2e`,
        sub: "(saved/year)",
      },
      {
        title: "Sustainability Warriors",
        value: statusData.data?.users.users || 0,
      },
      {
        title: "Total impact of ReThink",
        value: `${statusData.data?.total?.impact || 0} Kgs CO2e`,
        sub: "(saved/year)",
      },
    ].map((metric, index) => (
      <div
        key={index}
        className="w-full h-36 border rounded-2xl bg-primary/5 flex flex-col justify-center items-center donateBtn border-white shadow p-5 text-center"
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
  <div className="md:mt-5 mt-3">
    <div className="bg-yellow-400/30 rounded-2xl p-8 shadow-lg">
      <div className="flex flex-col md:flex-row gap-5 items-start md:items-center">
        <div className="w-16 flex justify-center items-center bg-orange-100 rounded-full p-3">
          <TbScreenShare size={40} className="text-orange-700" />
        </div>
        <div
          className="text-sm text-left flex-1 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: data.selected?.description || "" }}
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-6">
        <Input
          disabled={!isMAsubmitToday(data.selected.id)}
          className="shadow-md bg-white border border-gray-300 p-4 rounded-md w-full max-w-md"
          placeholder="Enter Your Micro Impact Count."
          type="number"
          value={data.data.impact}
          onChange={(e) => data.setData("impact", +e.target.value)}
        />
        <div className="flex gap-5 mt-6">
          {isMAsubmitToday(data.selected.id) ? (
            <Button
              onClick={handelSubmit}
              className="shadow-lg bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-3"
            >
              Submit
            </Button>
          ) : (
            <p className="text-gray-600">You can submit only once per day</p>
          )}
          {session?.user.user_type === "ambassador" && (
            <Button
              className="shadow-lg bg-green-500 hover:bg-green-600 text-white rounded-lg px-6 py-3 flex items-center gap-2"
              onClick={() => {
                navigator.clipboard.writeText(
                  `https://gray-to-green.com/rethink?id=${session?.user.id}&by=${data.selected?.id}`
                );
                toast.success("Link Copy To clipboard");
              }}
            >
              <TbCopyCheckFilled />
              Copy Link
            </Button>
          )}
        </div>
      </div>
    </div>
  </div>
);

function MicroActionView({ session }: { session: Session | null }) {
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
    mutationFn: () => getImpactStatus(data.selected?.id || ""),
  });

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
        onComplete={() => {
          setThankYou(true);
          statusData.mutate();
        }}
      />

      <div>
        <h1 className="font-bold text-2xl text-center">
          {data.selected.title}
        </h1>
        <MicroActionSubmission
          data={data}
          session={session}
          handelSubmit={handelSubmit}
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold text-center">Impact Statistics</h1>
        <MicroActionMetrics statusData={statusData} />
      </div>
    </div>
  );
}

export default MicroActionView;

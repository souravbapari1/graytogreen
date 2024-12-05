"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserItem } from "@/interface/user";
import { Session } from "next-auth";
import { useEffect, useState } from "react";
import { TbCopyCheckFilled, TbScreenShare } from "react-icons/tb";
import { useMicroActionState } from "./microActioonState";
import UserImpactInfo from "./UserImpactInfo";
import ThanksView from "./ThanksView";
import { createNewImpact, isMAsubmitToday } from "./actions";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

function MicroActionView({ session }: { session: Session | null }) {
  const data = useMicroActionState();
  const [thankyou, setThankYou] = useState(false);
  const [open, setOpen] = useState(false);

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
      data.setData("id", user.id || null);
    }
  }, [session]);

  const params = useSearchParams();

  const handelSubmit = async () => {
    if (data.data.impact == undefined || data.data.impact <= 0) {
      toast.error("action count is required");
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
        const res = await createNewImpact({
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
        setOpen(false);
      } catch (error) {
        toast.dismiss();
        toast.error("Submission failed");
      }
    } else {
      setOpen(true);
    }
  };
  if (data.selected == null) {
    return null;
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <UserImpactInfo
        open={open}
        setOpen={setOpen}
        onComplete={(e) => {
          setThankYou(true);
        }}
      />
      <ThanksView open={thankyou} setOpen={setThankYou} />
      <div className="">
        <h1 className="text-3xl font-bold">Impact</h1>
        <div className="grid md:grid-cols-2 gap-6 mt-5">
          <div className="w-full h-36 border rounded-2xl bg-primary/5 flex flex-col text-center justify-center items-center border-white shadow p-5">
            <p className=" font-medium text-gray-600 mb-3">Impacters from</p>
            <h4 className="text-2xl font-bold text-primary">23 locations</h4>
          </div>
          <div className="w-full h-36 border rounded-2xl bg-primary/5  text-center flex flex-col justify-center items-center border-white shadow p-5">
            <p className=" font-medium text-gray-600 mb-1">
              Impact (ongoing micro-action)
            </p>
            <h4 className="text-xl font-bold text-primary">
              498.6 Kgs CO2e
              <small className="text-xs"> (saved/year)</small>
            </h4>
          </div>
          <div className="w-full h-36 border rounded-2xl text-center bg-primary/5 flex flex-col justify-center items-center border-white shadow p-5">
            <p className="text-lg font-medium text-gray-600 mb-3">
              Sustainabilty Warriors
            </p>
            <h4 className="text-2xl font-bold text-primary">60</h4>
          </div>
          <div className="w-full h-36 border rounded-2xl bg-primary/5 text-center flex flex-col justify-center items-center border-white shadow p-5">
            <p className="text-lg font-medium text-gray-600 mb-3">
              Total impact of ReThink
            </p>
            <h4 className="text-xl font-bold text-primary">
              498.6 Kgs CO2e
              <small className="text-xs"> (saved/year)</small>
            </h4>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="font-bold text-2xl text-center">
          {data.selected.title}
        </h1>

        <div className="md:p-7 md:mt-0 mt-3">
          <div className="bg-yellow-400/30 rounded-2xl  p-8">
            <div className="flex gap-5">
              <div className="w-40">
                <TbScreenShare size={40} className="text-orange-700" />
              </div>
              <div
                className="text-sm text-left"
                dangerouslySetInnerHTML={{
                  __html: data.selected?.description || "",
                }}
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <Input
                disabled={!isMAsubmitToday(data.selected.id)}
                className="shadow-none bg-white border-none p-6 mt-9"
                placeholder="Enter Your Micro Impact Count."
                type="number"
                value={data.data.impact}
                onChange={(e) => data.setData("impact", +e.target.value)}
              />
              <div className="flex gap-5 mt-7">
                {isMAsubmitToday(data.selected.id) ? (
                  <Button
                    onClick={handelSubmit}
                    className="shadow-none mt-3 mx-auto p-5 gap-3"
                  >
                    Submit
                  </Button>
                ) : (
                  <p>You can submit only once per day</p>
                )}
                {session?.user.user_type == "ambassador" && (
                  <Button className="shadow-none mt-3 mx-auto p-5 gap-3">
                    <TbCopyCheckFilled />
                    Copy Link
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MicroActionView;

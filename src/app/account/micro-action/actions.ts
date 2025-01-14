import { client } from "@/request/actions";
import { ImpactCount, MAImpactItem, MicroActionItem } from "./md";
import { Collection } from "@/interface/collection";
import { auth } from "@/auth";
import { isTwentyFourHoursOlder } from "@/helper/dateTime";

export const getMicroActions = async ({ all }: { all: boolean }) => {
  const user = await auth();
  const userType = user?.user.user_type;
  if (!all) {
    const res = await client
      .get("/api/collections/micro_actions/records", {
        filter: `(partners~'${user?.user.id}')`,
      })
      .send<Collection<MicroActionItem>>();
    return res;
  }
  const res = await client
    .get("/api/collections/micro_actions/records")
    .send<Collection<MicroActionItem>>();
  return res;
};

export const createNewImpact = async (data: {
  micro_action: string;
  submit: number;
  impact: number;
  userData: string;
  isPartner: boolean;
  user?: string;
  refer?: string;
}) => {
  let application: any = {
    micro_action: data.micro_action,
    submit: data.submit,
    impact: data.impact,
    userData: data.userData,
  };
  if (data.user) {
    application.user = data.user;
  }
  if (data.refer) {
    application.refer = data.refer;
  }

  let res = client
    .post("/api/collections/micro_impact/records")
    .json(application);

  const action = await res.send<MAImpactItem>();
  if (data.user) {
    await assignThis({
      actionId: data.micro_action,
      user: data.user,
      isPartner: data.isPartner,
    });
  }
  const old = localStorage.getItem("microAction");
  const removeOld = JSON.parse(old || "[]").filter(
    (item: MAImpactItem) => item.micro_action !== action.micro_action
  );
  localStorage.setItem(
    "microAction",
    JSON.stringify([...(removeOld || []), action])
  );
  return action;
};

export const isMAsubmitToday = (id: string) => {
  const old = localStorage.getItem("microAction");
  const microAction: MAImpactItem[] = JSON.parse(old || "[]");
  const isSubmit = microAction.find((item) => item.micro_action === id);

  if (isSubmit) {
    const isOld = isTwentyFourHoursOlder(isSubmit.created);

    return isOld;
  } else {
    return true;
  }
};

export const getImpactStatus = async (id: string, amb: string = "") => {
  const res = await client
    .get("/maimpact/status", { id, amb })
    .send<ImpactCount>();
  return res;
};

export const assignThis = async ({
  actionId,
  user,
  isPartner,
}: {
  actionId: string;
  user: string;
  isPartner: boolean;
}) => {
  if (isPartner) {
    return;
  }
  try {
    const res = await client
      .get("/api/collections/micro_actions/records/" + actionId)
      .send<MicroActionItem>();

    const ifIserExist = res.partners.find((e) => e == user);
    if (!ifIserExist) {
      await client
        .patch("/api/collections/micro_actions/records/" + actionId)
        .json<Partial<MicroActionItem>>({
          "partners+": user,
        })
        .send<MicroActionItem>();
    }
  } catch (error) {
    console.log(error);
  }
};

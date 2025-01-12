import { Collection } from "@/interface/collection";
import { client } from "../actions";

export const getTargetStatus = async (id: string) => {
  let req: TargetStatus;
  const data = await client
    .get("/api/collections/complete_targets/records", {
      filter: `(user='${id}')`,
      perPage: 1,
    })
    .send<Collection<TargetStatus>>();

  req = data?.items?.[0];
  if (!req) {
    const data = {
      user: id,
      tree: 0,
      plastic: 0,
      carbon: 0,
      support_tree: 0,
      support_plastic: 0,
      support_carbon: 0,
    };
    req = await createTargetStatus(data);
  }

  return req;
};

export const updateTargetStatus = async (data: {
  id: string;
  tree?: number;
  plastic?: number;
  carbon?: number;
  support_tree?: number;
  support_plastic?: number;
  support_carbon?: number;
}) => {
  const userStatus = await getTargetStatus(data.id);
  console.log("OK ", userStatus);

  let req = await client
    .patch("/api/collections/complete_targets/records/" + userStatus.id)
    .json({
      tree: data.tree && userStatus.tree + data.tree,
      plastic: data.plastic && userStatus.plastic + data.plastic,
      carbon: data.carbon && userStatus.carbon + data.carbon,
      support_tree:
        data.support_tree && userStatus.support_tree + data.support_tree,
      support_plastic:
        data.support_plastic &&
        userStatus.support_plastic + data.support_plastic,
      support_carbon:
        data.support_carbon && userStatus.support_carbon + data.support_carbon,
      user: data.id,
    })
    .send<TargetStatus>();

  return req;
};

const createTargetStatus = async (data: {
  user: string;
  tree: number;
  plastic: number;
  carbon: number;
  support_tree: number;
  support_plastic: number;
  support_carbon: number;
}) => {
  let req = await client
    .post("/api/collections/complete_targets/records")
    .json(data)
    .send<TargetStatus>();
  return req;
};

export interface TargetStatus {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
  tree: number;
  plastic: number;
  carbon: number;
  support_tree: number;
  support_plastic: number;
  support_carbon: number;
  user: string;
}

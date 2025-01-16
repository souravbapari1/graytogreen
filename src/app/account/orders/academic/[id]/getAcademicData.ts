import { client } from "@/request/actions";
import { AcademicOrder } from "./academic";

export const getAcademicData = async (id: string) => {
  const response = await client
    .get(`/api/collections/academics_requests/records/${id}`, {
      expand: "user",
    })
    .send<AcademicOrder>();
  return response;
};

import { Company } from "@/interface/user";
import { client } from "../actions";

export const createCompanyRequest = async (data: {
  mr_ms: string;
  application_name: string;
  position: string;
  company_name: string;
  website: string;
  Industry_type: string;
  size_hint: string;
  city: string;
  country: string;
  about_us: string;
  resonses: string[];
}) => {
  const req = await client
    .post("/api/collections/companies/records")
    .json(data)
    .send<Company>();

  return req;
};

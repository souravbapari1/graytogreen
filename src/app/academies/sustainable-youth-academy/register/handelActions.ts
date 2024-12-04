import { client } from "@/request/actions";
import { FormState } from "./RegisterForm";

export const submitFslpRegistration = async (data: FormState, user: string) => {
  let application = {
    ...data,
  };

  //   @ts-ignore
  delete application.pic;
  //   @ts-ignore
  delete application.document;

  const res = await client
    .post("/api/collections/fslp/records")
    .form({
      application: JSON.stringify(application),
      cv: data.document,
      pic: data.pic,
      status: "pending",
      user,
    })
    .send();
  return res;
};

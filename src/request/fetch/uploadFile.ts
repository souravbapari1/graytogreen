import { auth } from "@/auth";
import { NextClient } from "../request";

const uploadUrl = "https://g2g-files.souravbapari.in";
const fileClient = new NextClient(uploadUrl, {
  headers: {
    "x-secret-key": "123456",
  },
});
export const uploadFile = async (file: any, user: string) => {
  return await fileClient
    .post("/upload/" + user)
    .form()
    .append("file", file)
    .send<FIleData>();
};

export const deleteFile = async (id: number) => {
  const req = await fileClient
    .delete("/delete/" + id)
    .send<{ message: string }>();
  console.log(req);

  return req;
};

export interface FIleData {
  id: number;
  path: string;
  file: File2;
  url: string;
}

interface File2 {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}

import { NextClient } from "./request";

export const client = new NextClient("https://graytogreen.souravbapari.in");

export function AdminAuthToken() {
  return { Authorization: "Bearer " + localStorage.getItem("token") || "" };
}

export const uploadFiles = async (data: File[]) => {
  const formdata = new FormData();
  data.forEach((file) => {
    formdata.append("file", file);
  });

  const requestOptions: any = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  const res = await fetch(
    client.baseUrl + "/api/v1/uploader/multiple",
    requestOptions
  );
  const filesData = await res.json();
  return filesData as any[];
};

export const genPbFiles = (record: any, name: string) => {
  return `${client.baseUrl}/api/files/${record.collectionId}/${record.id}/${name}`;
};

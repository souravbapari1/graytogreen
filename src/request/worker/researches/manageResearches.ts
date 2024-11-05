import { client } from "@/request/actions";
import { getAccessToken } from "../auth";
import { Collection } from "@/interface/collection";
import { ResearchItem } from "@/interface/researches";

export const getResearches = async (
  page: number = 1,
  filter?: string,
  hideFields?: string
) => {
  const token = await getAccessToken();
  const req = await client
    .get("/api/collections/researches/records", {
      perPage: 20,
      page,
      hideFields: hideFields || "content",
      filter: filter || "(public==true)",
    })
    .send<Collection<ResearchItem>>(token);
  return req;
};

export const deleteResearches = async (id: string) => {
  const token = await getAccessToken();
  const req = await client
    .delete("/api/collections/researches/records/" + id)
    .send<Collection<ResearchItem>>(token);
  return req;
};

export const getResearch = async (id: string) => {
  const token = await getAccessToken();
  const req = await client
    .get("/api/collections/researches/records/" + id)
    .send<ResearchItem>(token);
  return req;
};

export const updateResearch = async (
  id: string,
  data: {
    title: string;
    description: string;
    keywords: string;
    content: string;
    slug: string;
    public: boolean;
    status: string;
    image?: File | null;
  }
) => {
  const token = await getAccessToken();
  const req = client.patch("/api/collections/researches/records/" + id).form({
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    content: data.content,
    slug: data.slug,
    public: data.public,
    status: data.status,
  });

  if (data.image) {
    req.append("image", data.image);
  }

  return await req.send<Collection<ResearchItem>>(token);
};

export const createResearch = async (data: {
  title: string;
  description: string;
  keywords: string;
  content: string;
  slug: string;
  public: boolean;
  status: string;
  image: File;
}) => {
  const token = await getAccessToken();
  const req = await client
    .post("/api/collections/researches/records")
    .form({
      title: data.title,
      description: data.description,
      keywords: data.keywords,
      content: data.content,
      slug: data.slug,
      public: data.public,
      status: data.status,
    })
    .append("image", data.image)
    .send<Collection<ResearchItem>>(token);
  return req;
};

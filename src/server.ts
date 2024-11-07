"use server";

import { cookies } from "next/headers";

export async function setLnCookie(data: string) {
  const cookieStore = cookies();

  cookieStore.set("ln", data);
}

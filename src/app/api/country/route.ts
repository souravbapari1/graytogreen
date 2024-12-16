import data from "@/data/citycountry.json";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
  revalidatePath("/api/country");
  const country = req.nextUrl.searchParams.get("name");

  if (country) {
    return NextResponse.json(
      data.data.find(
        (item: any) => item.country.toLowerCase() == country.toLowerCase()
      )?.cities || []
    );
  }
  return NextResponse.json(data.data.map((item: any) => item.country));
}

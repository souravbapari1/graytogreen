import WorkSpace from "../components/workspace";

import { auth } from "@/auth";
import { getMicroActions } from "./actions";
import MicroActionsList from "./MicroActionsList";
import MicroActionView from "./MicroActionView";
import MicroAbout from "./MicroAbout";
import Link from "next/link";

export const revalidate = 0;
async function page() {
  const user = await auth();

  const data = await getMicroActions({ all: false });

  if (data.items.length === 0) {
    return (
      <WorkSpace>
        <div className="flex mt-10 justify-center items-center flex-col gap-4 ">
          <div className="content">
            <h1>No Micro Actions</h1>
            <p>You have no Micro Actions yet. </p>
          </div>
          <Link className="text-primary text-xs underline" href="/rethink">
            Submit First Rethink
          </Link>
        </div>
      </WorkSpace>
    );
  }

  return (
    <WorkSpace>
      <MicroActionView session={user} count={data.items.length} />
      <MicroActionsList data={data.items} />
      {/* <MicroAbout /> */}
    </WorkSpace>
  );
}

export default page;

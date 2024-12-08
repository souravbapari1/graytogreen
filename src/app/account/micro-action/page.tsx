import WorkSpace from "../components/workspace";

import { auth } from "@/auth";
import { getMicroActions } from "./actions";
import MicroActionsList from "./MicroActionsList";
import MicroActionView from "./MicroActionView";
import MicroAbout from "./MicroAbout";

export const revalidate = 0;
async function page() {
  const user = await auth();

  const data = await getMicroActions();

  return (
    <WorkSpace>
      <MicroActionView session={user} />
      <MicroActionsList data={data.items} />
      <MicroAbout />
    </WorkSpace>
  );
}

export default page;

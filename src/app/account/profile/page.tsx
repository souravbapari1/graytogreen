import { auth } from "@/auth";
import { getAmbasiderRequestState, getUser } from "@/request/worker/auth";
import WorkSpace from "../components/workspace";
import CompanyProfile from "./CompanyProfile";
import ManagePorfile from "./ManagePorfile";

export const metadata = {
  title: "Profile",
  description: "Profile",
};
export const revalidate = 0;
async function page() {
  const data = await auth();
  const profile = await getUser(data?.user.id || "", {
    expand: "company",
  });

  const ambasiderRequestState = await getAmbasiderRequestState(data?.user.id);

  return (
    <WorkSpace>
      {profile.user_type != "partner" && (
        <ManagePorfile
          user={profile}
          session={data!}
          ambassadorRequestState={ambasiderRequestState}
        />
      )}
      {profile.user_type == "partner" && (
        <CompanyProfile user={profile} session={data!} />
      )}
    </WorkSpace>
  );
}

export default page;

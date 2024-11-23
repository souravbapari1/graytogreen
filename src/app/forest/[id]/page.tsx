import MyForest from "@/app/account/my-forest/MyForest";
import NotFound from "@/app/not-found";
import Navbar from "@/components/sections/Navbar/Navbar";
import { getUser } from "@/request/worker/auth";
import React from "react";

export const revalidate = 0;
async function page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  try {
    const user = await getUser(params.id);
    if (user.user_type != "ambassador") {
      return <NotFound />;
    }
    return (
      <div className="">
        <Navbar />
        <div className="container mt-20">
          <MyForest user={user} preview={true} />
        </div>
      </div>
    );
  } catch (error) {
    return <NotFound />;
  }
}

export default page;

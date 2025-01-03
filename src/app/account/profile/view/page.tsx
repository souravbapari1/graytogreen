import React from "react";
import WorkSpace from "../../components/workspace";
import { auth } from "@/auth";
import { getUser } from "@/request/worker/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { genPbFiles } from "@/request/actions";
import { Button } from "@/components/ui/button";
import { Edit, Linkedin, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";

async function page() {
  const data = await auth();
  const profile = await getUser(data?.user.id || "", {
    expand: "company",
  });

  return (
    <WorkSpace>
      <div className="grid grid-cols-3 gap-8">
        <div className="">
          <div className="w-full h-96 bg-gray-50 flex flex-col gap-2 border border-gray-100 justify-center items-center">
            <Avatar className="w-20 h-20  ring-4 ring-primary ring-offset-2">
              <AvatarImage src={genPbFiles(profile, profile.avatar)} />
              <AvatarFallback>G</AvatarFallback>
            </Avatar>
            <p className="font-bold text-xl mt-4">
              {profile.first_name} {profile.last_name}
            </p>
            <p className="text-sm text-muted-foreground">{profile.email}</p>
            <div className="flex gap-2 mt-2">
              <Badge className="shadow-none text-xs">
                {profile.level || "N/A"}
              </Badge>

              <Badge variant="outline" className="shadow-none text-xs">
                {profile.user_type || "N/A"}
              </Badge>
            </div>

            <div className="grid grid-cols-2 w-full gap-2 mt-5 px-5">
              <div className="flex flex-col gap-2 justify-center items-center">
                <p className="text-xs">Target Plastic</p>
                <p className="font-extrabold">{profile.targetPlastic || 0}</p>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center">
                <p className="text-xs">Target Tree</p>
                <p className="font-extrabold">{profile.targetTrees || 0}</p>
              </div>
            </div>
            <div className="mt-4 flex justify-center gap-3">
              <Button
                size="sm"
                variant="outline"
                className="rounded-none flex gap-4 shadow-none"
              >
                <Edit size={14} />
              </Button>
              <Button size="sm" className="rounded-none flex gap-4 shadow-none">
                <Send size={14} />
                Request Ambassador
              </Button>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="">
            <div className="bg-gray-50 border border-gray-100   p-8 grid grid-cols-3 gap-5">
              <div className="">
                <p className="text-gray-600">Gender</p>
                <p className=" font-bold">
                  {profile.gender == "male" ? "Male" : "Female"}
                </p>
              </div>
              <div className="">
                <p className="text-gray-600">Mobile No</p>
                <p className=" font-bold">{profile.mobile_no}</p>
              </div>
              <div className="">
                <p className="text-gray-600">Country</p>
                <p className=" font-bold">{profile.country}</p>
              </div>
              <div className="">
                <p className="text-gray-600">City</p>
                <p className=" font-bold">{profile.city}</p>
              </div>
              <div className="">
                <p className="text-gray-600">DOB</p>
                <p className=" font-bold">{profile.dob}</p>
              </div>
              <div className="">
                <p className="text-gray-600">Social Stat</p>
                <p className=" font-bold">{profile.socail_state || "N/A"}</p>
              </div>
            </div>
          </div>
          <div className="p-5 bg-gray-50 border border-gray-100 mt-6">
            <p className="text-gray-600 font-bold">About</p>
            <p>{profile.breef}</p>
            <div className="flex gap-4">
              <Link href="#">
                <Linkedin size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </WorkSpace>
  );
}

export default page;

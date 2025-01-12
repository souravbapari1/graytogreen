"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShareAlt } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { MdOutlineFlag } from "react-icons/md";
import { TbEditCircle } from "react-icons/tb";
import UserMap from "../components/UserMap/UserMap";

import { UserItem } from "@/interface/user";
import { genPbFiles, localClient } from "@/request/actions";
import TargetProgress from "./TargetProgress";
import { useMyDonation } from "@/redux/state/useMyDonations";
import { useEffect } from "react";
import Loading from "@/app/loading";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
function MyForest({
  user,
  preview = false,
}: {
  user: UserItem;
  preview?: boolean;
}) {
  const { loading, loadMyDonation, mydonation, status } = useMyDonation();

  useEffect(() => {
    if (mydonation.length == 0) {
      loadMyDonation();
    }
  }, []);

  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="bg-green-50 rounded-2xl border-2 relative shadow-sm border-white  overflow-hidden">
          <Image
            src="/assets/auth-bg.jpg"
            width={1000}
            height={800}
            alt=""
            className="h-52 object-cover "
          />
          <div className="">
            <Image
              src={
                user.avatar != ""
                  ? genPbFiles(user, user.avatar)
                  : "/icons/unknown.webp"
              }
              width={1000}
              height={800}
              alt=""
              className="h-20 object-cover w-20 bg-white p-0 rounded-full  absolute m-auto left-0 right-0 -mt-10 shadow border-[3px] border-white"
            />
          </div>
          <h1 className="text-center mt-14 font-bold capitalize text-2xl text-gray-800">
            {user.first_name} {user.last_name}
          </h1>
          {preview && (
            <div className="flex justify-center items-center flex-col gap-5">
              <Link href={"/platform/?support=" + user.id}>
                <Button className="shadow-none mt-5" size="sm">
                  Support {user.first_name}
                </Button>
              </Link>
              <div className="flex justify-center items-center gap-5 pb-5">
                <Link
                  style={{
                    opacity: user.linkedin ? 1 : 0.3,
                  }}
                  href={user.linkedin || "#"}
                >
                  <Linkedin
                    size={17}
                    className="text-gray-600 hover:text-primary transition-all"
                  />
                </Link>
                <Link
                  style={{
                    opacity: user.instagram ? 1 : 0.3,
                  }}
                  href={user.instagram || "#"}
                >
                  <Instagram
                    size={17}
                    className="text-gray-600 hover:text-primary transition-all"
                  />
                </Link>
                <Link
                  style={{
                    opacity: user.twitter ? 1 : 0.3,
                  }}
                  href={user.twitter || "#"}
                >
                  <Twitter
                    size={17}
                    className="text-gray-600 hover:text-primary transition-all"
                  />
                </Link>
                <Link
                  style={{
                    opacity: user.youtube ? 1 : 0.3,
                  }}
                  href={user.youtube || "#"}
                >
                  <Youtube
                    size={19}
                    className="text-gray-600 hover:text-primary transition-all"
                  />
                </Link>
              </div>
            </div>
          )}
          {!preview && (
            <div className="flex justify-center items-center gap-6 mt-5">
              <Link
                href="/account/profile"
                className="flex justify-center items-center gap-2 bg-white border-2 border-primary/20 text-primary p-2 w-32 font-semibold rounded-3xl "
              >
                <TbEditCircle />
                <p className="text-xs">Edit Profile</p>
              </Link>
              {user.user_type == "ambassador" && (
                <div
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `${localClient.baseUrl}/forest/${user.id}`
                    );
                    toast.success("Copied to clipboard");
                  }}
                  className="flex cursor-pointer justify-center items-center gap-2 bg-white text-primary border-2 border-primary/20 p-2 w-32 font-semibold rounded-3xl "
                >
                  <AiOutlineShareAlt />
                  <p className="text-xs">Share</p>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="h-96 rounded-2xl lg:col-span-2 overflow-hidden shadow-sm object-cover w-full bg-white">
          <div className="h-80 relative">
            <UserMap />
          </div>
          <div className="h-16 text-start text-green-950 text-sm flex justify-center items-center gap-8 w-full bg-primary/5">
            <div className="flex justify-center items-center gap-3">
              <div className="w-5 h-5 flex justify-center items-center text-white rounded-3xl bg-primary">
                <MdOutlineFlag />
              </div>
              <p>{status.country} Countries</p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="w-5 h-5 flex justify-center items-center text-white rounded-3xl bg-primary">
                <FaUsers />
              </div>
              <p>{status.projects} Project</p>
            </div>
          </div>
        </div>
      </div>
      {!loading && <TargetProgress user={user} />}
      {loading && (
        <div className="w-full h-96 rounded-xl bg-gray-100 mt-10"></div>
      )}
    </div>
  );
}

export default MyForest;

"use client";
import NavLink from "@/components/sections/Navbar/NavLink";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { AiOutlineMenu } from "react-icons/ai";
import MenuLinks from "./MenuLinks";

function MobNav({ data }: { data: Session | null }) {
  return (
    <div className="flex justify-end items-center gap-5">
      <Sheet>
        <SheetTrigger>
          <AiOutlineMenu size={25} />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-5 pt-20">
          <MenuLinks data={data} />
          <NavLink exact href="#" className=" ">
            <p>Profile</p>
          </NavLink>
          <p onClick={() => signOut()}>
            <p>Logout</p>
          </p>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobNav;

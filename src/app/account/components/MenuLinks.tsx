import NavLink from "@/components/sections/Navbar/NavLink";
import { Session } from "next-auth";
import React from "react";

function MenuLinks({ data }: { data: Session | null }) {
  return (
    <>
      <NavLink exact={true} href="/account" className="">
        <p>My Balance</p>
      </NavLink>
      {data?.user?.user_type === "partner" && (
        <NavLink exact={true} href="/account/my-projects" className=" ">
          <p>My Projects</p>
        </NavLink>
      )}
      <NavLink exact={true} href="/account/my-forest" className=" ">
        <p>My Forest</p>
      </NavLink>
      <NavLink exact={true} href="/account/micro-action" className=" ">
        <p>Micro Action</p>
      </NavLink>

      <NavLink exact={true} href="/account/climat-change-impact" className=" ">
        <p>Climat Change Impact</p>
      </NavLink>
      {/* <NavLink exact={true} href="/account" className=" ">
        <p>Free Plastic</p>
      </NavLink> */}
      <NavLink exact={true} href="/account/my-program" className=" ">
        <p>Program</p>
      </NavLink>
      <NavLink exact={true} href="/account/orders" className=" ">
        <p>Orders</p>
      </NavLink>
      {data?.user.user_type === "ambassador" && (
        <NavLink exact={true} href="/account/reports" className=" ">
          <p>Reporting</p>
        </NavLink>
      )}
    </>
  );
}

export default MenuLinks;

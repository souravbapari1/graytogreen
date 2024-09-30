import NavLink from "@/components/sections/Navbar/NavLink";
import React from "react";

function MenuLinks() {
  return (
    <>
      <NavLink exact={true} href="/account" className="">
        <p>My Balance</p>
      </NavLink>
      <NavLink exact={true} href="/account/my-projects" className=" ">
        <p>My Projects</p>
      </NavLink>
      <NavLink exact={true} href="/account/my-forest" className=" ">
        <p>My Forest</p>
      </NavLink>
      <NavLink exact={true} href="/account/micro-action" className=" ">
        <p>Micro Action</p>
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
      <NavLink exact={true} href="/account/reports" className=" ">
        <p>Reporting</p>
      </NavLink>
    </>
  );
}

export default MenuLinks;

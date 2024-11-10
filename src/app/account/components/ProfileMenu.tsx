"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { montserrat } from "@/fonts/font";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

function ProfileMenu() {
  const { data } = useSession();
  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger>
          {" "}
          <Avatar className="border-primary border-2 p-[2px]">
            <AvatarImage
              src={data?.user?.image || "https://github.com/shadcn.png"}
              className="rounded-full object-cover"
            />
            <AvatarFallback>
              {data?.user?.name?.charAt(0) || "U"}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={montserrat.className}>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/account/profile" className="block">
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default ProfileMenu;

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AiOutlineMenu } from "react-icons/ai";
import ProfileMenu from "./ProfileMenu";
import MenuLinks from "./MenuLinks";
import NavLink from "@/components/sections/Navbar/NavLink";
import { Session } from "next-auth";

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
          <NavLink exact href="#" className=" ">
            <p>Logout</p>
          </NavLink>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobNav;

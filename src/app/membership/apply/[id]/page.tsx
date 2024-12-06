import NotFound from "@/app/not-found";
import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import { montserrat } from "@/fonts/font";
import Icon from "@/icons/Icon";
import { cn } from "@/lib/utils";
import { genPbFiles } from "@/request/actions";
import { getMembershipById } from "@/request/worker/membership";
import Image from "next/image";
import Qna from "./Qna";
import MemberShipBuy from "./MemberShipBuy";

async function Page({ params }: { params: { id: string } }) {
  try {
    const data = await getMembershipById(params.id);
    return (
      <div>
        <Navbar />
        <MemberShipBuy data={data} id={params.id} />
        <FooterTop />
        <Footer />
      </div>
    );
  } catch (error) {
    return <NotFound />;
  }
}

export default Page;

import NotFound from "@/app/not-found";
import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import { getMembershipById } from "@/request/worker/membership";
import MemberShipBuy from "./MemberShipBuy";
export const revalidate = 0;
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

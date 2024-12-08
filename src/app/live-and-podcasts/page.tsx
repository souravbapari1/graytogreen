import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import LiveOrPodCastVideos from "@/components/sections/LiveAndPodcasts/LiveOrPodCastVideos";
import Navbar from "@/components/sections/Navbar/Navbar";
import { Collection } from "@/interface/collection";
import { client } from "@/request/actions";
export const revalidate = 30;
async function LiveAndPodcasts() {
  const getCategory = await client
    .get("/api/collections/podcast_catagory/records")
    .send<Collection<{ id: string; name: string }>>();

  return (
    <div>
      <Navbar />
      {/* <NoLive /> */}
      <LiveOrPodCastVideos category={getCategory.items} />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default LiveAndPodcasts;

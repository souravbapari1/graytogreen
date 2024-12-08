import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import LiveOrPodCastVideos from "@/components/sections/LiveAndPodcasts/LiveOrPodCastVideos";
import Navbar from "@/components/sections/Navbar/Navbar";

function LiveAndPodcasts() {
  return (
    <div>
      <Navbar />
      {/* <NoLive /> */}
      <LiveOrPodCastVideos />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default LiveAndPodcasts;

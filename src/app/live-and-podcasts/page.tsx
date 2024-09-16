import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import LiveOrPodCastVideos from "@/components/sections/LiveAndPodcasts/LiveOrPodCastVideos";
import NoLive from "@/components/sections/LiveAndPodcasts/NoLive";
import Navbar from "@/components/sections/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import { montserrat } from "@/fonts/font";
import React from "react";
import { MdLiveTv } from "react-icons/md";

function LiveAndPodcasts() {
  return (
    <div>
      <Navbar />
      <NoLive />
      <LiveOrPodCastVideos />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default LiveAndPodcasts;

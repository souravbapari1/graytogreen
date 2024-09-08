import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="bg-[#326047] w-full h-80 mt-20 py-10">
      <div className="container">
        <Image
          src="/logo/main-logo.png"
          width={1000}
          height={1000}
          alt=""
          className="w-48 h-auto"
        />
      </div>
    </div>
  );
}

export default Footer;

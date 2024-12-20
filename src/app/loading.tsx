import Image from "next/image";
import React from "react";

function Loading({
  className = "blink",
  slide,
}: {
  className: string;
  slide?: boolean;
}) {
  return (
    <div
      className={
        "w-full h-full overflow-hidden bg-white fixed flex z-50  top-0 right-0  justify-center items-center  shadow-2xl shadow-gray-100 " +
        (slide == true ? "slide-top-hide" : null)
      }
    >
      <div className={className}>
        <Image
          src="/logo/main-logo.png"
          width={1200}
          height={1200}
          alt="logo"
          className="w-auto object-cover  h-20 py-3"
        />
      </div>
    </div>
  );
}

export default Loading;

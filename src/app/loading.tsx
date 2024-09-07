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
          className="w-auto object-cover md:h-28 h-20 py-3"
        />
      </div>
      <Image
        src="/icons/Person.svg"
        width={1200}
        height={1200}
        alt="logo"
        className="w-auto object-cover h-96 -mb-10 absolute right-0 bottom-0 py-3  md:block hidden"
      />
      <Image
        src="/icons/Trees.svg"
        width={1200}
        height={1200}
        alt="logo"
        className="w-auto object-cover h-96 -mb-10 absolute left-0 bottom-0 py-3  md:block hidden"
      />
    </div>
  );
}

export default Loading;

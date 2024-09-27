import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Image
          src="https://www.savatree.com/wp-content/uploads/2021/10/savatree-mobile-500.png"
          alt=""
          className=" h-52 w-auto object-contain md:mx-10  mx-5"
          width={100}
          height={100}
        />
        <div className="">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            deleniti, et, iusto magnam nisi quis quam fugiat ipsum eius,
            consectetur qui earum eveniet harum accusamus! Dolor itaque
            doloribus animi aspernatur!
          </p>
          <br />
          <br />
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            deleniti, et, iusto magnam nisi quis quam fugiat ipsum eius,
            consectetur qui earum eveniet harum accusamus! Dolor itaque
            doloribus animi aspernatur!
          </p>
        </div>
      </div>
      <FooterTop />
      <Footer />
    </div>
  );
}

export default page;

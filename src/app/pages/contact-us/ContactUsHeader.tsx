import { montserrat } from "@/fonts/font";
import React from "react";

function ContactUsHeader() {
  return (
    <div className={`${montserrat.className} container md:mt-32 mt-20`}>
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-4xl font-bold">Contact US</h1>
        <p className="max-w-[900px] text-center">
          Want to get in touch? We’d love to hear from you. Here’s how you can
          reach the international Plant-for-the-Planet Foundation, based in
          Oman.
        </p>
        <div className="w-full flex flex-col justify-center items-center gap-8 ">
          <p className="font-semibold text-center mt-5">
            What can we help you with?*
          </p>
          <div className="grid md:grid-cols-3 gap-6 w-full max-w-[800px]">
            {[
              "Partnerships",
              "Academics",
              "Support And Donation",
              "Donate Plant",
              "Volunteer",
            ].map((e, i) => {
              return (
                <div className="w-full h-32 bg-main/10 text-center rounded-3xl border-2 border-main/10 flex justify-center flex-col gap-4 items-center font-bold text-green-900 ">
                  <p className="w-8 h-8 flex justify-center items-center rounded-full font-light bg-main/20">
                    {i + 1}
                  </p>
                  <p>{e}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsHeader;

import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import { montserrat } from "@/fonts/font";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
const questions = [
  {
    id: 1,
    question: "Can You Save Our Planet?",
    options: ["Yes. I Save Our Planet", "No. I do not Care About Our Planet"],
  },
  {
    id: 2,
    question: "Do you recycle regularly?",
    options: ["Yes, always", "Sometimes"],
  },
  {
    id: 3,
    question: "How often do you use public transportation?",
    options: ["Daily", "Weekly"],
  },
];

function Page() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="min-h-[70vh] mt-10">
          <h1 className="text-center font-bold text-2xl underline">
            Basic Membership
          </h1>
          <div className="mt-10 grid grid-cols-2 gap-8">
            <div className="flex justify-center  items-center">
              <div className="w-full max-w-80   bg-main/10 rounded-3xl overflow-hidden  sticky top-40">
                <div className="w-full h-48 bg-main/20 border-b-[8px] border-white flex justify-center items-center">
                  <Image
                    src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/11/seed-icon.png"
                    alt=""
                    width={1200}
                    height={1200}
                    className="h-20 w-auto"
                  />
                </div>
                <div
                  className={`${montserrat.className} text-center  p-3 pt-10 pb-3 flex justify-between flex-col items-center`}
                >
                  <div className="">
                    <h1 className="font-bold text-xl mb-6">
                      Donor-Circle "Seed"
                    </h1>
                    <p className="font-semibold">$3</p>
                    <p className="capitalize mb-5">On Time</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <h3 className="text-xl">Answer these basic questions.</h3>
              <div className="mt-6">
                {questions.map((question) => (
                  <div key={question.id} className="mb-10">
                    <h1 className="font-bold text-lg mb-2">
                      {`Q${question.id}. ${question.question}`}
                    </h1>
                    <div
                      className={cn(
                        `flex flex-col select-none text-sm gap-4 ${montserrat.className}`
                      )}
                    >
                      {question.options.map((option, index) => (
                        <div className="w-full">
                          <div
                            key={index}
                            className="border-2 px-5  py-2 cursor-pointer rounded-lg"
                          >
                            <p>{option}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/membership/apply/1"
                className="donateBtn shadow-2xl py-3 mt-8 mb-7 md:px-6 rounded-xl px-8"
              >
                Submit and Proceed To Pay
              </Link>
            </div>
          </div>
        </div>
      </div>
      <FooterTop />
      <Footer />
    </div>
  );
}

export default Page;

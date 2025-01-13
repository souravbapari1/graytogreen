import React from "react";
import { getMyProgram } from "../../actions";
import WorkSpace from "@/app/account/components/workspace";
import { montserrat } from "@/fonts/font";
import Link from "next/link";
import { genPbFiles } from "@/request/actions";

export const revalidate = 0;
async function page({ params }: { params: { id: string } }) {
  const fslp = await getMyProgram(params.id);

  return (
    <WorkSpace>
      <div className="container mx-auto px-4 sm:px-8">
        <div
          className={`${montserrat.className} max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md`}
        >
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Future Sustainability Leaders Program
          </h1>
          <p className="text-lg font-semibold uppercase text-primary mb-6">
            Status: {fslp.status}
          </p>

          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold mb-2 underline">
                Applicant Details
              </h2>
              <ul className="space-y-2">
                <li>
                  <span className="font-medium">Name:</span>{" "}
                  {fslp.application.firstName + " " + fslp.application.lastName}
                </li>
                <li>
                  <span className="font-medium">Email:</span>{" "}
                  {fslp.application.emailID}
                </li>

                <li>
                  <span className="font-medium">Address:</span>{" "}
                  {fslp.application.address}
                </li>

                <div className="grid grid-cols-2 gap-10 w-full">
                  <div className="">
                    <li>
                      <span className="font-medium">Country:</span>{" "}
                      {fslp.application.country}
                    </li>
                    <li>
                      <span className="font-medium">City:</span>{" "}
                      {fslp.application.city}
                    </li>

                    <li>
                      <span className="font-medium">Date of Birth:</span>{" "}
                      {fslp.application.dob}
                    </li>
                  </div>
                  <div className="">
                    <li>
                      <span className="font-medium">Mobile:</span>{" "}
                      {fslp.application.mobileNo}
                    </li>
                    <li>
                      <span className="font-medium">Gender:</span>{" "}
                      {fslp.application.gender}
                    </li>
                    <li>
                      <span className="font-medium">Nationality:</span>{" "}
                      {fslp.application.nationality}
                    </li>
                  </div>
                </div>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 underline">
                Education Details
              </h2>
              <ul className="space-y-2">
                <li>
                  <span className="font-medium">University Name:</span>{" "}
                  {fslp.application.universityName}
                </li>
                <li>
                  <span className="font-medium">Education State:</span>{" "}
                  {fslp.application.eduState}
                </li>
                <li>
                  <span className="font-medium">Short Brief:</span>{" "}
                  {fslp.application.sortBreif}
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 underline">
                Documents
              </h2>
              <ul className="space-y-2">
                <li>
                  <span className="font-medium">CV:</span>{" "}
                  <Link
                    href={genPbFiles(fslp, fslp.cv)}
                    className="text-primary font-semibold hover:underline"
                  >
                    View CV
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </WorkSpace>
  );
}

export default page;

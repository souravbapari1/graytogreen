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
      <div className="container mx-auto px-4 sm:px-8 mb-24">
        <div className={`${montserrat.className} `}>
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
                  <span className="font-medium">Name</span>
                  <br />
                  <p className="border p-2 px-5 rounded-lg mt-1 mb-4">
                    {fslp.application.firstName +
                      " " +
                      fslp.application.lastName}
                  </p>
                </li>
                <li>
                  <span className="font-medium">Email</span>
                  <br />
                  <p className="border p-2 px-5 rounded-lg mt-1 mb-4">
                    {fslp.application.emailID}
                  </p>
                </li>

                <li>
                  <span className="font-medium">Address</span>
                  <br />
                  <p className="border p-2 px-5 rounded-lg mt-1 mb-4">
                    {fslp.application.address}
                  </p>
                </li>

                <div className="grid grid-cols-2 gap-10 w-full">
                  <div className="">
                    <li>
                      <span className="font-medium">Country</span>
                      <br />
                      <p className="border p-2 px-5 rounded-lg mt-1 mb-4">
                        {fslp.application.country}
                      </p>
                    </li>
                    <li>
                      <span className="font-medium">City</span>
                      <br />
                      <p className="border p-2 px-5 rounded-lg mt-1 mb-4">
                        {fslp.application.city}
                      </p>
                    </li>

                    <li>
                      <span className="font-medium">Date of Birth</span>
                      <br />
                      <p className="border p-2 px-5 rounded-lg mt-1 mb-4">
                        {fslp.application.dob}
                      </p>
                    </li>
                  </div>
                  <div className="">
                    <li>
                      <span className="font-medium">Mobile</span>
                      <br />
                      <p className="border p-2 px-5 rounded-lg mt-1 mb-4">
                        {fslp.application.mobileNo}
                      </p>
                    </li>
                    <li>
                      <span className="font-medium">Gender</span>
                      <br />
                      <p className="border p-2 px-5 rounded-lg mt-1 mb-4">
                        {fslp.application.gender}
                      </p>
                    </li>
                    <li>
                      <span className="font-medium">Nationality</span>
                      <br />
                      <p className="border p-2 px-5 rounded-lg mt-1 mb-4">
                        {fslp.application.nationality}
                      </p>
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
                  <span className="font-medium">University Name</span>
                  <br />
                  <p className="border p-2 px-5 rounded-lg mt-1 mb-4">
                    {fslp.application.universityName}
                  </p>
                </li>
                <li>
                  <span className="font-medium">Education State</span>
                  <br />
                  <p className="border p-2 px-5 rounded-lg mt-1 mb-4">
                    {fslp.application.eduState}
                  </p>
                </li>
                <li>
                  <span className="font-medium">Short Brief</span>
                  <br />
                  <p className="border p-2 px-5 rounded-lg mt-1 mb-4">
                    {fslp.application.sortBreif}
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 underline">
                Documents
              </h2>
              <ul className="space-y-2">
                <li>
                  <span className="font-medium">CV</span>
                  <br />
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

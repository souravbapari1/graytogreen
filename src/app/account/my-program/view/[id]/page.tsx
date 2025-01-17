import React from "react";
import { getMyProgram } from "../../actions";
import WorkSpace from "@/app/account/components/workspace";
import { montserrat } from "@/fonts/font";
import Link from "next/link";
import { genPbFiles } from "@/request/actions";
import { cn } from "@/lib/utils";

export const revalidate = 0;
async function page({ params }: { params: { id: string } }) {
  const fslp = await getMyProgram(params.id);

  return (
    <WorkSpace>
      <div className="max-w-[700px] border-t-4 border-primary bg-white w-full mx-auto shadow-md mt-10 mb-10 rounded-md px-5 pt-4">
        <h1 className="text-2xl p-10 font-bold text-center">
          Future Sustainability Leaders Program (FSLP)
        </h1>
        <p className="text-sm">
          Great that you would like to invite a Climate Justice Ambassador to
          speak at your event! Please fill in this questionnaire at the best
          possible rate and send it to event@graytogreeen.org. We will then be
          searching for suitable speakers in your region.
        </p>
        <div className="grid gap-2 mt-4">
          {/* Applicant Details */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 gap-x-4">
              <DetailRow
                label="Name"
                value={
                  fslp.application.firstName + " " + fslp.application.lastName
                }
              />
              <DetailRow label="Email" value={fslp.application.emailID} />
              <DetailRow
                label="Address"
                value={fslp.application.address}
                className="col-span-2"
              />
              <DetailRow
                label="Nationality"
                value={fslp.application.nationality}
              />
              <DetailRow label="Gender" value={fslp.application.gender} />
              <DetailRow label="Country" value={fslp.application.country} />
              <DetailRow label="City" value={fslp.application.city} />
              <DetailRow label="Date of Birth" value={fslp.application.dob} />
              <DetailRow label="Mobile" value={fslp.application.mobileNo} />
            </div>
          </div>

          {/* Education Details */}
          <div>
            <div className="grid col-span-2 gap-2 gap-x-4">
              <DetailRow
                label="University Name"
                value={fslp.application.universityName}
              />
              <DetailRow
                label="Education State"
                value={fslp.application.eduState}
              />
              <DetailRow
                label="Short Brief"
                value={fslp.application.sortBreif}
              />
            </div>
          </div>

          {/* Documents Section */}
          <div>
            <div className="grid grid-cols-1 gap-8">
              <DetailRow
                label="CV"
                value={
                  <Link
                    href={genPbFiles(fslp, fslp.cv)}
                    className="text-primary font-semibold hover:underline"
                  >
                    View CV
                  </Link>
                }
              />
            </div>
            <br />
          </div>
        </div>
      </div>
    </WorkSpace>
  );
}

function DetailRow({
  label,
  value,
  className,
}: {
  label: string;
  value: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col items-start text-left", className)}>
      <span className="font-medium text-gray-800 mb-1">{label}:</span>
      <div className="px-4 py-2 bg-white border border-gray-300 rounded-lg w-full">
        {value}
      </div>
    </div>
  );
}

export default page;

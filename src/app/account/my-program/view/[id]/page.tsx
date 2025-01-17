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
        <div className={`${montserrat.className} text-center`}>
          <h1 className="text-4xl font-bold text-gray-900 mb-10">
            Future Sustainability Leaders Program
          </h1>
          <p className="text-lg font-semibold uppercase text-primary mb-8">
            Status:{" "}
            <span className="font-normal text-gray-700">{fslp.status}</span>
          </p>

          <div className="grid gap-12 lg:gap-16">
            {/* Applicant Details */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 underline">
                Applicant Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <DetailRow
                  label="Name"
                  value={
                    fslp.application.firstName + " " + fslp.application.lastName
                  }
                />
                <DetailRow label="Email" value={fslp.application.emailID} />
                <DetailRow label="Address" value={fslp.application.address} />
                <DetailRow label="Gender" value={fslp.application.gender} />
                <DetailRow
                  label="Nationality"
                  value={fslp.application.nationality}
                />
                <DetailRow label="Country" value={fslp.application.country} />
                <DetailRow label="City" value={fslp.application.city} />
                <DetailRow label="Date of Birth" value={fslp.application.dob} />
                <DetailRow label="Mobile" value={fslp.application.mobileNo} />
              </div>
            </div>

            {/* Education Details */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 underline">
                Education Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 underline">
                Documents
              </h2>
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
            </div>
          </div>
        </div>
      </div>
    </WorkSpace>
  );
}

function DetailRow({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-start text-left">
      <span className="font-medium text-gray-800 mb-1">{label}:</span>
      <div className="px-4 py-3 bg-primary/5 rounded-lg w-full">{value}</div>
    </div>
  );
}

export default page;

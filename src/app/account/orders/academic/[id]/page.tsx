import WorkSpace from "@/app/account/components/workspace";
import React from "react";
import { getAcademicData } from "./getAcademicData";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";

export const revalidate = 0;

export default async function page({ params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const data = await getAcademicData(id);

    // Extracting relevant information
    const { academic, applicationData } = data;
    const {
      amount,
      name,
      documentId,
      maxParticipents,
      pricing,
      time,
      title,
      startDate,
      endDate,
      location,
      locationType,
    } = academic;

    const { participants, parent, message, participantQuestion } =
      applicationData;

    return (
      <WorkSpace>
        <div className="container mx-auto px-4 sm:px-8 mb-24">
          <div className="space-y-8">
            {/* Academic Info */}
            <section className="space-y-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">{title}</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DetailRow label="Event" value={name} />
                <DetailRow label="Start Date" value={startDate} />
                <DetailRow label="End Date" value={endDate} />
                <DetailRow label="Time" value={time} />
                <DetailRow label="Location" value={location} />
                <DetailRow label="Location Type" value={locationType} />
                <DetailRow label="Pricing" value={pricing} />
                <DetailRow label="Max Participants" value={maxParticipents} />
                <DetailRow label="Amount" value={`${amount} OMR`} />
              </div>
            </section>

            {/* Application Info */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 underline">
                Application Details
              </h2>

              {/* Participant Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">
                  Participant Information
                </h3>
                {participants.map((participant, index) => (
                  <div
                    key={index}
                    className=" p-5 grid grid-cols-2 gap-5 bg-primary/5 rounded-md"
                  >
                    <DetailRow
                      className="bg-white"
                      label="Name"
                      value={`${participant.firstName} ${participant.lastName}`}
                    />
                    <DetailRow
                      className="bg-white"
                      label="Gender"
                      value={participant.gender}
                    />
                    <DetailRow
                      className="bg-white"
                      label="Date of Birth"
                      value={participant.dob}
                    />
                    <DetailRow
                      className="bg-white"
                      label="School"
                      value={participant.school}
                    />
                    <DetailRow
                      className="bg-white"
                      label="Grade"
                      value={participant.grade}
                    />
                    <DetailRow
                      className="bg-white"
                      label="T-Shirt Size"
                      value={participant.tshirtSize}
                    />
                  </div>
                ))}
              </div>

              {/* Parent Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Parent Information</h3>
                <DetailRow
                  label="Name"
                  value={`${parent.firstName} ${parent.lastName}`}
                />
                <DetailRow label="Title" value={parent.title} />
                <DetailRow label="Email" value={parent.email} />
                <DetailRow label="Phone" value={parent.phone} />
                <DetailRow label="Address" value={parent.address} />
                <DetailRow label="City" value={parent.city} />
                <DetailRow label="Country" value={parent.country} />
              </div>

              {/* Additional Information */}
              <div className="space-y-4">
                <DetailRow label="Message from Parent" value={message} />
                <DetailRow
                  label="Participant Question"
                  value={participantQuestion}
                />
              </div>
            </section>
          </div>
        </div>
      </WorkSpace>
    );
  } catch (error) {
    console.log(error);
    return notFound();
  }
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
    <div className="">
      <span className="font-medium text-gray-800">{label}</span>
      <div className={cn("px-4 py-3 mt-1 bg-primary/5 rounded-md", className)}>
        {value}
      </div>
    </div>
  );
}

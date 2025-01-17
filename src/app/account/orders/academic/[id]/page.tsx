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
        <div className="container mx-auto px-4 sm:px-6 mb-12 flex justify-center">
          <div className="max-w-[700px] w-full border-t-4 border-primary  space-y-6 bg-white shadow-lg rounded-lg p-6">
            {/* Academic Info */}
            <section className="space-y-4">
              <h1 className="text-2xl mb-8 font-semibold text-gray-900 text-center">
                {title}
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 gap-x-8">
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
            <section className="space-y-4">
              {/* Participant Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Participant Information
                </h3>
                {participants.map((participant, index) => (
                  <div
                    key={index}
                    className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 rounded-md"
                  >
                    <DetailRow
                      label="Name"
                      value={`${participant.firstName} ${participant.lastName}`}
                    />
                    <DetailRow label="Gender" value={participant.gender} />
                    <DetailRow label="Date of Birth" value={participant.dob} />
                    <DetailRow label="School" value={participant.school} />
                    <DetailRow label="Grade" value={participant.grade} />
                    <DetailRow
                      label="T-Shirt Size"
                      value={participant.tshirtSize}
                    />
                  </div>
                ))}
              </div>

              {/* Parent Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Parent Information
                </h3>
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
    <div
      className={cn(
        "flex justify-start flex-col gap-2 items-start ",
        className
      )}
    >
      <p className="text-sm font-medium text-gray-700">{label}</p>
      <div
        className={cn(
          "px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-800 w-full"
        )}
      >
        {value}
      </div>
    </div>
  );
}

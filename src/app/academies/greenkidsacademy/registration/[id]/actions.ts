import { client } from "@/request/actions";
import gqlClient from "@/graphql/client";
import { gql } from "@apollo/client";
import { UpcomingAcademyData } from "../../view/[id]/academy";
import toast from "react-hot-toast";

export interface AcademicRegistrationItem {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
  academic: string;
  applicationData: string;
}

export const submitAcademicRegistration = async (formData: {
  academic: any;
  applicationData: string;
}) => {
  const data = JSON.parse(formData.academic);

  const res = await updateTheApplications(data.documentId);
  if (res) {
    const response = await client
      .post("/api/collections/academics_requests/records")
      .json({
        ...formData,
        status: "pending",
      })
      .send<AcademicRegistrationItem>();
    return response;
  }
  return res;
};

const updateTheApplications = async (id: string) => {
  console.log(id);

  const status = await gqlClient.query<UpcomingAcademyData>({
    query: gql`
      query UpcomingAcademie($documentId: ID!) {
        upcomingAcademie(documentId: $documentId) {
          applications
        }
      }
    `,
    variables: {
      documentId: id,
    },
  });

  if (
    status.data.upcomingAcademie.applications >=
    status.data.upcomingAcademie.maxParticipents
  ) {
    toast.error("Applications are closed");
    return false;
  }

  await gqlClient.query({
    query: gql`
      mutation UpdateUpcomingAcademie(
        $documentId: ID!
        $data: UpcomingAcademieInput!
      ) {
        updateUpcomingAcademie(documentId: $documentId, data: $data) {
          applications
        }
      }
    `,
    variables: {
      documentId: id,
      data: {
        applications: status.data.upcomingAcademie.applications + 1,
      },
    },
  });

  return true;
};

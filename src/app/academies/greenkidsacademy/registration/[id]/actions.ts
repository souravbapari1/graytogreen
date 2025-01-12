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
  academic: any;
  applicationData: any;
}

export const submitAcademicRegistration = async (formData: {
  academic: any;
  applicationData: string;
  user: string;
  othersData?: string;
}) => {
  const data = JSON.parse(formData.academic);

  const res = await updateTheApplications(data.documentId);

  const response = await client
    .post("/api/collections/academics_requests/records")
    .json({
      ...formData,
      status: "pending",
    })
    .send<AcademicRegistrationItem>();
  return response;
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

export const submitPaymentAcademicRegistration = async (formData: {
  academic: string;
  applicationData: string;
  user: string;
  paymentData?: {
    paymentUrl: string;
    pay_response: string;
    sessionID: string;
  };
}) => {
  // const res = await updateTheApplications(data.documentId);

  const response = await client
    .post("/api/collections/academics_requests_payment/records")
    .json({
      ...formData,
      status: "pending",
      ...formData.paymentData,
    })
    .send<
      AcademicRegistrationItem & {
        paymentUrl?: string;
        pay_response?: string;
        sessionID?: string;
      }
    >();
  return response;
};

export const updatePaymentAcademicRegistration = async (
  id: string,
  data: {
    academic?: string;
    applicationData?: string;
    user?: string;

    paymentUrl?: string;
    pay_response?: string;
    sessionID?: string;
  }
) => {
  // const res = await updateTheApplications(data.documentId);

  const response = await client
    .patch("/api/collections/academics_requests_payment/records/" + id)
    .json(data)
    .send<
      AcademicRegistrationItem & {
        paymentUrl?: string;
        pay_response?: string;
        sessionID?: string;
      }
    >();
  return response;
};

export const getAcademicPaymentRegistration = async (id: string) => {
  const req = await client
    .get("/api/collections/academics_requests_payment/records/" + id)
    .send<
      AcademicRegistrationItem & {
        paymentUrl?: string;
        pay_response?: string;
        sessionID?: string;
        user: string;
      }
    >();
  return req;
};

export const deletePaymentAcademicRegistration = async (id: string) => {
  const req = await client
    .delete("/api/collections/academics_requests_payment/records/" + id)
    .send();
  return req;
};

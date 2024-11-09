import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import { montserrat } from "@/fonts/font";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import ReviewBoard from "../standards/section/ReviewBoard";
import InfoList from "./InfoLiist";
import ProjectVerificationHero from "./ProjectVerificationHero";
import { VerificationAndReviewsData } from "./VerificationAndReviewData";
import VerificationApplyStep from "./VerificationApplyStep";
import VerificationStep from "./VerificationStep";

const PROJECT_VERIFICATION_GQL = gql`
  query VerificationAndReviews {
    verificationAndReviews {
      banner {
        title
        id
        description
        bannerImage {
          url
        }
      }
      applyInfoSteps {
        yourBenefits
        title
        id
        howToApply
        howReviewsWork
        description
      }
      cardList {
        align
        description
        id
        image {
          url
        }
        linkText
        linkUrl
        title
      }
      documentId
      language {
        name
        id
      }
      reportFraudDesc
      reportFraudTitle
      verificationSteps {
        title
        linkUrl
        linkText
        id
        description
      }
      members {
        id
        member {
          about
          id
          linkdinProfile
          name
          position
          image {
            url
          }
        }
        title
        description
      }
      headerLink
    }
  }
`;

async function ProjectVerification({ searchParams }: { searchParams?: any }) {
  const { data } = await client.query<VerificationAndReviewsData>({
    query: PROJECT_VERIFICATION_GQL,
    variables: {},
  });

  const getData = () => {
    const language = searchParams.ln || "english";
    return (
      data?.verificationAndReviews.find(
        (item) => item.language.name === language
      ) ||
      data?.verificationAndReviews.find(
        (item) => item.language.name === "english"
      )
    );
  };

  return (
    <div>
      <Navbar />
      <ProjectVerificationHero
        data={getData()?.banner}
        link={getData()?.headerLink}
      />
      <VerificationStep data={getData()?.verificationSteps} />
      <VerificationApplyStep data={getData()?.applyInfoSteps} />
      <InfoList data={getData()?.cardList} />
      <ReviewBoard
        data={getData()?.members.member}
        title={getData()?.members.title}
        description={getData()?.members.description}
      />
      {getData()?.reportFraudTitle && (
        <div className={`container py-10 ${montserrat.className}`}>
          <div className="w-full">
            <div className="mx-auto max-w-[900px]">
              <h1 className="text-3xl font-bold">
                {getData()?.reportFraudTitle}
              </h1>
              <p
                className="mt-4 "
                dangerouslySetInnerHTML={{
                  __html: getData()?.reportFraudDesc || "",
                }}
              />
            </div>
          </div>
        </div>
      )}
      <FooterTop />
      <Footer />
    </div>
  );
}

export default ProjectVerification;

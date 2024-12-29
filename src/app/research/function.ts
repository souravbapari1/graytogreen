import client from "@/graphql/client";
import { ResearchItem } from "@/interface/researches";
import { gql } from "@apollo/client";

export const getResearchesLabs = async (state: string, page: number) => {
  const data = await client.query<ResearchItem>({
    query: gql`
      query ResearchPosts(
        $filters: ResearchPostFiltersInput
        $pagination: PaginationArg
        $sort: [String]
      ) {
        researchPosts(filters: $filters, pagination: $pagination, sort: $sort) {
          documentId
          description
          locale
          previewImage {
            url
          }
          slug
          state
          title
          publishedAt
          research_category {
            name
          }
        }
      }
    `,

    variables: {
      filters: {
        state: {
          eq: state,
        },
      },
      pagination: {
        limit: 9,
        start: page * 9,
      },
      sort: ["publishedAt:desc"],
    },
  });
  return data;
};

export const getResearchPostBySlug = async (slug: string) => {
  const data = await client.query<ResearchItem>({
    query: gql`
      query ResearchPosts(
        $filters: ResearchPostFiltersInput
        $pagination: PaginationArg
        $locale: I18NLocaleCode
      ) {
        researchPosts(
          filters: $filters
          pagination: $pagination
          locale: $locale
        ) {
          documentId
          description
          locale
          previewImage {
            url
          }
          slug
          state
          title
          research_category {
            name
          }
          content
          publishedAt
        }
      }
    `,
    variables: {
      filters: {
        slug: {
          eq: slug,
        },
      },
      pagination: {
        limit: 1,
        start: 0,
      },
      locale: "en",
    },
  });
  return data;
};

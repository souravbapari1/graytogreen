import client from "@/graphql/client";
import { ResearchItem } from "@/interface/researches";
import { gql } from "@apollo/client";

export interface ResearchCategory {
  researchCategories: ResearchCategory[];
}

export interface ResearchCategory {
  name: string;
  documentId: string;
}

export const getResearchCategory = async () => {
  const data = await client.query<ResearchCategory>({
    query: gql`
      query ResearchCategories {
        researchCategories {
          name
          documentId
        }
      }
    `,
  });
  return data;
};

export const getResearchesLabs = async (state: string, page: number) => {
  const data = await client.query<ResearchItem>({
    query: gql`
      query ResearchPosts(
        $filters: ResearchPostFiltersInput
        $sort: [String]
        $pagination: PaginationArg
      ) {
        researchPosts(filters: $filters, sort: $sort, pagination: $pagination) {
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
        research_category: {
          name:
            state == "All"
              ? {}
              : {
                  eq: state,
                },
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

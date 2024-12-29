import client from "@/graphql/client";
import { BlogItem } from "@/interface/blog";
import { gql } from "@apollo/client";

export const getBlogs = async (page: number, filter?: string | null) => {
  const res = await client.query<BlogItem>({
    query: gql`
      query Blog_category(
        $locale: I18NLocaleCode
        $pagination: PaginationArg
        $filters: BlogPostFiltersInput
        $sort: [String]
      ) {
        blogPosts(
          locale: $locale
          pagination: $pagination
          filters: $filters
          sort: $sort
        ) {
          blog_category {
            name
          }
          locale
          title
          slug
          previewImage {
            url
          }
          publishedAt
          documentId
          description
        }
      }
    `,
    variables: {
      locale: "en",
      sort: ["publishedAt:desc"],
      pagination: {
        start: page * 9,
        limit: 9,
      },
      filters: filter && {
        blog_category: {
          name: {
            eq: filter,
          },
        },
      },
    },
  });

  return res;
};

export const findBySlugPost = async (slug: string) => {
  const res = await client.query<BlogItem>({
    query: gql`
      query Blog_category(
        $locale: I18NLocaleCode
        $pagination: PaginationArg
        $filters: BlogPostFiltersInput
      ) {
        blogPosts(locale: $locale, pagination: $pagination, filters: $filters) {
          blog_category {
            name
          }
          locale
          title
          slug
          content
          previewImage {
            url
          }
          publishedAt
          documentId
          description
        }
      }
    `,
    variables: {
      locale: "en",
      pagination: {
        start: 0,
        limit: 1,
      },
      filters: {
        slug: {
          eq: slug,
        },
      },
    },
  });

  return res;
};

export const searchBlogs = async (search: string) => {
  const res = await client.query<BlogItem>({
    query: gql`
      query Blog_category(
        $locale: I18NLocaleCode
        $pagination: PaginationArg
        $filters: BlogPostFiltersInput
        $sort: [String]
      ) {
        blogPosts(
          locale: $locale
          pagination: $pagination
          filters: $filters
          sort: $sort
        ) {
          blog_category {
            name
          }
          locale
          title
          slug
          previewImage {
            url
          }
          publishedAt
          documentId
          description
        }
      }
    `,
    variables: {
      locale: "en",
      sort: ["publishedAt:desc"],
      pagination: {
        start: 0,
        limit: 10,
      },
      filters: {
        title: {
          contains: search,
        },
      },
    },
  });

  return res;
};

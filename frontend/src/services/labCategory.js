import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const labCategories = createApi({
  reducerPath: "labCategories",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.React_App_Base_Url }),
  endpoints: (builder) => ({
    getLabCategories: builder.query({
      query: () => {
        return {
          url: `/Get-all-Labcategories`,
          method: "GET",
        };
      },
    }),

    getLabCategoriesById: builder.query({
      query: (id) => {
        // console.log("ID: ", id);
        return {
          url: `/Get-One-Labcategories/${id}`,
          method: "GET",
        };
      },
    }),

    createLabCategories: builder.mutation({
      query: (newData) => {
        // console.log("CREATE BLOG:", newData);
        return {
          url: `/Create-Labcategories`,
          method: "POST",
          body: newData,
          headers: {
            // "Content-Type": "multipart/form-data",
          },
        };
      },
    }),

    updateLabCategoriesById: builder.mutation({
      query: (updateData) => {
        return {
          url: `/Update-labtest/${updateData.id}`,
          method: "POST",
          body: updateData.updateData,
          headers: {
            // "Content-Type": "multipart/form-data",
            // "content-type": "application/json",
          },
        };
      },
      // invalidatesTags: ["Albums"],
    }),

    deleteLabCategoriesById: builder.mutation({
      query: (id) => {
        // console.log("DELETE ID: ", id);
        return {
          url: `/Delete-Labcategories/${id}`,
          method: "POST",
        };
      },
    }),

    publishLabCategoriesById: builder.mutation({
      query: (id) => {
        // console.log("DELETE ID: ", id);
        return {
          url: `/publishe-Labcategories/${id}`,
          method: "POST",
        };
      },
    }),
  }),
});

export const {
  useCreateLabCategoriesMutation,
  useDeleteLabCategoriesByIdMutation,
  useGetLabCategoriesByIdQuery,
  useGetLabCategoriesQuery,
  useUpdateLabCategoriesByIdMutation,
  usePublishLabCategoriesByIdMutation,
} = labCategories;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const csrfToken = document
  .querySelector('meta[name="csrf-token"]')
  .getAttribute("content");

export const labs = createApi({
  reducerPath: "labs",

  baseQuery: fetchBaseQuery({ baseUrl: process.env.React_App_Base_Url }),
  endpoints: (builder) => ({
    getLabs: builder.query({
      query: () => {
        return {
          url: `/Get-all-labs`,
          method: "GET",
        };
      },
    }),

    getLabsById: builder.query({
      query: (id) => {
        // console.log("ID: ", id);
        return {
          url: `/Get-One-lab/${id}`,
          method: "GET",
        };
      },
    }),

    createLab: builder.mutation({
      query: (newData) => {
        // console.log("CREATE BLOG:", newData);
        return {
          url: `/Create-labs`,
          method: "POST",
          body: newData,

          headers: {
            // "Content-Type": "multipart/form-data",
          },
        };
      },
    }),

    updateLabById: builder.mutation({
      query: (updateData) => {
        return {
          url: `/Update-lab/${updateData.id}`,
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

    deleteLabById: builder.mutation({
      query: (id) => {
        // console.log("DELETE ID: ", id);
        return {
          url: `/Delete-lab/${id}`,
          method: "POST",
        };
      },
    }),

    publishLabById: builder.mutation({
      query: (id) => {
        // console.log("DELETE ID: ", id);
        return {
          url: `/publishe-Lab/${id}`,
          method: "POST",
        };
      },
    }),
  }),
});

console.log(csrfToken);

export const {
  useCreateLabMutation,
  useDeleteLabByIdMutation,
  useGetLabsByIdQuery,
  useGetLabsQuery,
  useUpdateLabByIdMutation,
  usePublishLabByIdMutation,
} = labs;

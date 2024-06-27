import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const labTests = createApi({
  reducerPath: "labTests",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.React_App_Base_Url }),
  endpoints: (builder) => ({
    getLabTests: builder.query({
      query: () => {
        return {
          url: `/Get-all-labtest`,
          method: "GET",
        };
      },
    }),

    getLabTestById: builder.query({
      query: (id) => {
        // console.log("ID: ", id);
        return {
          url: `/Get-One-labtest/${id}`,
          method: "GET",
        };
      },
    }),

    createLabTest: builder.mutation({
      query: (newData) => {
        // console.log("CREATE BLOG:", newData);
        return {
          url: `/Create-labtest`,
          method: "POST",
          body: newData,
          headers: {
            // "Content-Type": "multipart/form-data",
          },
        };
      },
    }),

    updateLabTestById: builder.mutation({
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

    deleteLabTestById: builder.mutation({
      query: (id) => {
        // console.log("DELETE ID: ", id);
        return {
          url: `/Delete-labtest/${id}`,
          method: "POST",
        };
      },
    }),

    publishLabTestById: builder.mutation({
      query: (id) => {
        // console.log("DELETE ID: ", id);
        return {
          url: `/publishe-labtest/${id}`,
          method: "POST",
        };
      },
    }),
  }),
});

export const {
  useCreateLabTestMutation,
  useDeleteLabTestByIdMutation,
  useGetLabTestsQuery,
  usePublishLabTestByIdMutation,
  useGetLabTestByIdQuery,
  useUpdateLabTestByIdMutation,
} = labTests;

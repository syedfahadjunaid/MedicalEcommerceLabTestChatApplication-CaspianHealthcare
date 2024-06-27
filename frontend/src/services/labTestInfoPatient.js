import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const labTestInfoPatient = createApi({
  reducerPath: "labTestInfoPatient",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.React_App_Base_Url }),
  endpoints: (builder) => ({
    getLabTestsInfoPatient: builder.query({
      query: () => {
        return {
          url: `/Get-all-lab-pateint`,
          method: "GET",
        };
      },
    }),

    getLabTestInfoPatientById: builder.query({
      query: (id) => {
        // console.log("ID: ", id);
        return {
          url: `/Get-One-lab-pateint/${id}`,
          method: "GET",
        };
      },
    }),

    createLabTestInfoPatient: builder.mutation({
      query: (newData) => {
        // console.log("CREATE BLOG:", newData);
        return {
          url: `/Create-lab-pateint`,
          method: "POST",
          body: newData,
          headers: {
            // "Content-Type": "multipart/form-data",
          },
        };
      },
    }),

    updateLabTestInfoPatientById: builder.mutation({
      query: (updateData) => {
        return {
          url: `/Update-lab-pateint/${updateData.id}`,
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

    deleteLabTestInfoPatientById: builder.mutation({
      query: (id) => {
        // console.log("DELETE ID: ", id);
        return {
          url: `/Delete-lab-pateint/${id}`,
          method: "POST",
        };
      },
    }),
  }),
});

export const {
  useCreateLabTestInfoPatientMutation,
  useDeleteLabTestInfoPatientByIdMutation,
  useGetLabTestInfoPatientByIdQuery,
  useGetLabTestsInfoPatientQuery,
  useUpdateLabTestInfoPatientByIdMutation,
} = labTestInfoPatient;

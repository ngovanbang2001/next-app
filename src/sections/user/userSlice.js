import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "@/redux/api/apiSlice";
import { USER_API } from "@/routes/api";
import { _postApi } from "@/utils/axios";

const apiWithTag = apiSlice.enhanceEndpoints({ addTagTypes: ["Users"] });

export const userApiSlice = apiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getUserList: builder.query({
      query: () => ({
        url: USER_API,
        method: "GET",
      }),
      providesTags: ["Users"],
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: USER_API,
        data,
        method: "POST",
      }),
      invalidatesTags: ["Users"],
    }),
    updateUser: builder.mutation({
      query: ({ userId, data }) => ({
        url: `${USER_API}/${userId}`,
        data,
        method: "PUT",
      }),
      invalidatesTags: ["Users"],
    }),
    deleteUser: builder.mutation({
      query: (clientId) => ({
        url: `${USER_API}/${clientId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetUserListQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApiSlice;

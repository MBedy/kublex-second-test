import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ApiPages, ApiResult } from './types';

export const reqresApi = createApi({
  reducerPath: 'reqresApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://reqres.in/api/',
  }),
  endpoints: (builder) => ({
    getContacts: builder.query<ApiResult, { pageNumber: ApiPages }>({
      query: ({ pageNumber }) => ({
        url: `users?page=${pageNumber}&delay=1`,
      }),
    }),
    refreshContacts: builder.query<ApiResult, { pageNumber: ApiPages }>({
      query: ({ pageNumber }) => ({
        url: `users?page=${pageNumber}&delay=1`,
      }),
    }),
  }),
});

export const {
  useLazyGetContactsQuery,
  useLazyRefreshContactsQuery,
  endpoints: apiEndpoints,
} = reqresApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../../constants/apis';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl, }),

  endpoints: (builder) => ({


    getTodos: builder.query({

      query: (q) => ({
        url: '/todos',
        method: 'GET',
      })


    }),




  })
});



export const { useGetTodosQuery } = todoApi;
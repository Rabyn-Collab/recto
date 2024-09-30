import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cocktailApi = createApi({
  reducerPath: 'cocktailApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1', }),

  endpoints: (builder) => ({

    getAllDrinks: builder.query({
      query: () => ({
        url: '/list.php',
        params: {
          c: 'list'
        },
        method: 'GET',
      })
    }),




  })
});


export const { useLazyGetAllDrinksQuery, useGetAllDrinksQuery } = cocktailApi;



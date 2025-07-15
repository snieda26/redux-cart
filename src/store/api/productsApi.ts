import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '@/types/product';
import { API_BASE_URL } from '@/constants';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  tagTypes: ['Product', 'Products'],
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => '/products',
      providesTags: ['Products'],
    }),
    getProductById: builder.query<IProduct, number>({
      query: (id) => `/products/${id}`,
      providesTags: (result, error, id) => [{ type: 'Product', id }],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;

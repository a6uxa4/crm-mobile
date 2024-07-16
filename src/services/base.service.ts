import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQueryWithReauth} from '../store/interceptor';
import {IParams, IProduct, ISalesData, IOrdersData} from '../common';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryWithReauth,
  endpoints: build => ({
    getSales: build.query<ISalesData, IParams>({
      query: params => ({
        url: `/sales/filter`,
        params,
      }),
    }),
    getProducts: build.query<IProduct[], void>({
      query: () => ({
        url: `/products`,
      }),
    }),
    getOrdersData: build.query<IOrdersData, IParams>({
      query: params => ({
        url: `/order/get-report`,
        params
      })
    }),
  }),
});

export const {useGetSalesQuery, useGetProductsQuery, useGetOrdersDataQuery} = baseApi;

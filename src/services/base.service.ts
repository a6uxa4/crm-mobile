import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQueryWithReauth} from '../store/interceptor';
import {IParams, ISalesData} from '../common';

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
    getAllExpense: build.query<any, void>({
      query: () => 'all/expenses'
    }),
    getReports: build.query<any, void>({
      query: () => 'order/get-report'
    })
  }),
});

export const {useGetSalesQuery, useGetAllExpenseQuery, useGetReportsQuery} = baseApi;

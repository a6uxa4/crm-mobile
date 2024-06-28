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
      query: () => 'all/expenses',
    }),
    getReports: build.query<any, void>({
      query: () => 'order/get-report',
    }),
    getAbcAnalyze: build.query<any, void>({
      query: () => 'warehouse-product/abc',
    }),
    getRemainQuantity: build.query<any, any>({
      query: (productId) => `warehouse-product/remain-quantity?productId=${productId}`,
    }),
  }),
});

export const {
  useGetSalesQuery,
  useGetAllExpenseQuery,
  useGetReportsQuery,
  useGetAbcAnalyzeQuery,
  useGetRemainQuantityQuery
} = baseApi;

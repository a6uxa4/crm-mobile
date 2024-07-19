import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQueryWithReauth} from '../store/interceptor';
import {
  IParams,
  IProduct,
  ISalesData,
  IOrdersData,
  IFullStatsStatistic,
} from '../common';

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
        params,
      }),
    }),
    getExpenditureGet: build.query<any, IParams>({
      query: params => ({
        url: `/expenditure/expenses`,
        params,
      }),
    }),
    getExpenses: build.query<any, any>({
      query: params => ({
        url: `/all/expenses`,
        params,
      }),
    }),
    getWarehouseProductAbc: build.query<any, IParams>({
      query: params => ({
        url: `/warehouse-product/abc`,
        params,
      }),
    }),
    getRemainQuantity: build.query<any, IParams>({
      query: ({productId}) => ({
        url: `/warehouse-product/remain-quantity?productId=${productId}`,
      }),
    }),
    getFullStatsStatistic: build.query<IFullStatsStatistic, IParams>({
      query: params => ({
        url: `/sales-funnel/statistic`,
        params,
      }),
    }),
  }),
});

export const {
  useGetSalesQuery,
  useGetFullStatsStatisticQuery,
  useGetProductsQuery,
  useGetOrdersDataQuery,
  useGetExpenditureGetQuery,
  useGetWarehouseProductAbcQuery,
  useGetRemainQuantityQuery,
  useGetExpensesQuery
} = baseApi;

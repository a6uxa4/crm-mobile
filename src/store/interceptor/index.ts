import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query';
import {RootState} from '..';

export const baseQuery = fetchBaseQuery({
  baseUrl: 'https://dev-back.impulsefinance.ru',
  prepareHeaders(headers, api) {
    const token = (api.getState() as RootState).auth.user?.accessToken;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
  }

  return result;
};

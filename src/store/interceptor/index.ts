import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query';

export const baseQuery = fetchBaseQuery({
  baseUrl: 'https://dev-back.impulsefinance.ru',
  prepareHeaders(headers, api) {
    // const token = (api.getState() as RootState).auth.user?.accessToken;
    // if (token) {
    headers.set(
      'authorization',
      `Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwiaWF0IjoxNzIwNjMzNTMzLCJleHAiOjM2MDE3MjA2MzM1MzMsInN1YiI6ImxhcGlrb3ZhQGdtYWlsLmNvbSJ9.orU-letQI4uJLjho798pximtOAX6dLrb5mSKXFGu4qw`,
    );
    // }
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

import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery
} from '@reduxjs/toolkit/query'

export const baseQuery = fetchBaseQuery({
  baseUrl: 'http://84.201.167.201:8089'
})

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  if (result.error && result.error.status === 401) {
  }

  return result
}

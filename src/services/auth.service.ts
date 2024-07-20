import {createApi} from '@reduxjs/toolkit/query/react';
import {ILogin, IResponseLogin} from '../common/auth.interface';
import {baseQueryWithReauth} from '../store/interceptor';

const authService = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({
    login: builder.mutation<IResponseLogin, ILogin>({
      query: body => ({
        url: '/identity/auth/login',
        method: 'POST',
        body,
      }),
    }),
    identityUser: builder.query<any, void>({
      query: () => 'identity/users/user'
    })
  }),
});
export default authService;

export const {useLoginMutation, useIdentityUserQuery, useLazyIdentityUserQuery} = authService;

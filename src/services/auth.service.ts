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
  }),
});
export default authService;

export const {useLoginMutation} = authService;

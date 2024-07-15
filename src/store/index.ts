import {configureStore} from '@reduxjs/toolkit';
import {baseApi} from '../services/base.service';
import authService from '../services/auth.service';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [authService.reducerPath]: authService.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware, authService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

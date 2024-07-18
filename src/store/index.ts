import {configureStore} from '@reduxjs/toolkit';
import {baseApi} from '../services/base.service';
import authService from '../services/auth.service';
import {authReducer} from './slices/auth.slice';
import { helpersSlice } from './slices/helper.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    helpers: helpersSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
    [authService.reducerPath]: authService.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: ['auth.user'],
        ignoredActions: ['baseApi/executeQuery/rejected'],
      },
    }).concat(baseApi.middleware, authService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

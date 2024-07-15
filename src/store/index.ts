import {configureStore} from '@reduxjs/toolkit';
import {baseApi} from '../services/base.service';
import authService from '../services/auth.service';
import {authReducer} from './slices/auth.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
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

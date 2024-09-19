// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { tripApi } from './services/tripApi';
import { authApi } from './services/authApi';

export const store = configureStore({
  reducer: {
    [tripApi.reducerPath]: tripApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tripApi.middleware, authApi.middleware),
});

setupListeners(store.dispatch);

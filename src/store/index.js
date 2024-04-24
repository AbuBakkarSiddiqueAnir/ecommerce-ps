import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./apis/productsApi";

const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
});

export const setupStore = (preloadedState) =>
  configureStore({
    reducer: rootReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsApi.middleware),
    preloadedState,
  });

export const store = setupStore();

setupListeners(store.dispatch);

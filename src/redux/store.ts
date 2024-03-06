import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { auth_user_Api } from "./api/user@auth/user";

export const store = configureStore({
  reducer: {
    [auth_user_Api.reducerPath]: auth_user_Api.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(auth_user_Api.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

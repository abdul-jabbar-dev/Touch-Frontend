import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { user_Api } from "./api/user";
import { loadState, saveState } from "./state"; 
import auth_user from "./slices/auth";



export const store = configureStore({
  reducer: {
    [user_Api.reducerPath]: user_Api.reducer,
    auth_user: auth_user.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(user_Api.middleware),

  preloadedState: {
    auth_user: {token:loadState("token") as unknown},
  } as unknown,

});  

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

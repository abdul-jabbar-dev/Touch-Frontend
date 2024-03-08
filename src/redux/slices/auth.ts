import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const auth_user = createSlice({
  name: "auth_user",
  initialState: { token: "" },
  reducers: {
    storeToken: (state, action) => {
      state.token = action.payload;
    },
  },
});
export default auth_user;

export const { storeToken } = auth_user.actions;

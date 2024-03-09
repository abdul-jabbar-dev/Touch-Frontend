import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const auth_user = createSlice({
  name: "auth_user",
  initialState: { token: "", userInfo: {} },
  reducers: {
    storeToken: (state, action) => {
      state.token = action.payload;
    },
    addUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },  
});
export default auth_user;

export const { storeToken,addUserInfo } = auth_user.actions;

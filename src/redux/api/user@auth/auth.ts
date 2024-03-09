import ILoginData from "@/interface/user/auth/ILoginData";
import { user_Api } from "../user";
import { saveState } from "@/redux/state";
import ISendResponse from "@/interface/axios/res/ISendResponse";
import { store } from "@/redux/store";
import { addUserInfo, storeToken } from "@/redux/slices/auth";
 

const authApi = user_Api.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (data: ILoginData) => {
        return {
          url: `/users/login`,
          method: "POST",
          data,
        };
      },
    }),
    userInit: build.mutation<ISendResponse, { email: string }>({
      query: (data: { email: string }) => {
        return {
          url: `/users/init-user`,
          method: "POST",
          data,
        };
      },
      async transformResponse(data: ISendResponse): Promise<ISendResponse> {
        if (data?.status) {
          const userI = data.data;
          const user = {
            email: userI?.email,
            userName: userI?.email,
            id: userI?.id,
            accountStatus: userI?.credentials?.accountStatus,
            refreshToken: userI?.credentials?.refreshToken,
          };
          const accessToken = userI?.credentials?.accessToken;
          cookies().set("token", accessToken);//seting  in cookies
          saveState({ key: "token", value: accessToken });
          saveState({ key: "user_auth", value: user });
          store.dispatch(storeToken(accessToken));
          store.dispatch(addUserInfo(user));
        }
        return data;
      },
    }),
  }),
});
export const { useUserLoginMutation, useUserInitMutation } = authApi;

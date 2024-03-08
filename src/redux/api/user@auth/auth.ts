import ILoginData from "@/interface/user/auth/ILoginData";
import { user_Api } from "../user";
import { saveState } from "@/redux/state";
import ISendResponse from "@/interface/axios/res/ISendResponse";
import { store, useAppDispatch } from "@/redux/store";
import { storeToken } from "@/redux/slices/auth";

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
        console.log(data);
        if (data?.status) {
          saveState({ key: "token", value: (data as any).data.token });

          store.dispatch(storeToken((data as any).data.token));
        }
        return data;
      },
    }),
  }),
});
export const { useUserLoginMutation, useUserInitMutation } = authApi;

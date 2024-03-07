import ILoginData from "@/interface/user/auth/ILoginData";
import { user_Api } from "../user";

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
  }),
});
export const { useUserLoginMutation } = authApi;

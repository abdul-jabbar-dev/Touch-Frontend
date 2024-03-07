import { user_Api } from "../user";

const authApi = user_Api.injectEndpoints({
    endpoints: (build) => ({
        userLogin: build.mutation({
            query: (arg: Record<string, any>) => {
                return {
                    url: `/users/login`,
                    method: "POST",
                };
            },
        }),
    })
})
export const { useUserLoginMutation } = authApi
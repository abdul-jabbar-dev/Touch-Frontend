 
import ENV from "@/conf";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

 
export const auth_user_Api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: ENV.SERVER_URL}),
  endpoints: () => ({}),
}); 


 
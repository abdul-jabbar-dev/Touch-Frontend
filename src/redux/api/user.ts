
import ENV from "@/conf";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../axios/axios.baseQuery";


export const user_Api = createApi({
  reducerPath: "user-api",
  baseQuery: axiosBaseQuery({ baseUrl: ENV.SERVER_URL! }),
  endpoints: () => ({}),
});


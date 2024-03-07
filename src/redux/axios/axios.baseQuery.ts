import type { AxiosRequestConfig, AxiosError } from "axios";
import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { instance } from "./axiosInstance"; 

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string }  
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
      contentType?: string;
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, contentType, headers }) => {
    try {
      const result = await instance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: { "Content-Type": contentType || "application/json" },
      }); 
      return {
        data: {
          data: result?.data,
          meta: (result as any)?.meta,
          status: result?.status,
          message: (result as any)?.message,
        },
      };
    } catch (error) {
      throw error;
    }
  };

export default axiosBaseQuery;

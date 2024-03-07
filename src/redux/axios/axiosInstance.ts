 
import ISendResponse from "@/interface/axios/res/ISendResponse";
import axios from "axios";

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  // @ts-ignore
  function (response: ISendResponse) {
    return Promise.resolve({
      message: response?.data?.message,
      data: response?.data?.data,
      meta: response?.data?.meta,
      status: response?.data?.status || true,
    });
  },
  function (error:Record<any,any>) {
    return Promise.reject({
      statusCode: error?.response?.data?.statusCode || 500,
      status: error?.response?.data.status,
      statusName: error?.response?.statusText,
      errorDef: error?.response.data?.errorDef,
      message: error?.response?.data?.message || "Something went wrong",
    });
  }
);

export { instance };

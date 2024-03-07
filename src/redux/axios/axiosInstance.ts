import IError from "@/interface/axios/error/IError";
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
    const responseObject = {
      data: response?.data,
      meta: response?.meta,
    };
    return Promise.resolve(responseObject);
  },
  function (error) {
    const responseObject: IError = {
      statusCode: error?.response?.data?.statusCode || 500,
      status: error?.response?.data.status,
      // errorDef:[{}]
      message: error?.response?.data?.message || "Something went wrong",
    };
    return Promise.reject(responseObject);
  }
);

export { instance };

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
  function (response: any) {
    const responseObject = {
      data: response?.data,
      meta: response?.meta,
    };
    return Promise.resolve(responseObject);
  },
  function (error) {
    const responseObject = {
      name: error?.response?.data?.name,
      statusCode: error?.response?.data?.statusCode || 500,
      message: error?.response?.data?.message || "Something went wrong",
      path: error?.response?.data?.path,
    };
    return Promise.reject(responseObject);
  }
);

export { instance };

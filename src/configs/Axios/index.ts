// libs
import axios from "axios";

const { BASE_API } = process.env;

export const AXIOS_INSTANCE = axios.create({
  baseURL: BASE_API,
});

export const interceptRequest = () =>
  new Promise((resolve) => {
    AXIOS_INSTANCE.interceptors.request.use(
      async (nativeConfig) => ({
        ...nativeConfig,
      }),
      (error) => Promise.reject(error)
    );
    resolve();
  });

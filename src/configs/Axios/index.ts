// libs
import axios from "axios";

const { BASE_API } = process.env;

export const AXIOS_INSTANCE = axios.create({
  baseURL: BASE_API,
});

export const headers = {
  "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
  "x-rapidapi-key": "b5703a8a80msh4231d1684ee884fp11fb2fjsnf8b58389bb48",
  useQueryString: true,
};

export const interceptRequest = () =>
  new Promise((resolve) => {
    AXIOS_INSTANCE.interceptors.request.use(
      async (nativeConfig) => ({
        ...nativeConfig,
        headers,
      }),
      (error) => Promise.reject(error)
    );
    resolve();
  });

// libs
import axios from "axios";
// types
import { ENV_INFO } from "@/types/common";

const { CLIENT_ENV = "development" } = process.env;

const envInfo: ENV_INFO = {
  development: {
    BASE_URL: "",
  },
  production: {
    BASE_URL: "",
  },
};

export const AXIOS_INSTANCE = axios.create({
  baseURL: envInfo[CLIENT_ENV].BASE_URL,
});

export const { BASE_URL } = envInfo[CLIENT_ENV];

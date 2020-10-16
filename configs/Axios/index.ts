// others
import { AXIOS_INSTANCE } from "../enviroments";

const configAxiosRequest = () => {
  AXIOS_INSTANCE.interceptors.request.use(
    (req) => req,
    (error) => {
      Promise.reject(error);
    }
  );
};

export default configAxiosRequest;

// schema
import { userInfoSchema } from "./resPreprocessor";
// preprocess
import { reqPreprocessor } from "./reqPreprocessor";
// others
import { ENDPOINTS } from "@/constants";
import { executeFetch } from "@/utils";

export const fetchUserInfo = () =>
  executeFetch.call({
    url: ENDPOINTS.MAINTENANCE.FETCH_USER_INFO,
    method: "GET",
    resPreprocessor: { schema: userInfoSchema },
    reqPreprocessor,
  });

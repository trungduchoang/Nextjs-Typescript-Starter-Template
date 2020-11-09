// schema
import { userInfoSchema } from "./resPreprocessor";
// others
import { ENDPOINTS } from "@/constants";
import { executeFetch } from "@/utils";

/**
 * fetchUserInfo
 */
export const fetchUserInfo = () =>
  executeFetch.call({
    url: ENDPOINTS.MAINTENANCE.FETCH_USER_INFO,
    method: "GET",
    resPreprocessor: { schema: userInfoSchema },
  });

// mapping
import { userInfoMapping } from "./mapping";
// others
import { ENDPOINTS } from "@/services/endpoints";
import { axiosFetch } from "@/utils/axios";

export const fetchUserInfo = () =>
  axiosFetch({
    url: ENDPOINTS.ADVERTISEMENT.FETCH_HOTEL_INFO,
    method: "GET",
  }).then(userInfoMapping);

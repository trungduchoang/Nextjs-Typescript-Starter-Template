// others
import { ENDPOINTS } from "@/services/endpoints";
import { axiosFetch } from "@/utils/axios";
import { userInfoMapping } from "./mapping";

export const fetchUserInfo = () =>
  axiosFetch({
    url: ENDPOINTS.ADVERTISEMENT.FETCH_HOTEL_INFO,
    method: "GET",
  }).then(userInfoMapping);

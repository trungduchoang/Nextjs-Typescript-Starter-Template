// others
import { ENDPOINTS } from "@/services/endpoints";
import { axiosFetch } from "@/utils/axios";
import { hotelInfoMapping } from "./mapping";

export const fetchHotelInfo = () =>
  axiosFetch({
    url: ENDPOINTS.ADVERTISEMENT.FETCH_HOTEL_INFO,
    method: "GET",
  }).then(hotelInfoMapping);

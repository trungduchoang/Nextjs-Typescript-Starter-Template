// types
import { API_REQUEST } from "@/types/common";
// preprocess
import { hotelInfoSchema } from "./resPreprocessor";
import { reqPreprocessor } from "./reqPreprocessor";
// others
import { ENDPOINTS } from "@/constants";
import { executeFetch } from "@/utils";

export type PAYLOAD = {
  limit: string;
};

export const fetchHotelInfo = ({ payload }: API_REQUEST<PAYLOAD>) =>
  executeFetch.call({
    url: ENDPOINTS.ADVERTISEMENT.FETCH_HOTEL_INFO,
    method: "GET",
    payload,
    resPreprocessor: { schema: hotelInfoSchema },
    reqPreprocessor,
  });

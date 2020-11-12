// types
import { API_REQUEST } from "@/types/common";
// preprocess
import { schema } from "./resPreprocessor";
// others
import { ENDPOINTS } from "@/constants";
import { executeFetch } from "@/utils";

export type PAYLOAD = {
  /** hotel_id */
  hotel_id: string;
  /** sponsor_code */
  sponsor_code: string;
};
/**
 * fetchHotelDetail - Initial page HotelDetail
 */
export const fetchHotelDetail = ({ payload }: API_REQUEST<PAYLOAD>) =>
  executeFetch.call({
    url: ENDPOINTS.HOTEL.FETCH_HOTEL_DETAIL,
    method: "POST",
    payload,
    resPreprocessor: { schema },
  });

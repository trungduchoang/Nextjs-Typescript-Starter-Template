import { HOTEL_DETAIL_RESPONSE } from "@/types/api/hotel/fetchHotelDetail";

const initialState: HOTEL_DETAIL_RESPONSE = {
  hotelSlides: [
    {
      name: "",
      imgSrc: "",
      alt: "",
    },
  ],
  hotelName: "",
  avgPoint: "",
  emptyUpDate: "",
  emptyUpTime: "",
  hotelPricesByKind: [],
};

export function pageData(state = initialState) {
  return state;
}

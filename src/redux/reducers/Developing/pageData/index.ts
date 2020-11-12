import { HOTEL_DETAIL_RESPONSE } from "@/types/api/hotel/fetchHotelDetail";

const initialState: HOTEL_DETAIL_RESPONSE = {
  hotelSlides: [],
  hotelName: "",
  avgPoint: "1",
  emptyUpDate: "",
  emptyUpTime: "",
  hotelPricesByKind: [],
  hotelEquipByKind: [],
  socialServices: [],
  caution: "",
  staredTimes: 21,
  telNo: "",
  address: "",
  mapCode: "",
  rank: "",
  emptyStatus: "",
  emptyRoom: "",
  roomAllCount: "",
  roomCount: "",
  parking: "",
  bldgType: "",
  access: "",
  privilege: "",
  roomService: "",
  otherService: "",
  credit: "",
  halfway: "",
  headCount: "",
  reserve: "",
  rateDescription: "",
  message: "",
};

export function pageData(state = initialState) {
  return state;
}

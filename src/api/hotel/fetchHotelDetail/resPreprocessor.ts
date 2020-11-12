// libs
import { ArrayEntity } from "@/libs/rename-nested-object";

export const schema = {
  room_detail: new ArrayEntity("hotelSlides", {
    name: "name",
    image: "imgSrc",
    text: "alt",
  }),
  name: "hotelName",
  kuchikomi_all_count: "staredTimes",
  kuchikomi_avg: "avgPoint",
  empty_upDate: "emptyUpDate",
  empty_upTime: "emptyUpTime",
  hotel_prices_kind: new ArrayEntity("hotelPricesByKind", {
    name: "name",
    remarks: "remarks",
    price_info: new ArrayEntity("priceByWeek", {
      week: "week",
      time_price: new ArrayEntity("prices", {
        price: "price",
        time_zone: "timeZone",
      }),
    }),
  }),
  hotel_equips_kind: new ArrayEntity("hotelEquipByKind", {
    name: "name",
    message: "equips",
  }),
  sns: new ArrayEntity("socialServices", {
    icon: "iconSrc",
    url: "url",
  }),
  caution: "caution",
  rank: "rank",
  map_code: "mapCode",
  address: "address",
  tel: "telNo",
  empty_status: "emptyStatus",
  empty_room: "emptyRoom",
  room_all_count: "roomAllCount",
  room_count: "roomCount",
  parking: "parking",
  bldg_type: "bldgType",
  access: "access",
  privilege: "privilege",
  roomservice: "roomService",
  otherservice: "otherService",
  credit: "credit",
  halfway: "halfway",
  message: "message",
  head_count: "headCount",
  reserve: "reserve",
  pr: "rateDescription",
};

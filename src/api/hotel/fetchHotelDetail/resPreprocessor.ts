// libs
import { ArrayEntity } from "@/libs/rename-nested-object";

export const schema = {
  room_detail: new ArrayEntity("hotelSlides", {
    name: "name",
    image: "imgSrc",
    text: "alt",
  }),
  name: "hotelName",
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
};

export type HOTEL_DETAIL_RESPONSE = {
  hotelSlides: {
    name: string;
    imgSrc: string;
    alt: string;
  }[];
  hotelName: string;
  staredTimes: number;
  avgPoint: string;
  emptyUpDate: string;
  emptyUpTime: string;
  hotelPricesByKind: {
    name: string;
    remarks: string;
    priceByWeek: {
      week: string;
      prices: {
        price: string;
        timeZone: string;
      }[];
    }[];
  }[];
  hotelEquipByKind: {
    name: string;
    equips: string;
  }[];
  socialServices: {
    iconSrc: string;
    url: string;
  }[];
  caution: string;
  rank: string;
  telNo: string;
  address: string;
  mapCode: string;
  emptyStatus: string;
  emptyRoom: string;
  roomAllCount: string;
  roomCount: string;
  parking: string;
  bldgType: string;
  access: string;
  privilege: string;
  roomService: string;
  otherService: string;
  credit: string;
  halfway: string;
  headCount: string;
  reserve: string;
  rateDescription: string;
  message: string;
};

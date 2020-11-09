export type HOTEL_DETAIL_RESPONSE = {
  hotelSlides: {
    name: string;
    imgSrc: string;
    alt: string;
  }[];
  hotelName: string;
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
};

// libs
import { ArrayEntity } from "@/libs/rename-nested-object";

export const hotelInfoSchema = {
  data: new ArrayEntity("_data", {
    breed: "newName",
    country: "anyName",
    origin: "_origin",
    coat: "_coat",
    pattern: "_pattern",
  }),
  current_page: "_current_page",
};

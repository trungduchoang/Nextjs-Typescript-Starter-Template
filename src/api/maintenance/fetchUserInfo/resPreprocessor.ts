// libs
import { ObjEntity } from "@/libs/rename-nested-object";

export const userInfoSchema = {
  wind: new ObjEntity("_wind", {
    speed: "_speed",
    deg: "_deg",
  }),
  visibility: "_visibility",
};

// others
import { ArrayEntity, ObjEntity } from "@/libs/rename-nested-object";

/**
 * isNormalObj
 * @param input
 */
export const isNormalObj = (input: any) =>
  input instanceof Object &&
  !(input instanceof ObjEntity) &&
  !(input instanceof ArrayEntity);

export * from "./axios";
export * from "./redux";

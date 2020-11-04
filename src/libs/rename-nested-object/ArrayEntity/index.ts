// types
import { ANY_OBJECT } from "@/types/common";

class ArrayEntity extends Array {
  constructor(name: string, schema: ANY_OBJECT) {
    super();
    this[0] = { name, schema };
  }
}

export default ArrayEntity;

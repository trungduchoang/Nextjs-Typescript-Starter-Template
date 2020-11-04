// types
import { ANY_OBJECT } from "@/types/common";

class ObjEntity extends Object {
  constructor(name: string, schema: ANY_OBJECT) {
    super();
    this.name = name;
    this.schema = schema;
  }

  name: string;

  schema: ANY_OBJECT;
}

export default ObjEntity;

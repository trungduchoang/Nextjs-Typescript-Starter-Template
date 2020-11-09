// constructors
import ArrayEntity from "./ArrayEntity";
import ObjEntity from "./ObjEntity";
// types
import { ANY_OBJECT } from "@/types/common";
// others
import { isNormalObj } from "@/utils";
import { ValidationError } from "../ErrorHandler";

type PROPS = {
  /** Object input */
  input: any;
  /** output schema */
  schema: ANY_OBJECT;
};
/**
 * deepRename - deepRename nested Object base on schema
 */
export const deepRename = ({ input, schema }: PROPS) => {
  if (!input) {
    throw new ValidationError("Input is undefined");
  }

  const result: ANY_OBJECT = {};
  Object.keys(schema).forEach((key) => {
    const schema$key = schema[key];
    const input$key = input[key];

    if (!input$key) {
      throw new ValidationError(`Property ${key} does not exist in: 
      ${JSON.stringify(input, null, 2)}`);
    }

    if (schema$key instanceof ObjEntity) {
      result[schema$key.name] = deepRename({
        input: input$key,
        schema: schema$key.schema,
      });
    }
    if (schema$key instanceof ArrayEntity) {
      result[schema$key[0].name] = [
        ...Array(input$key.length).keys(),
      ].map((_, i) =>
        deepRename({ input: input$key[i], schema: schema$key[0].schema })
      );
    }
    if (isNormalObj(schema$key)) {
      result[schema$key] = deepRename({
        input: input$key,
        schema: schema$key,
      });
    }
    if (typeof schema$key === "string") result[schema$key] = input$key;
  });

  return result;
};

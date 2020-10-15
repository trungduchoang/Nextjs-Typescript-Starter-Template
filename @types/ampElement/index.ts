import { COMMON_ELEMENT_ATTRIBUTES } from "./common";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "amp-img": {
        alt?: string;
        src?: string;
        srcset?: string;
        [name: string]: any;
      } & COMMON_ELEMENT_ATTRIBUTES;
      [name: string]: any;
    }
  }
}

export {};

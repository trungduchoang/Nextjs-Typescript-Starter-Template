type LAYOUT =
  | "nodisplay"
  | "fixed"
  | "responsive"
  | "intrinsic"
  | "flex-item"
  | "container"
  | "fill"
  | "fixed-height";

export interface COMMON_ELEMENT_ATTRIBUTES {
  layout?: LAYOUT;
  width?: string | number;
  height?: string | number;
  media?: any;
  placeholder?: any;
  fallback?: any;
  sizes?: string;
  on?: string;
  noloading?: any;
}

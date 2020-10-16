// types
import { ROUTES } from "@/types/common";
// others
import CONSTANTS from "@/constants";

const ROUTES: ROUTES = [
  {
    pageName: CONSTANTS.PAGE_NAME.HOME,
    path: CONSTANTS.ROUTES.HOME,
    pages: "Home",
  },
  {
    pageName: "Test",
    path: "/test",
    pages: "test-on-tap",
  },
];

export default ROUTES;

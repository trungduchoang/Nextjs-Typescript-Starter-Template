// types
import { ROUTE } from "@/types/common";
// others
import CONSTANTS from "@/constants";

const routes: ROUTE = [
  {
    pageName: CONSTANTS.PAGE_NAME.HOME,
    path: CONSTANTS.ROUTE.HOME,
    pages: "Home",
  },
  {
    pageName: "Test",
    path: "/test",
    pages: "test-on-tap",
  },
];

export default routes;

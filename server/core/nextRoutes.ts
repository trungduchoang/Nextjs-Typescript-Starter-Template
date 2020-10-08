import CONSTANTS from "@/constants";

const routes = require("next-routes");

const routerObj = new routes()
  .add(CONSTANTS.PAGE_NAME.HOME, "/", "")
  .add("Name", "/aa", "/Hello");

export const { Link } = routerObj;
export default routerObj;
// ///////////////Continue with /aa /Hello hể

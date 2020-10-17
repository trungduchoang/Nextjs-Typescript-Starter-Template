// libs
import Router from "next-routes";
// routes
import routes from "./routes";

const appRoutes = new Router();

routes.forEach((route) => {
  appRoutes.add(route.pageName, route.path, route.pages);
});

export { appRoutes };

// libs
import next from "next";
import { createServer } from "http";
// routes
import routes from "@/routes";

require("dotenv").config();

const { PORT = "3000", NODE_ENV = "development" } = process.env;
const port = parseInt(PORT, 10) || 3000;
const dev = NODE_ENV !== "production";

const nextApp = next({ dev });
const requestHandler = routes.getRequestHandler(nextApp);

nextApp.prepare().then(() => {
  createServer(requestHandler).listen(port);
});

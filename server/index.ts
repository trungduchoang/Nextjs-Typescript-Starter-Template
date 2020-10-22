// libs
import next from "next";
import express from "express";
// routes
import { appRoutes } from "../src/routes";

require("dotenv").config();

const { PORT = "3000", NODE_ENV = "development" } = process.env;
const port = parseInt(PORT, 10) || 3000;
const dev = NODE_ENV !== "production";

const nextApp = next({ dev });
const requestHandler = appRoutes.getRequestHandler(nextApp);

nextApp.prepare().then(() => {
  const server = express();
  server.use(requestHandler).listen(port);
});

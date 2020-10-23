// libs
import next from "next";
import express from "express";

require("dotenv").config();

const { PORT = "3000", NODE_ENV = "development" } = process.env;
const port = parseInt(PORT, 10) || 3000;
const dev = NODE_ENV !== "production";

const nextApp = next({ dev });
const requestHandler = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const server = express();
  server.get("*", (req, res) => requestHandler(req, res));
  server.listen(port);
});

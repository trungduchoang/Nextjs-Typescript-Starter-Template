import next from "next";
import express from "express";

require("dotenv").config();

const { PORT = "3000", NODE_ENV } = process.env;

const port = parseInt(PORT, 10);
const isDev = NODE_ENV !== "production";

if (isDev)
  console.log(
    `NODE_ENV: ${NODE_ENV}`,
    `\nPORT: ${PORT}`,
    `\nBASE_API: ${process.env.BASE_API}`
  );

const nextApp = next({ dev: isDev });
const requestHandler = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const server = express();
  server.get("*", (req, res) => requestHandler(req, res));
  server.listen(port);
});

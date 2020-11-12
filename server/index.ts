import next from "next";
import express from "express";

const PORT = 3000;
const isDev = process.env.NODE_ENV === "development";

const nextApp = next({ dev: isDev });
const requestHandler = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const server = express();
  server.get("*", (req, res) => requestHandler(req, res));
  server.listen(PORT);
});

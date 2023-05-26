const express = require("express");
const authroute = require("./Auth/route");
const dataroute = require("./Data/route");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

server.use(express.json());

server.use(cors({ origin: "http://localhost:3000" }));
server.use(helmet());

server.use("/api/auth", authroute);
server.use("/api/data", dataroute);
module.exports = server;

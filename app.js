const express = require("express");
const cors = require("cors");
const config = require("./config");
const mainRouter = require("./network/mainRouter");
const connectDB = require("./db");

const createApp = () => {
  const app = express();
  connectDB(config.dbUrl);
  app.use(cors());
  app.use(express.json());
  mainRouter(app);
  return app;
};

module.exports = createApp;

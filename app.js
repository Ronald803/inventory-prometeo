const express = require("express");
const cors = require("cors");
const config = require("./config");

const createApp = () => {
  const app = express();
  app.use(cors());
  return app;
};

module.exports = createApp;

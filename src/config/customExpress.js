const express = require("express");
const { routes } = require("../routes");

module.exports = () => {
  const app = express();

  app.use(routes);

  return app;
};

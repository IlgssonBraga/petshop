
const { Router } = require("express");
const { servicesRouter } = require("./services/services.routes");

const routes = Router();

routes.use(servicesRouter);

module.exports = {
  routes,
};

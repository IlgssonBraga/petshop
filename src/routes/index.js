const { servicesRouter } = require("./services/services.routes");

const { Router } = require("express");

const routes = Router();

routes.use(servicesRouter);

module.exports = {
  routes,
};

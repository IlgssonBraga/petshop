const { Router } = require("express");
const { ServicesController } = require("../../controllers/ServicesController");

const servicesRouter = Router();

const servicesController = new ServicesController();

servicesRouter.get("/services", servicesController.index);
servicesRouter.post("/services", servicesController.store);

module.exports = {
  servicesRouter,
};

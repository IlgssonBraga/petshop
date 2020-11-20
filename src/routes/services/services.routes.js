const { Router } = require("express");

const servicesRouter = Router();

servicesRouter.get("/services", (req, res) => res.send("Services"));

module.exports = {
  servicesRouter,
};

class ServicesController {
  async index(req, res) {
    res.send("Hello, services!!!");
  }

  async store(req, res) {
    res.send("POST services");
  }
}

module.exports = {
  ServicesController,
};

class ServicesController {
  async index(req, res) {
    res.send("Hello, services!!!");
  }
}

app.get("/services", (req, res) => {});

module.exports = {
  ServicesController,
};

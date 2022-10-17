const SociosService = require("../services/SociosService");
module.exports = {
  listAll: function (req, res) {
    res.statusCode = 200;
    SociosService.getAllSocios().then((items) => {
      res.set("Content-Type", "application/json");
      res.send(JSON.stringify(items));
    });
  },
  update: function (req, res) {
    res.statusCode = 200;
    let body = req.body;
    SociosService.updateSocio(body).then((items) => {
      res.set("Content-Type", "application/json");
      res.send(JSON.stringify(items));
    });
  },
  add: function (req, res) {
    res.statusCode = 200;
    let body = req.body;
    SociosService.addSocio(body).then((items) => {
      res.set("Content-Type", "application/json");
      res.send(JSON.stringify(items));
    });
  },
  findById: function (req, res) {
    let { socioID } = req.params;
    res.statusCode = 200;
    SociosService.findSocioById(socioID).then((items) => {
      res.set("Content-Type", "application/json");
      res.send(JSON.stringify(items));
    });
  },
  deleteById: function (req, res) {
    let { socioID } = req.params;
    res.statusCode = 200;
    SociosService.deleteById(socioID).then((items) => {
      res.set("Content-Type", "application/json");
      res.send(JSON.stringify("Sócio deletado"));
    });
  },
};

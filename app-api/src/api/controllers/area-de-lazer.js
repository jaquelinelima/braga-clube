const AreasDeLazerService = require("../services/AreasDeLazerService");
module.exports = {
  listAll: function (req, res) {
    res.statusCode = 200;
    AreasDeLazerService.getAllAreasDeLazer().then((items) => {
      res.set("Content-Type", "application/json");
      res.send(JSON.stringify(items));
    });
  },
  update: function (req, res) {
    res.statusCode = 200;
    let body = req.body;
    AreasDeLazerService.updateAreaDeLazer(body).then((items) => {
      res.set("Content-Type", "application/json");
      res.send(JSON.stringify(items));
    });
  },
  add: function (req, res) {
    res.statusCode = 200;
    let body = req.body;
    AreasDeLazerService.addAreaDeLazer(body).then((items) => {
      res.set("Content-Type", "application/json");
      res.send(JSON.stringify(items));
    });
  },
  findById: function (req, res) {
    let { areaID } = req.params;
    res.statusCode = 200;
    AreasDeLazerService.findAreaDeLazerById(areaID).then((items) => {
      res.set("Content-Type", "application/json");
      res.send(JSON.stringify(items));
    });
  },
  deleteById: function (req, res) {
    let { areaID } = req.params;
    res.statusCode = 200;
    AreasDeLazerService.deleteById(areaID).then((items) => {
      res.set("Content-Type", "application/json");
      res.send(JSON.stringify("Área de lazer deletada"));
    });
  },
};

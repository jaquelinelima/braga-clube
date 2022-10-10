const AreasDeLazerService = require("../services/AreasDeLazerService");
module.exports = {
  listAll: function (req, res) {
    AreasDeLazerService.getAllAreasDeLazer().then((items) => {
      res.set("Content-Type", "application/json");
      res.statusCode = 200;
      res.send(JSON.stringify(items));
    });
  },
  update: function (req, res) {
    let body = req.body;
    AreasDeLazerService.updateAreaDeLazer(body).then((items) => {
      res.statusCode = 200;
      res.set("Content-Type", "application/json");
      res.send(JSON.stringify(items));
    });
  },
  add: function (req, res) {
    let body = req.body;
    AreasDeLazerService.addAreaDeLazer(body).then((items) => {
      res.set("Content-Type", "application/json");
      res.statusCode = 200;

      res.send(JSON.stringify(items));
    });
  },
  findById: function (req, res) {
    let { areaID } = req.params;
    AreasDeLazerService.findAreaDeLazerById(areaID).then((items) => {
      res.set("Content-Type", "application/json");
      res.statusCode = 200;
      res.send(JSON.stringify(items));
    });
  },
  deleteById: function (req, res) {
    let { areaID } = req.params;
    AreasDeLazerService.deleteById(areaID).then((items) => {
      res.set("Content-Type", "application/json");
      res.statusCode = 200;

      res.send(JSON.stringify(items));
    });
  },
};

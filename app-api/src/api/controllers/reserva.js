const ReservaService = require("../services/ReservaService");
module.exports = {
  listAll: function (req, res) {
    ReservaService.getAllReservas().then((items) => {
      res.set("Content-Type", "application/json");
      res.statusCode = 200;
      res.send(JSON.stringify(items));
    });
  },
  update: function (req, res) {
    let body = req.body;
    ReservaService.updateReserva(body).then((items) => {
      res.statusCode = 200;
      res.set("Content-Type", "application/json");
      res.send(JSON.stringify(items));
    });
  },
  add: function (req, res) {
    let body = req.body;
    ReservaService.addReserva(body).then((items) => {
      res.set("Content-Type", "application/json");
      res.statusCode = 200;

      res.send(JSON.stringify(items));
    });
  },
  findById: function (req, res) {
    let { reservaID } = req.params;
    ReservaService.findReservaById(reservaID).then((items) => {
      res.set("Content-Type", "application/json");
      res.statusCode = 200;
      res.send(JSON.stringify(items));
    });
  },
  deleteById: function (req, res) {
    let { reservaID } = req.params;
    ReservaService.deleteById(reservaID).then((items) => {
      res.set("Content-Type", "application/json");
      res.statusCode = 200;

      res.send(JSON.stringify(items));
    });
  },
};

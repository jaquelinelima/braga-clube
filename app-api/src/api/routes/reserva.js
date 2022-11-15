const { Router } = require("express");
const reservaRouter = Router();
const reservaController = require("../controllers/reserva");

reservaRouter.get("/reserva/:reservaID", reservaController.findById);
reservaRouter.delete("/reserva/:reservaID", reservaController.deleteById);
reservaRouter.get("/reserva", reservaController.listAll);
reservaRouter.put("/reserva", reservaController.update);
reservaRouter.post("/reserva", reservaController.add);

module.exports = reservaRouter;

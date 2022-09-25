const { Router } = require("express");
const socioRouter = Router();
const socioController = require("../controllers/socio");

socioRouter.get("/socio/:socioID", socioController.findById);
socioRouter.delete("/socio/:socioID", socioController.deleteById);
socioRouter.get("/socio", socioController.listAll);
socioRouter.put("/socio", socioController.update);
socioRouter.post("/socio", socioController.add);

module.exports = socioRouter;

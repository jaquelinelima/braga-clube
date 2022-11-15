const { Router } = require("express");
const socioRouter = Router();
const socioController = require("../controllers/socio");

socioRouter.get("/socios/:socioID", socioController.findById);
socioRouter.delete("/socios/:socioID", socioController.deleteById);
socioRouter.get("/socios", socioController.listAll);
socioRouter.put("/socios", socioController.update);
socioRouter.post("/socios", socioController.add);

module.exports = socioRouter;

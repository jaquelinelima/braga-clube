const { Router } = require("express");
const areaDeLazerRouter = Router();
const areaDeLazerController = require("../controllers/area-de-lazer");

areaDeLazerRouter.get("/area-de-lazer/:areaID", areaDeLazerController.findById);
areaDeLazerRouter.delete(
  "/area-de-lazer/:areaID",
  areaDeLazerController.deleteById
);
areaDeLazerRouter.get("/area-de-lazer", areaDeLazerController.listAll);
areaDeLazerRouter.put("/area-de-lazer", areaDeLazerController.update);
areaDeLazerRouter.post("/area-de-lazer", areaDeLazerController.add);

module.exports = areaDeLazerRouter;

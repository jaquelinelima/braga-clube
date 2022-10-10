const express = require("express");
const cors = require("cors");
const areaDeLazerRouter = require("./api/routes/area-de-lazer");
const socioRouter = require("./api/routes/socio");
const app = express();

//Configuração dos middlewares
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.info(`${req.method} - ${req.originalUrl}`);
  next();
});
app.use(areaDeLazerRouter);
app.use(socioRouter);

//Configuração das rotas da API
app.get("/", (req, res) => {
  res.send("Express server");
  res.end();
});

//Exporta o aplicativo express configurado
module.exports = app;

const express = require("express");
const cors = require("cors");
const areaDeLazerRouter = require("./src/api/routes/area-de-lazer");
const socioRouter = require("./src/api/routes/socio");
const reservaRouter = require("./src/api/routes/reserva");
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
app.use(reservaRouter);
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Algo deu errado!");
});
//Configuração das rotas da API
app.get("/", (req, res) => {
  res.send("Express server");
  res.end();
});

//Exporta o aplicativo express configurado
module.exports = app;

const express = require("express");
const cors = require("cors");
const router = require("./routes/routes")
const app = express();

//Configuração dos middlewares
app.use(cors());
app.use(router)

//Configuração das rotas da API
app.get("/", (req, res) =>{
    res.send("Express server");
    res.end();
});

//Exporta o aplicativo express configurado
module.exports = app;
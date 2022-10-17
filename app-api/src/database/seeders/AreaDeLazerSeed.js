const AreaDeLazer = require("../models/AreaDeLazer");
module.exports = (database) => {
  database.create(
    new AreaDeLazer({
      id: 10,
      nome: "Salão de festas",
      descricao: "Salão de festas do BragaClube",
    })
  );
  database.create(
    new AreaDeLazer({
      id: 11,
      nome: "Área de churrasco",
      descricao: "Área de churrasco do BragaClube",
    })
  );
  database.create(
    new AreaDeLazer({
      id: 12,
      nome: "Piscina",
      descricao: "Piscina do BragaClube",
    })
  );
};

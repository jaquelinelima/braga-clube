"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("AreaDeLazer", [
      {
        nome: "Salão de festas",
        descricao: "Salão de festas do BragaClube",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Piscina aquecida",
        descricao: "Piscina aquecida do BragaClube",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Sauna",
        descricao: "Sauna do BragaClube",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("AreaDeLazer", null, {});
  },
};

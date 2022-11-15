"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Socios", [
      {
        nome: "Bruno",
        cpf: "123.123.123-12",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Karen",
        cpf: "123.123.123-13",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Socios", null, {});
  },
};

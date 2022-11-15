"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Reservas", [
      {
        socioID: 1,
        areaID: 1,
        datahoraEntrada: new Date("2022-09-17T18:00:00.000Z"),
        datahoraSaida: new Date("2022-09-17T20:00:00.000Z"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        socioID: 2,
        areaID: 2,
        datahoraEntrada: new Date("2022-09-17T18:00:00.000Z"),
        datahoraSaida: new Date("2022-09-17T20:00:00.000Z"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Reservas", null, {});
  },
};

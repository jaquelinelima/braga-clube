"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reserva extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reserva.hasOne(models.Socio, {
        foreignKey: "id",
        onDelete: "NOTHING",
      });
      Reserva.hasOne(models.AreaDeLazer, {
        foreignKey: "id",
        onDelete: "NOTHING",
      });
    }
  }
  Reserva.init(
    {
      socioID: {
        type: DataTypes.INTEGER,
        references: {
          model: "Socio",
          key: "id",
          as: "socioID",
        },
      },
      areaID: {
        type: DataTypes.INTEGER,
        references: {
          model: "AreaDeLazer",
          key: "id",
          as: "areaID",
        },
      },
      datahoraEntrada: DataTypes.DATE,
      datahoraSaida: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Reserva",
    }
  );
  return Reserva;
};

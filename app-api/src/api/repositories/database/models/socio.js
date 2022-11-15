"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Socio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Socio.init(
    {
      nome: DataTypes.STRING,
      cpf: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Socio",
    }
  );
  return Socio;
};

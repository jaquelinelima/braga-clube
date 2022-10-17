"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AreaDeLazer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AreaDeLazer.init(
    {
      nome: DataTypes.STRING,
      descricao: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "AreaDeLazer",
      freezeTableName: true,
    }
  );
  return AreaDeLazer;
};

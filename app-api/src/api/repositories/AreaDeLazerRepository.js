const database = require("./database/database");
const AreaDeLazer = require("./database/models/AreaDeLazer");
const AreaDeLazerSeed = require("./database/seed/AreaDeLazerSeed");
class AreaDeLazerRepository {
  constructor() {
    // Quando definirmos o ORM, precisaremos adicionar o model aqui.
    // this.model = ItemPatrimonioModel;
    AreaDeLazerSeed(database);
    this.database = database;
  }
  all() {
    return database.getAll();
  }
  find(areaDeLazerID) {
    return database.findById(areaDeLazerID);
  }
  create(areaDeLazer) {
    const newAreaDeLazer = new AreaDeLazer(areaDeLazer);
    database.create(newAreaDeLazer);
    return newAreaDeLazer;
  }
  update(areaDeLazer) {
    const updatedAreaDeLazer = new AreaDeLazer(areaDeLazer);
    return database.update(updatedAreaDeLazer);
  }
  delete(areaDeLazerID) {
    return database.deleteById(areaDeLazerID);
  }
}

module.exports = new AreaDeLazerRepository();

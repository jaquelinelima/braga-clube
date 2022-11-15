const database = require("./models/database/database");
const Socio = require("./models/Socio");
const SocioSeed = require("./seeders/SocioSeed");
class SocioRepository {
  constructor() {
    this.model = Socio;
    this.database = database;
  }
  all() {
    return database.getAll();
  }
  find(socioID) {
    return database.findById(socioID);
  }
  create(socio) {
    const newSocio = new Socio(socio);
    database.create(newSocio);
    return newSocio;
  }
  update(socio) {
    const updatedSocio = new Socio(socio);
    return database.update(updatedSocio);
  }
  delete(socioID) {
    return database.deleteById(socioID);
  }
}

module.exports = new SocioRepository();

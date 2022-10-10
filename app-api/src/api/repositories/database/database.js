const AreaDeLazer = require("./models/AreaDeLazer");

// Classe que serve de banco de dados temporário. Será substituído pelo ORM.
class Banco {
  constructor() {
    this.areas = [];
  }

  getAll() {
    return this.areas;
  }
  findById(areaID) {
    let index;
    let areaDeLazer = this.areas.filter((area, i) => {
      if (area.id == areaID) {
        index = i;
        return true;
      }
      return false;
    });
    return areaDeLazer[0];
  }
  create(novaAreaDeLazer) {
    if (!novaAreaDeLazer instanceof AreaDeLazer) {
      throw new Error("DB: Objeto não é do tipo AreaDeLazer");
    }
    let index;
    let areaDeLazer = this.areas.filter((area, i) => {
      if (area.id == novaAreaDeLazer.id) {
        index = i;
        return true;
      }
      return false;
    });
    if (areaDeLazer.length === 0) {
      index = this.areas.push(novaAreaDeLazer) - 1;
    }
    return this.areas[index];
  }
  update(areaDeLazerToUpdate) {
    let index;
    let areaDeLazer = this.areas.filter((area, i) => {
      if (area.id == areaDeLazerToUpdate.id) {
        index = i;
        return true;
      }
      return false;
    });
    if (areaDeLazer.length > 0) {
      this.areas[index] = areaDeLazerToUpdate;
    }
    return this.areas[index];
  }

  deleteById(areaID) {
    let index;
    let areasDeLazer = this.areas.filter((area, i) => {
      if (area.id != areaID) {
        index = i;
        return true;
      }
      return false;
    });
    console.log(areasDeLazer.length);
    console.log(this.areas.length);
    if (areasDeLazer.length != this.areas.length) {
      this.areas = areasDeLazer;
      return true;
    }
    return false;
  }
}

let banco = new Banco();

module.exports = banco;

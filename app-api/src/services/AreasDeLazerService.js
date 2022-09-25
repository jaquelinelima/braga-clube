module.exports = {
  areasDeLazer: [
    {
      id: 10,
      nome: "Salão de festas",
      descricao: "Salão de festas do BragaClube",
    },
    {
      id: 11,
      nome: "Área de churrasco",
      descricao: "Área de churrasco do BragaClube",
    },
    {
      id: 12,
      nome: "Piscina",
      descricao: "Piscina do BragaClube",
    },
  ],
  getAllAreasDeLazer: async function () {
    return this.areasDeLazer;
  },
  updateAreaDeLazer: async function (areaDeLazerToUpdate) {
    let index;
    let areaDeLazer = this.areasDeLazer.filter((area, i) => {
      if (area.id == areaDeLazerToUpdate.id) {
        index = i;
        return true;
      }
      return false;
    });
    if (areaDeLazer.length > 0) {
      this.areasDeLazer[index] = areaDeLazerToUpdate;
    }
    return this.areasDeLazer[index];
  },
  addAreaDeLazer: async function (areaDeLazerToAdd) {
    let index;
    let areaDeLazer = this.areasDeLazer.filter((area, i) => {
      if (area.id == areaDeLazerToAdd.id) {
        index = i;
        return true;
      }
      return false;
    });
    if (areaDeLazer.length === 0) {
      index = this.areasDeLazer.push(areaDeLazerToAdd) - 1;
    }
    return this.areasDeLazer[index];
  },
  findAreaDeLazerById: async function (areaID) {
    let index;
    let areaDeLazer = this.areasDeLazer.filter((area, i) => {
      if (area.id == areaID) {
        index = i;
        return true;
      }
      return false;
    });
    return areaDeLazer[0];
  },
  deleteById: async function (areaID) {
    let index;
    let areasDeLazer = this.areasDeLazer.filter((area, i) => {
      if (area.id != areaID) {
        index = i;
        return true;
      }
      return false;
    });
    this.areasDeLazer = areasDeLazer;
    return;
  },
};

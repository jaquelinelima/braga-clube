const AreaDeLazerRepository = require("../repositories/AreaDeLazerRepository");

module.exports = {
  getAllAreasDeLazer: async function () {
    const data = await AreaDeLazerRepository.all();
    return data;
  },
  updateAreaDeLazer: async function (areaDeLazerToUpdate) {
    const data = await AreaDeLazerRepository.update(areaDeLazerToUpdate);
    return data;
  },
  addAreaDeLazer: async function (areaDeLazerToAdd) {
    const data = await AreaDeLazerRepository.create(areaDeLazerToAdd);
    return data;
  },
  findAreaDeLazerById: async function (areaID) {
    const data = await AreaDeLazerRepository.find(areaID);
    return data;
  },
  deleteById: async function (areaID) {
    const data = await AreaDeLazerRepository.delete(areaID);
    return data ? "Área de lazer deletada" : "Área de lazer não encontrada";
  },
};

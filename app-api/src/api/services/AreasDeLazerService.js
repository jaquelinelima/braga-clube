const { AreaDeLazer } = require("../repositories/database/models");

module.exports = {
  getAllAreasDeLazer: async function () {
    const data = await AreaDeLazer.findAll();
    return data;
  },
  updateAreaDeLazer: async function (areaDeLazerToUpdate) {
    const data = await this.findAreaDeLazerById(areaDeLazerToUpdate.id);
    await data.update(areaDeLazerToUpdate);
    await data.save();
    return data;
  },
  addAreaDeLazer: async function (areaDeLazerToAdd) {
    const data = await AreaDeLazer.create(areaDeLazerToAdd);
    if (data) return { status: "Area De Lazer criada com sucesso." };
    else return { status: "Não foi possível criar a Area De Lazer" };
  },
  findAreaDeLazerById: async function (areaID) {
    const data = await AreaDeLazer.findOne({ where: { id: areaID } });
    return data;
  },
  deleteById: async function (areaID) {
    const status = await AreaDeLazer.delete(areaID);
    if (status) return { status: "Area De Lazer removida com sucesso." };
    else return { status: "Area De Lazer não encontrada." };
  },
};

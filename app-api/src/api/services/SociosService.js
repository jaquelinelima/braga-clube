const { Socio } = require("../../database/models");

module.exports = {
  getAllSocios: async function () {
    const data = await Socio.findAll();
    return data;
  },
  updateSocio: async function (socioToUpdate) {
    const data = await this.findSocioById(socioToUpdate.id);
    await data.update(socioToUpdate);
    await data.save();
    return data;
  },
  addSocio: async function (socioToAdd) {
    const data = await Socio.create(socioToAdd);
    if (data) return { status: "Socio criado com sucesso." };
    else return { status: "Não foi possível criar o Socio" };
  },
  findSocioById: async function (socioID) {
    const data = await Socio.findOne({ where: { id: socioID } });
    return data;
  },
  deleteById: async function (socioID) {
    const status = await Socio.delete(socioID);
    if (status) return { status: "Socio removido com sucesso." };
    else return { status: "Socio não encontrado." };
  },
};

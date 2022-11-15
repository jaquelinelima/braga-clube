const { Reserva } = require("../repositories/database/models");

module.exports = {
  getAllReservas: async function () {
    const data = await Reserva.findAll();
    return data;
  },
  updateReserva: async function (reservaToUpdate) {
    const data = await this.findReservaById(reservaToUpdate.id);
    await data.update(reservaToUpdate);
    await data.save();
    return data;
  },
  addReserva: async function (reservaToAdd) {
    const data = await Reserva.create(reservaToAdd);
    if (data) return { status: "Reserva criada com sucesso." };
    else return { status: "Não foi possível criar a Reserva" };
  },
  findReservaById: async function (reservaID) {
    const data = await Reserva.findOne({ where: { id: reservaID } });
    return data;
  },
  deleteById: async function (reservaID) {
    const status = await Reserva.delete(reservaID);
    if (status) return { status: "Reserva removida com sucesso." };
    else return { status: "Reserva não encontrada." };
  },
  getAllReservasBySocioId: async function (socioID) {
    const data = await Reserva.findAll({ where: { socioID: socioID } });
    return data;
  },
  getAllReservasByAreaId: async function (areaID) {
    const data = await Reserva.findAll({ where: { areaID: areaID } });
    return data;
  },
};

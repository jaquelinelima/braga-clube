const database = require("./models/database/database");
const Reserva = require("./models/Reserva");
const ReservaSeed = require("./seeders/ReservaSeed");
class ReservaRepository {
  constructor() {
    this.model = Reserva;
    this.database = database;
  }
  all() {
    return database.getAll();
  }
  find(reservaID) {
    return database.findById(reservaID);
  }
  create(reserva) {
    const newReserva = new Reserva(reserva);
    database.create(newReserva);
    return newReserva;
  }
  update(reserva) {
    const updatedReserva = new Reserva(reserva);
    return database.update(updatedReserva);
  }
  delete(reservaID) {
    return database.deleteById(reservaID);
  }
}

module.exports = new ReservaRepository();

module.exports = {
  socios: [
    {
      id: 14,
      nome: "Bruno",
      cpf: "111.111.111-11",
    },
    {
      id: 15,
      nome: "Karen",
      cpf: "222.222.222-22",
    },
    {
      id: 16,
      nome: "Kaique",
      cpf: "333.333.333-33",
    },
    {
      id: 17,
      nome: "Osvaldo",
      cpf: "444.444.444-44",
    },
    {
      id: 17,
      nome: "Jaqueline",
      cpf: "555.555.555-55",
    },
    {
      id: 18,
      nome: "Carlos",
      cpf: "666.666.666-66",
    },
  ],
  getAll: async function () {
    return this.socios;
  },
  update: async function (data) {
    let index;
    let socio = this.socios.filter((socio, i) => {
      if (socio.id == data.id) {
        index = i;
        return true;
      }
      return false;
    });
    if (socio.length > 0) {
      this.socios[index] = data;
    }
    return this.socios[index];
  },
  add: async function (data) {
    let index;
    let socio = this.socios.filter((socio, i) => {
      if (socio.id == data.id) {
        index = i;
        return true;
      }
      return false;
    });
    if (socio.length === 0) {
      index = this.socios.push(data) - 1;
    }
    console.log(index);

    return this.socios[index];
  },
  findById: async function (id) {
    let index;
    let socio = this.socios.filter((socio, i) => {
      if (socio.id == id) {
        index = i;
        return true;
      }
      return false;
    });
    return socio[0];
  },
  deleteById: async function (id) {
    let index;
    let socio = this.socios.filter((socio, i) => {
      if (socio.id != id) {
        index = i;
        return true;
      }
      return false;
    });
    this.socios = socio;
    return socioID;
  },
};

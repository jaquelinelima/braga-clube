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
  getAllSocios: async function () {
    return this.socios;
  },
  updateSocio: async function (socioToUpdate) {
    let index;
    let socio = this.socios.filter((socio, i) => {
      if (socio.id == socioToUpdate.id) {
        index = i;
        return true;
      }
      return false;
    });
    if (socio.length > 0) {
      this.socios[index] = socioToUpdate;
    }
    return this.socios[index];
  },
  addSocio: async function (socioToAdd) {
    let index;
    let socio = this.socios.filter((socio, i) => {
      if (socio.id == socioToAdd.id) {
        index = i;
        return true;
      }
      return false;
    });
    if (socio.length === 0) {
      index = this.socios.push(socioToAdd) - 1;
    }
    console.log(index);

    return this.socios[index];
  },
  findSocioById: async function (socioID) {
    let index;
    let socio = this.socios.filter((socio, i) => {
      if (socio.id == socioID) {
        index = i;
        return true;
      }
      return false;
    });
    return socio[0];
  },
  deleteById: async function (socioID) {
    let index;
    let socio = this.socios.filter((socio, i) => {
      if (socio.id != socioID) {
        index = i;
        return true;
      }
      return false;
    });
    this.socios = socio;
    return socioID;
  },
};

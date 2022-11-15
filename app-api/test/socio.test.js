const request = require("supertest");
const app = require("../app");

describe('Testes para o path "/socios"', () => {
  test("[GET /socios] Recupera todos os sócios", async () => {
    const res = await request(app)
      .get("/socios")
      .set("Accept", "application/json");

    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);

    let primeiro_socio = res.body[0];
    expect(primeiro_socio).toHaveProperty("id");
    expect(primeiro_socio).toHaveProperty("nome");
    expect(primeiro_socio).toHaveProperty("cpf");
    expect(primeiro_socio).toHaveProperty("createdAt");
    expect(primeiro_socio).toHaveProperty("updatedAt");
  });
  test("[POST /socios] Cadastra um novo sócio", async () => {
    const socio = {
      nome: "Bruno Borelli",
      cpf: "321.321.321-32",
    };
    const res = await request(app)
      .post("/socios")
      .send(socio)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");

    expect(res.body.status).toBe("Socio criado com sucesso.");
  });
});

const request = require("supertest");
const app = require("../src/app");

test("Should sign up a new user", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "Johnny",
      email: "johnny@johnny.com",
      password: "test1234",
    })
    .expect(201);
});

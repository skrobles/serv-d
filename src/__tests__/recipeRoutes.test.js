/**
 * @jest-environment node
 */

const request = require("supertest");
const { server } = require("../../server");
const { login } = require("./login");

// close the server after each test
afterAll(() => {
  server.close();
  console.log("server closed!");
});

describe("GET recipe route tests", () => {
  let query, response;
  beforeAll(async () => {
    query = { ingredients: "potato" };
    response = await request(server)
      .get("/api/recipes")
      .set({ withCredentials: false })
      .query(query);
  });

  it("should return status code 200", () => {
    expect(response.status).toEqual(200);
  });

  it("should return 6 recipes", () => {
    expect(JSON.parse(response.text).length).toEqual(6);
  });

  it("should recipes with the queried ingredients", () => {
    expect(response.text).toContain(query.ingredients);
  });
});

/**
 * @jest-environment node
 */

const request = require("supertest");
const { server } = require("../../server");

describe("recipe route tests", () => {
  test("get recipes route GET /", async () => {
    let query = { ingredients: "potato" };
    const response = await request(server)
      .get("/api/recipes")
      .set({ withCredentials: false })
      .query(query);
    expect(response.status).toEqual(200);
    expect(JSON.parse(response.text).length).toEqual(6);
    expect(response.text).toContain(query.ingredients);
  });
});

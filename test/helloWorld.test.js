const insertGame = require("../functions/insertGame");

it("should return a JSON response", async () => {
  const response = await insertGame.handler();
  const responseJson = JSON.parse(response.body);
  expect(responseJson.hello).toBe("world");
});
const request = require("supertest");
const app = require("./index");

describe("My awesome service", () => {
  it("should get a greeting", () => {
    return request(app)
      .get("/")
      .expect("Hello World! This app is live!!");
  });
});

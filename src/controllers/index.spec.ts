import request from "supertest";
import { app } from "../app";

describe("indexController test", () => {
  it("GET /", (done) => {
    request(app).get("/").expect(200).expect({ msg: "hello!" }, done);
  });
});

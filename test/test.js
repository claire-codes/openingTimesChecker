var expect = require("chai").expect;
var app = require("../src/app");

describe("hello world app", function () {
  it("works", function () {
    expect(app.helloWorld()).to.equal("Hello World");
  });
});

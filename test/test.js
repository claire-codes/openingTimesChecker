var expect = require("chai").expect;
var app = require("../src/app");

describe("Time Checker", function () {
  describe("checks a time is between a start and end time", function () {
      
    it("returns true if a time is between times", function () {
      expect(app.timeChecker()).to.be.true;
    });

    it("returns false if a time is not between times", function () {
      expect(app.timeChecker([8,0,0])).to.be.false;

    });
  });
});

describe("hello world app", function () {
  it("works", function () {
    expect(app.helloWorld()).to.equal("Hello World");
  });
});

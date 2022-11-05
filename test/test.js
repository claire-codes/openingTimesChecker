var expect = require("chai").expect;
var app = require("../src/app");

describe("Time Checker", function () {
  describe("checks a time is between a start and end time, good user input", function () {
    it("returns true if a time is between times", function () {
      expect(app.timeChecker([12, 0, 0], [11, 0, 0], [13, 0, 0])).to.be.true;
    });

    it("returns false if a time is not between times", function () {
      expect(app.timeChecker([8, 0, 0], [11, 0, 0], [14, 0, 0])).to.be.false;
    });

    it("returns true if all times are the same", function () {
      expect(app.timeChecker([7, 0, 0], [7, 0, 0], [7, 0, 0])).to.be.true;
    });

    it("returns true if start and target times are the same", function () {
      expect(app.timeChecker([7, 0, 0], [7, 0, 0], [8, 0, 0])).to.be.true;
    });

    it("returns true if end and target times are the same", function () {
      expect(app.timeChecker([8, 0, 0], [6, 0, 0], [8, 0, 0])).to.be.true;
    });
  });

  describe("handles rubbish input", function () {
    it("returns false if no input", function () {
      expect(app.timeChecker()).to.be.false;
    });
  });
});

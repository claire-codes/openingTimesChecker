import { expect } from "chai";
import { prettyPrintTime, isArrayOfArrays } from "../code/util.js";

describe("pretty prints a time", function () {
    it("returns true if a time is between times", function () {
        expect(prettyPrintTime([12, 0])).to.equal("12:00");
        expect(prettyPrintTime([13, 0])).to.equal("13:00");
        expect(prettyPrintTime([0, 0])).to.equal("00:00");
        expect(prettyPrintTime([1, 0])).to.equal("01:00");
        expect(prettyPrintTime([23, 0])).to.equal("23:00");
        expect(prettyPrintTime([24, 0])).to.equal("00:00");
        expect(prettyPrintTime([0, 1])).to.equal("00:01");
        expect(prettyPrintTime([0, 30])).to.equal("00:30");
        expect(prettyPrintTime([0, 59])).to.equal("00:59");

        expect(prettyPrintTime([12, 0, 0])).to.equal("12:00");
        expect(prettyPrintTime([13, 0, 0])).to.equal("13:00");
        expect(prettyPrintTime([0, 0, 0])).to.equal("00:00");
        expect(prettyPrintTime([1, 0, 0])).to.equal("01:00");
        expect(prettyPrintTime([23, 0, 0])).to.equal("23:00");
        expect(prettyPrintTime([24, 0, 0])).to.equal("00:00");
        expect(prettyPrintTime([0, 1, 0])).to.equal("00:01");
        expect(prettyPrintTime([0, 30, 0])).to.equal("00:30");
        expect(prettyPrintTime([0, 59, 0])).to.equal("00:59");
        // Garbage ones
        // Seconds ones
    });
});

describe('isArrayOfArrays', () => {
 it("checks for an array containing arrays", function () {
        expect(isArrayOfArrays([[]])).to.be.true;
        expect(isArrayOfArrays([[],[]])).to.be.true;
        expect(isArrayOfArrays([[1]])).to.be.true;
        expect(isArrayOfArrays([[1],[2]])).to.be.true;
        expect(isArrayOfArrays([12, 0])).to.be.false;
        expect(isArrayOfArrays([])).to.be.false;
        expect(isArrayOfArrays()).to.be.false;
        expect(isArrayOfArrays('foo')).to.be.false;
 });
})

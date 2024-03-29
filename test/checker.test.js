import { expect } from "chai";
import {
    timeChecker,
    storeOpeningTimeChecker,
    whichStoresAreOpen,
} from "../code/checker.js";
import storeObject from "./data/storeTimes.json" assert { type: "json" };
import storeWithMultipleTimes from "./data/storeWithMultipleTimes.json" assert { type: "json" };
import storesObject from "./data/stores.json" assert { type: "json" };

describe("Time Checker", function () {
    describe("checks a time is between a start and end time, good user input", function () {
        it("returns true if a time is between times", function () {
            expect(timeChecker([12, 0], [11, 0], [13, 0])).to.be.true;
        });

        it("returns false if a time is before the times", function () {
            expect(timeChecker([8, 0], [11, 0], [14, 0])).to.be.false;
        });

        it("returns false if a time is after the times", function () {
            expect(timeChecker([20, 0], [11, 0], [14, 0])).to.be.false;
        });

        it("returns true if all times are the same", function () {
            expect(timeChecker([7, 0], [7, 0], [7, 0])).to.be.true;
        });

        it("returns true if start and target times are the same", function () {
            expect(timeChecker([7, 0], [7, 0], [8, 0])).to.be.true;
        });

        it("returns true if end and target times are the same", function () {
            expect(timeChecker([8, 0], [6, 0], [8, 0])).to.be.true;
        });

        it("returns false for midnight 00", function () {
            expect(timeChecker([0, 0], [6, 0], [8, 0])).to.be.false;
        });

        it("returns false for midnight 24", function () {
            expect(timeChecker([24, 0], [6, 0], [8, 0])).to.be.false;
        });
    });

    describe("handles rubbish input", function () {
        it("returns false if no input", function () {
            expect(timeChecker()).to.be.false;
        });

        it("returns false for false time, positive number like 25", function () {
            expect(timeChecker([25, 0], [6, 0], [8, 0])).to.be.false;
        });

        it("returns false for false time, negative number like -1", function () {
            expect(timeChecker([-1, 0], [6, 0], [8, 0])).to.be.false;
        });
    });
});

describe("storeOpeningTimeChecker", function () {
    describe("checking a single store", function () {
        it("says whether the store is open at a certain time, true", function () {
            expect(storeOpeningTimeChecker("Monday", [16, 0], storeObject))
                .to.be.true;
        });

        it("says whether the store is open at a certain time, false", function () {
            expect(storeOpeningTimeChecker("Monday", [22, 0], storeObject))
                .to.be.false;
        });
    });

    describe("checking a store with multiple open and closed periods per day", function(){
        it("says the store is open", function() {
            expect(storeOpeningTimeChecker("Monday", [1,45], storeWithMultipleTimes)).to.be.false;
            expect(storeOpeningTimeChecker("Monday", [9,15], storeWithMultipleTimes)).to.be.true;
            expect(storeOpeningTimeChecker("Monday", [12,30], storeWithMultipleTimes)).to.be.false;
            expect(storeOpeningTimeChecker("Monday", [13,45], storeWithMultipleTimes)).to.be.true;
            expect(storeOpeningTimeChecker("Monday", [17,2], storeWithMultipleTimes)).to.be.false;
        })
    })

    describe("checking multiple stores and finding which ones are open", function () {
        it("returns an array of stores", function () {
            expect(
                whichStoresAreOpen("Monday", [16, 0], storesObject)
            ).to.eql(["Asda", "Morrisons"]);
        });

        it("returns an empty array of stores if none open", function () {
            expect(
                whichStoresAreOpen("Monday", [1, 0], storesObject)
            ).to.eql([]);
        });
    });
});

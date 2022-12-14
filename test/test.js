var expect = require('chai').expect;
var checker = require('../src/checker');
var storeObject = require('../data/test/storeTimes.json');
var storesObject = require('../data/test/stores.json');

describe('Time Checker', function () {
    describe('checks a time is between a start and end time, good user input', function () {
        it('returns true if a time is between times', function () {
            expect(checker.timeChecker([12, 0, 0], [11, 0, 0], [13, 0, 0])).to.be
                .true;
        });

        it('returns false if a time is not between times', function () {
            expect(checker.timeChecker([8, 0, 0], [11, 0, 0], [14, 0, 0])).to.be
                .false;
        });

        it('returns true if all times are the same', function () {
            expect(checker.timeChecker([7, 0, 0], [7, 0, 0], [7, 0, 0])).to.be.true;
        });

        it('returns true if start and target times are the same', function () {
            expect(checker.timeChecker([7, 0, 0], [7, 0, 0], [8, 0, 0])).to.be.true;
        });

        it('returns true if end and target times are the same', function () {
            expect(checker.timeChecker([8, 0, 0], [6, 0, 0], [8, 0, 0])).to.be.true;
        });
    });

    describe('handles rubbish input', function () {
        it('returns false if no input', function () {
            expect(checker.timeChecker()).to.be.false;
        });
    });
});

describe('storeOpeningTimeChecker', function () {
    it('says whether the store is open at a certain time, true', function () {
        expect(checker.storeOpeningTimeChecker('Monday', [16, 0, 0], storeObject))
            .to.be.true;
    });

    it('says whether the store is open at a certain time, false', function () {
        expect(checker.storeOpeningTimeChecker('Monday', [22, 0, 0], storeObject))
            .to.be.false;
    });
});

describe('checking multiple stores and finding which ones are open', function () {
    it('returns an array of stores', function () {
        expect(
            checker.whichStoresAreOpen('Monday', [16, 0, 0], storesObject)
        ).to.eql(['Asda', 'Morrisons']);
    });
});

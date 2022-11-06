let timeChecker = function (
    currentTime = [8, 0, 0],
    startTime = [9, 0, 0],
    endTime = [17, 0, 0]
) {
    let currentDate = new Date();
    let startDate = new Date();
    let endDate = new Date();

    startDate.setHours(startTime[0], startTime[1], startTime[2]);
    endDate.setHours(endTime[0], endTime[1], endTime[2]);
    currentDate.setHours(currentTime[0], currentTime[1], currentTime[2]);

    // console.log(currentDate);
    // console.log(startDate);
    // console.log(endDate);

    if (currentDate >= startDate && currentDate <= endDate) {
        return true;
    }
    return false;
};

let storeOpeningTimeChecker = function (day, time = [0, 0, 0], storeObject) {
    let times = storeObject.openingTimes;
    if (times) {
        for (let i = 0; i < times.length; ++i) {
            if (times[i].day === day) {
                return timeChecker(time, times[i].startTime, times[i].endTime);
            }
        }
    }
    return false;
};

let whichStoresAreOpen = function (day, time, storesObject) {
    let stores = storesObject.stores;
    let openStores = [];
    if (stores) {
        for (let i = 0; i < stores.length; i++) {
            if (storeOpeningTimeChecker(day, time, stores[i])) {
                openStores.push(stores[i].name);
            }
        }
    }
    return openStores;
};

exports.timeChecker = timeChecker;
exports.storeOpeningTimeChecker = storeOpeningTimeChecker;
exports.whichStoresAreOpen = whichStoresAreOpen;

import { isArrayOfArrays } from "./util.js";

let timeChecker = function (
    currentTime = [8, 0],
    startTime = [9, 0],
    endTime = [17, 0]
) {
    let currentDate = new Date();
    let startDate = new Date();
    let endDate = new Date();

    startDate.setHours(startTime[0], startTime[1], 0);
    endDate.setHours(endTime[0], endTime[1], 0);
    currentDate.setHours(currentTime[0], currentTime[1], 0);

    if (currentDate >= startDate && currentDate <= endDate) {
        return true;
    }
    return false;
};

let storeOpeningTimeChecker = function (day, time = [0, 0], storeObject) {
    let storeTimes = storeObject.openingTimes;
    if (storeTimes) {
        for (let i = 0; i < storeTimes.length; ++i) {
            let storeTime = storeTimes[i];
            if (storeTime.day === day) {
                if (
                    isArrayOfArrays(storeTime.startTime) &&
                    isArrayOfArrays(storeTime.endTime)
                ) {
                    let isOpen = false;
                    for (let j = 0; j < storeTime.startTime.length; ++j) {
                        isOpen = timeChecker(
                            time,
                            storeTime.startTime[j],
                            storeTime.endTime[j]
                        );
                        if (isOpen) {
                            break;
                        }
                    }
                    return isOpen;
                } else {
                    return timeChecker(
                        time,
                        storeTimes[i].startTime,
                        storeTimes[i].endTime
                    );
                }
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

export { timeChecker, storeOpeningTimeChecker, whichStoresAreOpen };

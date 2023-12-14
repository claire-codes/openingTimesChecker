let prettyPrintTime = function (timeArray) {
    let hours = timeArray[0];
    let minutes = timeArray[1];
    if (hours === 24) {
        hours = 0;
    }
    return zeroPad(hours) + ":" + zeroPad(minutes);
};

let zeroPad = function (num) {
    let strNum = num.toString();
    return strNum.length == 1 ? "0" + strNum : strNum;
    // TODO tests for this
};

let isArrayOfArrays = function (a) {
    if (Array.isArray(a)) {
        if (a.length > 0) {
            return a.every(function (x) {
                return Array.isArray(x);
            });
        }
    }
    return false;
};

export { prettyPrintTime, isArrayOfArrays };

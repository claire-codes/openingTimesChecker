exports.helloWorld = function () {
  return "Hello World";
};

exports.timeChecker = function (currentTime = [9,0,0], startTime = [9, 0, 0], endTime = [17, 0, 0]) {
    let currentDate = new Date();
    let startDate = new Date();
    let endDate = new Date();

    startDate.setHours(startTime[0], startTime[1], startTime[2]);
    endDate.setHours(endTime[0], endTime[1], endTime[2]);
    currentDate.setHours(currentTime[0], currentTime[1], currentTime[2]);

    console.log(currentDate);
    console.log(startDate);
    console.log(endDate);

    if (currentDate >= startDate && currentDate <= endDate) {
        return true
    }
    return false;
};

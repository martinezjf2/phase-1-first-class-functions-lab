// Code your solution in this file!
const drivers = ["Sally", "Bob", "Freddy", "Claudia"];

const returnFirstTwoDrivers = function () {
  console.log([drivers[0] + drivers[1]]);
};

const returnLastTwoDrivers = function (drivers) {
  console.log([drivers[2], drivers[3]]);
};

function selectingDrivers() {
  return [returnFirstTwoDrivers, returnLastTwoDrivers];
}

const createFareMultiplier = function (multiplyValue, value) {
  return multiplyValue * value;
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, driversToReturn) {
  return driversToReturn(drivers);
};

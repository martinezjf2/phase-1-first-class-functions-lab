// Step 1 create a function with const
const returnFirstTwoDrivers = function (abc) {
  console.log(abc);
console.log('Hello' + 'world');

  // return [abc[0] + abc[1]];
};

const returnLastTwoDrivers = function (abc) {
  return [drivers[2], drivers[3]];
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
// Link to Githhub: https://github.com/martinezjf2/phase-1-first-class-functions-lab/blob/fis-wip/index.js

// Code your solution here

const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

let findMatching = function (arrayString, name) {
  return arrayString.filter((e) => e.toLowerCase() == name.toLowerCase());
};

// console.log(findMatching(drivers, "bobby"));

// 1) returns a driver if beginning provided letters match
// 2) does not return drivers if only middle or ending letters match
// 3) does not return drivers if only middle or ending letters match

let fuzzyMatch = function (arrayString, letterToMatch) {
  let lengthOfName = letterToMatch.length;
  return arrayString.filter((driverName)=> driverName.slice(0, lengthOfName) === letterToMatch);
};

console.log(fuzzyMatch(drivers, "Sa")) // will return Sally, Sammy, Sarah

// console.log(fuzzyMatch(drivers,''));
const drivers2 = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

// let matchName = function (arrayString, driverName) {
//   Array.from(arrayString);
//   arrayString.forEach((line) => {
//     console.log(line.name);
//     line.name.filter((s) => s == driverName);
//   });
// };

let matchName = function (arrayString, driverName) {
  return arrayString.filter((driver) =>  driver.name.toLowerCase() === driverName.toLowerCase());
};
console.log(matchName(drivers2, "Bobby"));

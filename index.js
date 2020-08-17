// Code your solution here
let findMatching = function(drivers, string) {
  return drivers.filter( current => current.toLowerCase() === string.toLowerCase());
}

let fuzzyMatch = function(drivers, string) {
  let re = new RegExp('^' + string);
  return drivers.filter( function(current) {
    return re.test(current);
  });
}

let matchName = function(drivers, string) {
  return drivers.filter( current => current.name === string);
}

let array = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

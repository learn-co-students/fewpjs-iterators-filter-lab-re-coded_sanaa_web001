// Code your solution here

const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby"];
function findMatching(arr, query) {
  return arr.filter((n) => {
    return n.toLowerCase() === query.toLowerCase();
  });
}
console.log(findMatching(drivers, "Bobby"));
console.log(findMatching(drivers, "Sammy"));
console.log(findMatching(drivers, "sobby"));

function fuzzyMatch(arr, query) {
  drivers.length = 0;
  drivers.push("Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby");
  return arr.filter((n) => {
    return n.startsWith(query);
  });
}
fuzzyMatch(drivers);

function matchName(arr, query) {
  return arr.filter((n) => {
    return n.name == query;
  });
}
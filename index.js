// Code your solution here

function findMatching (arr , string) {
  return arr.filter(function (item) {
    return item.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch (arr, string) {
  let len = string.length;
  return arr.filter(function (item) {
    return  item.substring(0, len) === string;
  });
}

function matchName (arr, string) {
  return arr.filter(function (item) {
    return item.name.toLowerCase() === string.toLowerCase();
  });
}
function findMatching (str, name) {
  return str.filter( (driver) => {
    return driver.toLowerCase() === name.toLowerCase();
  });
}
function fuzzyMatch (str, firstLetter) {
  let len = firstLetter.length;
  let x = (driver) => driver.slice(0, len) === firstLetter
  return str.filter(x);
}

function matchName (str, name) {
  let x = (driver) => driver.name.toLowerCase() === name.toLowerCase()
  return str.filter(x);
}

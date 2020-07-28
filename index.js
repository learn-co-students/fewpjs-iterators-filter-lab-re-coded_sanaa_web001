// Code your solution here
function findMatching (drivers ,string){
  return drivers.filter( n => {
  return n  === string || n.toLowerCase() === string.toLowerCase();
});
}

function fuzzyMatch (drivers ,string){
  return drivers.filter( n => {
  return n.substring(0, string.length)=== string ;
});
}

function matchName  (drivers ,string){
  return drivers.filter( n => {
  return n.name=== string ;
});
}

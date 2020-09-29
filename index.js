// Code your solution here
function findMatching(drivers,name){
  return drivers.filter(function (driversname)
  {return driversname.toLowerCase() === name.toLowerCase();
  })
}



function fuzzyMatch(drivers, firstLetter) {
  let nameLength = firstLetter.length;
  return drivers.filter(function (driverName) {
    return driverName.slice(0, nameLength) === firstLetter;
  });
}

 function  matchName(drivers,name){
     return drivers.filter(function (driver) {
       return driver.name.toLowerCase() === name.toLowerCase();
     });
 }

// Code your solution here
function matchName(drivers,str){
  return drivers.filter((driver)=>{
    return driver.name===str;
   })
}

let fuzzyMatch=(drivers,str)=>{
    return drivers.filter((driver)=>{
      return driver[0].toUpperCase()===str[0].toUpperCase();
     })
}
findMatching=(drivers,str)=>{
    return drivers.filter((driver)=>{
     return driver.toUpperCase()===str.toUpperCase();
    })
  }
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
console.log(fuzzyMatch(drivers,'Sami'));
// Code your solution here
function findMatching(drivers,matcher){
  return drivers.filter(driver=>driver.toLowerCase(driver)===matcher.toLowerCase(matcher));
}
function fuzzyMatch(drivers,matcher){
  return drivers.filter(driver=>(driver.substr(0,matcher.length).toLowerCase(0,matcher.length-1))===matcher.toLowerCase(matcher));
}
function matchName(drivers,matcher){
  return drivers.filter(driver=>driver.name.toLowerCase(driver.name)===matcher.toLowerCase(matcher));
}
// Code your solution here
  const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
  
  //const

  function findMatching(drivers ,find)
  {
    return drivers.filter(el => el.toLowerCase().indexOf(find.toLowerCase()) !== -1)
  }
  

function fuzzyMatch(drivers, letters) {

  return drivers.filter(function (word) {
     let beginOfletter = word.slice(0, letters.length)
     return beginOfletter.includes(letters)
  });
}


function matchName(drivers, name) {
  return drivers.filter(driverName => {
    return driverName.name === name
  })
}
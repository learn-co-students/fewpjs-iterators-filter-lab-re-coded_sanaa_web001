function findMatching(x,y){
  let y2 = y.toLowerCase();
  let result = x.filter(ele => 
  {return ele ===y || ele ===y2;});
  return result;
}

function fuzzyMatch(x,y){
  let result = x.filter(ele =>  {
 return (ele.charAt(0) === y.charAt(0) && ele.charAt(1) ===y.charAt(1));});
  return result; 
}

function matchName(x,y){
  let result = x.filter(ele =>  {
 if(ele.name === y)
    return ele;
  });
  return result;
}
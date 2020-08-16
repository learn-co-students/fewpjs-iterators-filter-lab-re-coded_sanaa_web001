// Code your solution here
function findMatching(array,str){
  const newArr=[];
    array.filter(function(item){
        if(item.toLowerCase()===str.toLowerCase()){
          newArr.push(item);
        }
    })
    return newArr;
    }
  function fuzzyMatch(array,str){
  const newArr=[];
    array.filter(function(item){
      let col=0;
        for(let i=0;i<=str.length;i++){
          if(item[i]===str[i]){
            col+=1;
          }
        }
        if(col===str.length){
          newArr.push(item);
        }
    })
    return newArr;
    }
  function matchName(array,str){
  const newArr=[];
    array.filter(function(item){
        if(item.name.toLowerCase()===str.toLowerCase()){
          newArr.push(item);
        }
    })
    return newArr;
    }  
    
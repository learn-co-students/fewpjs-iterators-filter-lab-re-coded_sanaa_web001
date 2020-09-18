// Code your solution here
let drivers= ['Jack', 'John', 'Sam', 'Tailor', 'Tom', 'Albert'];

function findMatching(x,name){
    let result= x.filter (index=>
        index.toLowerCase()===name.toLowerCase()
    )
    return result;
}

function fuzzyMatch(x,litter){
    let result= x.filter(index=>
        index.startsWith(litter)
    )
    return result;
}

function matchName (x,y){
    let result= x.filter (index=>
        index.name ===y
    )
    return result;
}
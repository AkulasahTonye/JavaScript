//function declaration
function word(){
    return "Hello Wrold!"
}
console.log(word());

//function Expression
const greet = function(){
    return "Hello wrold 2"
}
console.log(greet());

//Arrow function 
const newGreet = ()=>{
    return "Hello wrold 3"
}
console.log(newGreet());

function Middle(string){
    let len = string.length
    let mid = Math.round(len/2)
    let middleletter = string.at(mid - 1)
    console.log(middleletter)
}
Middle("Tonye")
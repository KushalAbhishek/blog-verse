function greet(){
  console.log("Welcome to my adda")
}
greet()

//using parameters

function add(x,y){
  return x+y
}

let result=add(18,19)
console.log(result)

//another method

const multiply = function(x,y){
  return x*y
}
console.log(multiply(5,3))

//Arrow function
const square =(x)=> x*x;
console.log(square(5))
const subtract = (x,y)=>{
  console.log(x,y);
  return x-y;
}

console.log(subtract(27,7));

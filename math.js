//ways to export functions in javascript

export const add= function(x,y){
  return x+y
}

export const multiply = function(x,y){
  return x*y
}

//instead of function(x,y), (x,y)=> can be used
export const subtract = (x,y)=>{
  return x-y;
}

const divide=(x,y)=>{
  return x/y;
}
export default divide;
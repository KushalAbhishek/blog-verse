let x=27,y=72

//Arithmetic operator
console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)
console.log(x**y)

//Assignment operator
let z=5;

z+=3
console.log(z)
z*=2
console.log(z)
z-=3
console.log(z)
z/=2.5
console.log(z)
z%=2
console.log(z)

//comparision operators

let a = 10,b = "10"

console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log(a<=b)
console.log(a>=b)
console.log(a>b)
console.log(a<b)

//logical operators
let age = 21
console.log(age>=21 && age<=41)
console.log(age<21 || age>21)
console.log(!(age<21))

//string operators
let firstName = "kushal"
let lastName =  "abhishek"
let fullName = firstName + " " + lastName
console.log(fullName)
let correctName =  `Hello ${firstName} ${lastName}, plays Cyberpunk 2077`
console.log(correctName)

//Ternary operator
let myAge = 21
if(myAge>=18){
   console.log("you are eligible")
}
else{
  console.log("you are ineligible")
}
let result=myAge>=18 ? "Eligible":"Ineligible"
console.log(result)

//increment and decrement operators
let count=5;
console.log(count++)
console.log(count)
console.log(++count)

//typeof operators
console.log(typeof count)
console.log(typeof "Abhi")
console.log(typeof 27)
let person={
  name:"Abhishek",
  age: 21
}

console.log(person.name)
console.log(person["age"])

const {name,age}=person; 
/*destructuring assignment (assigns the properties(name,age) 
of object(person) to the )
*/

let fruits= ["kiwi","pear","mango"]
console.log(fruits[0])

let numbers=[1,2,3,4,5]

//Array methods

//tranform each element
let squares=numbers.map((num)=>num*num);
console.log(squares)
/* .map transforms every element in the numbers array 
and applies the function(num) and creates an array squares
where the values are stored
*/

//filter values(here produces even nums)based on condition
let evens=numbers.filter((num)=>num%2==0)
console.log(evens)

//reduce
let sum=numbers.reduce((present,num)=>present+num,0)//by default the value is 0
console.log(sum)

let persons = [
  {
    name: "Abhi",
    mark: 50
  },
  {
    name: "Rama",
    mark: 52
  },
  {
    name: "Devi",
    mark: 48
  },
  {
    name: "Ashish",
    mark: 49
  }
]

/*for(let per of persons){
  console.log(`${persons.name} : ${persons.mark}`);
}
  */

let max=0;
let top="";

for(let pea of persons){
  if(pea.mark>max){
    max=pea.mark;
    top=pea.name;
  }
}

console.log(`topper is ${top}, marks ${max}`)


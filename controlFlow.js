let marks=85
if(marks>=90){
  console.log("A+ Grade")
}
else if(marks>=80){
  console.log("A Grade")
}
else if(marks>=70){
  console.log("B Grade")
}
else{
  console.log("Perform well")
}

let day = 5
switch(day) {
  case 1 :
    console.log("monday");
    break;
  case 2 :
    console.log("tuesday");
    break;
  case 3 :
    console.log("wednesday")
    break;
  case 4 :
    console.log("thursday")
    break;
  case 5 :
    console.log("friday")
    break;
  case 6 :
    console.log("saturday")
    break;
  case 7 :
    console.log("sunday")
    break;
  default:
    console.log("Invalid");  
    break;
        
}

let n = 10, i=1;

/*for(i=1;i<=n;i++)
  console.log(i)*/

while (i <= n) {
  console.log(i);
  i++;
}

let  game = ["Red","Dead","Redemption","2"]
for(i=0;i<game.length;i++){
  console.log(game[i])
}

// here of  is used in arrays
for(let games of game){
  console.log(games)
}

let person = {
  age: 21,
  college:"JNTUGV"
}

//here in is used for objects

for(let key in person){
  console.log(`${key}: ${person[key]}`)
}

for(let i=5;i>=0;i--){
  if(i===3){
    continue;
  }else if(i===2){
    break;
  }
  console.log(i)
}


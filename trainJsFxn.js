function firstFunction(){
  console.log("This is my first log")
}
function secondFunction(){
}
secondFunction()
firstFunction()

function myName (){
 var fulName = "Raz Ade";
 return fulName
}  
function myName(){
 let favFood = ["eba","rice","pies"];
let rand = Math.floor(Math.random()*(favFood.length))
return favFood[rand] 
}
myName()

let numbers = [0,1,2,3,4,5,6,7,8,9,10]
function displayOdd (){
  for( var i=0;i<numbers.length;i++){
    if(numbers[i]%2 !== 0){
      console.log (numbers[i])
    }
    }
 }
displayOdd()  
// function displayeven (){
//   for( var i=0;i<numbers.length;i++){
//     if(numbers[i]%2 == 0){
//       console.log (numbers[i])
//     }
//     }
//  }
// displayeven()  

// function numberFirstHalf (){
//   return numbers.slice(0,numbers.length/2)
// }
// numberFirstHalf()

// function numberSecondHalf (){
//   return numbers.slice(numbers.length/2)
// }
// numberSecondHalf()

// function add (a,b){
//   return a+b
// }
// add(2,3)

function average (arr){
  let sum = 0
  for (var i=0; i<arr.length;i++){
    //var sum = 0  
    sum += arr[i]
  }
  return sum/arr.length || 0;
}
average([1,2,3,4,5])

function createStudent (fN,lN){
return {fN,lN}

}
let razzaq = createStudent("raz","ade");
let kenny = createStudent("ken","bab");
let taiwo= createStudent("thy","babs");

let students = [razzaq,kenny,taiwo]
console.log(students)













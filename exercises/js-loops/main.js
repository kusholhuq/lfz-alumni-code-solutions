/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

 function getNumbersToTen(){
   var numbers = [];
   var currentNumber = 1;
   while (currentNumber < 11){
     numbers.push(currentNumber);
     currentNumber = currentNumber + 1;
   }
   return numbers;
 }

console.log("getNumbersToTen(): ", getNumbersToTen());
console.log("getNumbersToTen(): ", getNumbersToTen());

function getEvenNumbersToTwenty(){
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber < 21){
  evenNumbers.push(currentNumber);
  currentNumber += 2;
  }
  return evenNumbers;
}

console.log("getEvenNumbersToTwenty(): ", getEvenNumbersToTwenty());
console.log("getEvenNumbersToTwenty(): ", getEvenNumbersToTwenty());


function repeatWord(word, times){
  var count = 1;
  var repeated = '';
  while ( count <= times){
    repeated = word;
    count+=1;
  }
  return repeated;
}

console.log("repeatWord('Hello there', 8): ", repeatWord('Hello there', 8));
console.log("repeatWord('Cool', 5): ", repeatWord('Cool', 5));


function logEachCharacter(string){
  for (let i = 0; i < string.length ; i++){
    console.log(string[i]);
  }
}
console.log("logEachCharacter(''): ", logEachCharacter(""));
console.log("logEachCharacter('Kushol'): ", logEachCharacter("Kushol"));
console.log("logEachCharacter('We are the same, like you... I just keep moving forward'): ", logEachCharacter("We are the same, like you... I just keep moving forward"));

function doubleAll(numbers){
  var doubled = [];
  for(let i=0; i < numbers.length; i++){
    doubled.push(numbers[i]*2);
  }
  return doubled;
}

console.log("doubleAll([0,1,2,3,4,5,6]): ", doubleAll([0,1,2,3,4,5,6]));
console.log("doubleAll([3,6,9,12,15,18]): ", doubleAll([3,6,9,12,15,18]));

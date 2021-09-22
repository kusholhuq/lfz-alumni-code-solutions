/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number){
  if(number<5){
    return true;
  }
  return false;
}
console.log("isUnderFive(3)", isUnderFive(3));
console.log("isUnderFive(6)", isUnderFive(6));

function isEven(number){
  if(number%2 === 0){
    return true;
  }
  return false;
}

console.log("isEven(3)", isEven(3));
console.log("isEven(6)", isEven(6));

function startsWithJ(string){
  if(string[0].toUpperCase() === 'J'){
    return true;
  }
  return false;
}

console.log("startsWithJ('June')", startsWithJ('June'));
console.log("startsWithJ('Moon')", startsWithJ('Moon'));

function isOldEnoughToDrink(person){
  if(person.age>=21){
    return true;
  }
  return false;
}

var bart = {
  name: 'Bartholomew JoJo Simpson',
  age: 10
};
var steven = {
  name: 'Steven Bonell',
  age: 32
};

console.log("isOldEnoughToDrink(bart)", isOldEnoughToDrink(bart));
console.log("isOldEnoughToDrink(steven)", isOldEnoughToDrink(steven));


function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  }
  return false;
}

console.log("isOldEnoughToDrive(bart)", isOldEnoughToDrive(bart));
console.log("isOldEnoughToDrive(steven)", isOldEnoughToDrive(steven));

function isOldEnoughToDrinkAndDrive(person){
  return false;
}

console.log("isOldEnoughToDrinkAndDrive(bart)", isOldEnoughToDrinkAndDrive(bart));
console.log("isOldEnoughToDrinkAndDrive(steven)", isOldEnoughToDrinkAndDrive(steven));

function categorizeAcidity(pH){
  if(pH > 14){
    return "invalid pH level";
  } else if( pH > 7){
    return "base";
  } else if( pH === 7){
    return "neutral";
  } else if( pH > 0){
    return "acid";
  } else {
    return "invalid pH level"
  }
}

console.log("categorizeAcidity(-1)", categorizeAcidity(-1))
console.log("categorizeAcidity(14.0000001)", categorizeAcidity(14.0000001))
console.log("categorizeAcidity(7)", categorizeAcidity(7))
console.log("categorizeAcidity(2)", categorizeAcidity(2))
console.log("categorizeAcidity(9)", categorizeAcidity(9))

function introduceWarnerBro(name){
  if(name === "yakko" || name === "wakko"){
    return "We're the warner brothers!";
  } else if(name === "dot"){
    return "I'm cute~";
  } else {
    return "Goodnight everybody!";
  }
}

console.log("introduceWarnerBro('yakko')", introduceWarnerBro('yakko'))
console.log("introduceWarnerBro('wakko')", introduceWarnerBro('wakko'))
console.log("introduceWarnerBro('dot')", introduceWarnerBro('dot'))
console.log("introduceWarnerBro('cody')", introduceWarnerBro('cody'))
console.log("introduceWarnerBro('minerva')", introduceWarnerBro('minerva'))

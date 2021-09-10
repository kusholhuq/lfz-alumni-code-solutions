function convertMinutesToSeconds(minutes){
  return minutes*60;
}
console.log("convertMinutesToSecondsResult: ", convertMinutesToSeconds(5));

function greet(name) {
  return "Hey, " + name;
}
console.log("greetResult: ", greet("Tim"));

function getArea(width, height) {
  return width * height;
}
console.log("getAreaResult: ", getArea(17,42));

var animeChad = {
  firstName: "Lelouche",
  lastName: "Vi Britannia"
}

function getFirstName(person) {
  return person.firstName;
}
console.log("getFirstNameResult: ", getFirstName(animeChad));

var waifuArray = ['Zero Two', 'Yoruichi', 'Kallen Kozuki', 'Rem' ];

function getLastElement(array) {
  return array[array.length-1];
}
console.log("getLastElementResult: ", getLastElement(waifuArray));

var num1 = 1;
var num2 = 2;
var num3 = 3;

var maximumValue = Math.max(num1, num2,num3);
console.log("maximumValue: ", maximumValue);

var heroes = ['Uravity', 'Creati', 'Midnight', 'Mount Lady'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);

console.log("randomIndex: " , randomIndex);

var randomHero = heroes[randomIndex];
console.log("randomHero: ", randomHero);

var library = [
  {
    title: 'JavaScript for Impatient Programmers',
    author: 'Dr. Axel Rauschmayer'
  },
  {
    title: 'JavaScript for Impatient Programmers',
    author: 'Dr. Axel Rauschmayer'
  },
  {
    title: 'JavaScript for Impatient Programmers',
    author: 'Dr. Axel Rauschmayer'
  }
]

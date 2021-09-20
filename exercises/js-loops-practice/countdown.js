/* exported countdown */
function countdown(number){
  const numbers = [];
  let currentNumber = number;
  while(currentNumber >= 0){
    numbers.push(currentNumber);
    currentNumber--;
  }
  return numbers;
}

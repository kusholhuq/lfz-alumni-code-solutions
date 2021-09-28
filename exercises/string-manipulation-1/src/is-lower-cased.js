/* exported isLowerCased */
function isLowerCased(string) {
  for (let i = 0; i < string.length; i++) {
    if(string[i] === '-'){
      continue;
    }
    if (string[i].toUpperCase() === string[i]) {
      return false;
    }
  }
  return true;
}

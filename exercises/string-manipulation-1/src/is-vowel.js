/* exported isVowel */
function isVowel(string) {
  if(string.toUpperCase() === 'A' ||
     string.toUpperCase() === 'E' ||
     string.toUpperCase() === 'I' ||
     string.toUpperCase() === 'O' ||
     string.toUpperCase() === 'U'){
       return true;
     }
  return false;
}

/* exported lastChars */
function lastChars(length, string) {
  if(length > string.length){
    return string;
  }
  let result = '';
  for (let i = string.length - length; i < string.length; i++) {
    result += string[i];
  }
  return result;
}

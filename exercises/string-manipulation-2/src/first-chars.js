/* exported firstChars */
function firstChars(length, string){
  let result = '';
  for (let i = 0; i < string.length; i++){
    if(i>=length){
      break;
    }
    result+=string[i];
  }
  return result;
}

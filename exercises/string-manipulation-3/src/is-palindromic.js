/* exported isPalindromic */
function isPalindromic(string){
  // for(let i=0; i<string.length; i++){
  //   if(string[i] !== string[string.length-1-i]){
  //     return false;
  //   }
  // }
  // return true;

  //reverse the string and compare
  //make sure to ignore empty spaces

  //remove spaces
  let spacesRemoved = string.split(' ').join('')

  let reverse = '';
  for (let i = 0; i < spacesRemoved.length;i++){
    if (spacesRemoved[i] !== ' '){
      reverse = spacesRemoved[i] + reverse;
    }
  }
  if (reverse === spacesRemoved){
    return true;
  }
  return false;

}

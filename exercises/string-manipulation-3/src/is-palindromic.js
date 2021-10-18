/* exported isPalindromic */
function isPalindromic(string){
  let spacesRemoved = string.split(' ').join('');

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

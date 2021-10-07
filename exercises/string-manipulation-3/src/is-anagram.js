/* exported isAnagram */
function isAnagram(firstString, secondString){
  const secondStringObject = {};
  for(let i=0;i<secondString.length;i++){
    if(secondStringObject[secondString[i]]){
      secondStringObject[secondString[i]]++;
    }else{
      secondStringObject[secondString[i]] = 1;
    }
  }
  const firstStringObject = {};
  for (let k = 0; k < firstString.length; k++) {
    if (firstStringObject[firstString[k]]) {
      firstStringObject[firstString[k]]++;
    } else {
      firstStringObject[firstString[k]] = 1;
    }
  }
  for(letter in firstStringObject){
    if(firstStringObject[letter]!==secondStringObject[letter]){
      return false
    }
  }
  return true;

  return true;
}

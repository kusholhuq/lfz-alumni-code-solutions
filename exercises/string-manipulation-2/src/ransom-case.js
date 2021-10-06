/* exported ransomCase */
function ransomCase(string){
  let ransomNote = '';
  for (let i=0; i<string.length; i++){
    if(i%2 === 0){
      ransomNote += string[i].toLowerCase();
    } else {
      ransomNote += string[i].toUpperCase();
    }
  }
  return ransomNote;
}

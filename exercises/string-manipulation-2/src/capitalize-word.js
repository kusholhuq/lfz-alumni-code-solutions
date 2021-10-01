/* exported capitalizeWord */
function capitalizeWord(word){
  if(word.toLowerCase() === "javascript"){
    return "JavaScript";
  }
  let capitalizedWord = '';
  capitalizedWord += word[0].toUpperCase();
  for (let i=1; i<word.length; i++){
    capitalizedWord+=word[i].toLowerCase();
  }
  return capitalizedWord;
}

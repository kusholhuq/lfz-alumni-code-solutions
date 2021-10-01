/* exported capitalizeWords */
function capitalizeWords(string){
  const wordArray = string.split(' ');
  const newArray = [];
  for(let k=0; k<wordArray.length; k++){
    if (wordArray[k].toLowerCase() === "javascript") {
      newArray.push("Javascript")
    }
    let capitalizedWord = '';
    capitalizedWord += wordArray[k][0].toUpperCase();
    for (let i = 1; i < wordArray[k].length; i++) {
      capitalizedWord += wordArray[k][i].toLowerCase();
    }
    newArray.push(capitalizedWord);
  }
  return newArray.join(' ');

}

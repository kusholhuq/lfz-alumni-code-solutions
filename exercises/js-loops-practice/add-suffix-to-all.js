/* exported addSuffixToAll */
function addSuffixToAll(words, suffix){
  const appendedWords = [];
  for(let i=0; i<words.length; i++){
    appendedWords.push(words[i]+suffix);
  }
  return appendedWords;
}

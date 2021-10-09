/* exported reverseWords */
function reverseWords(string){
  const wordsArray = string.split(' ');
  const reversedWordsArray = [];
  for(let k=0;k<wordsArray.length;k++){
    let reversed = '';
    for (let i = 0; i < wordsArray[k].length; i++) {
      reversed = wordsArray[k][i] + reversed;
    }
    reversedWordsArray.push(reversed);
  }
  return reversedWordsArray.join(' ');

}

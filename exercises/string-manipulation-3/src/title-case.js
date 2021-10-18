/* exported titleCase */
function titleCase(title){
  const wordsArray = title.split(' ');
  const result = [];

  for(let i=0; i<wordsArray.length; i++){

    if(i!==0){
      if(wordsArray[i - 1][wordsArray[i - 1].length-1] === ':'){
        let newWord = '';
        for (b = 0; b < wordsArray[i].length; b++) {
          if (b === 0) {
            newWord += wordsArray[i][b].toUpperCase();
          } else {
            newWord += wordsArray[i][b].toLowerCase();
          }
        }
        result.push(newWord)
        continue;
      }
    }



    if(wordsArray[i].toUpperCase() === 'JAVASCRIPT'){
      result.push('JavaScript');
      continue;
    }
    if (wordsArray[i].toUpperCase() === 'JAVASCRIPT:') {
      result.push('JavaScript:');
      continue;
    }
    if(wordsArray[i].toUpperCase()==='API'){
      result.push('API');
      continue;
    }


    switch(wordsArray[i]){
      case 'and':
      case 'or':
      case 'nor':
      case 'but':
      case 'a':
      case 'an':
      case 'the':
      case 'as':
      case 'at':
      case 'by':
      case 'for':
      case 'in':
      case 'of':
      case 'on':
      case 'per':
      case 'to':
        result.push(wordsArray[i]);
        continue;
      default:
        //do nothing
    }

    //^special cases

    let cappedWord = '';
    for(let k=0; k<wordsArray[i].length; k++){
      if(k===0){
        cappedWord+=wordsArray[i][k].toUpperCase();
      }else if(wordsArray[i][k-1]==='-'){
        cappedWord+=wordsArray[i][k].toUpperCase();
      }else{
        cappedWord+=wordsArray[i][k].toLowerCase();
      }

    }
    result.push(cappedWord);
  }
  return result.join(' ');
}

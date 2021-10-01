/* exported truncate */
function truncate(length, string){
  let truncatedString = '';
  for(let i=0; i<length; i++){
    if(string[i]===undefined){
      break;
    }
    truncatedString += string[i];
  }
  return truncatedString + '...';
}

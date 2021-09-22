/* exported filterOutStrings */
function filterOutStrings(values){
  const filteredValues = [];
  for(let i = 0; i < values.length; i++){
    if(typeof values[i] !== 'string'){
      filteredValues.push(values[i]);
    }
  }
  return filteredValues;
}

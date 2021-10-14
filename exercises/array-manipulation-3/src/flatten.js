/* exported flatten */
function flatten(array){
  const result = [];
  for(let i=0; i<array.length; i++){
    if(Array.isArray(array[i])){
      for(let b=0; b<array[i].length; b++){
        result.push(array[i][b]);
      }
    }else{
      result.push(array[i]);
    }
  }
  return result;
}

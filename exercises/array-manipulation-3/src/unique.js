/* exported unique */
function unique(array){
const result = [];

  for(let i=0; i<array.length; i++){
    let isUnique = true;
    for(let b=0; b<result.length; b++){
      if(array[i]===result[b]){
        isUnique = false;
        break;
      }
    }
    if(isUnique===true){
      result.push(array[i]);
    }
  }
  return result;

}

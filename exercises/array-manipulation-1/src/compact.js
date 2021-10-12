/* exported compact */
function compact(array){
  const filtered = [];
  for(let i=0; i<array.length; i++){
    if(array[i]){
      filtered.push(array[i]);
    }
  }
  return filtered;
}

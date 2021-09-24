/* exported initial */
function initial(array){
  const start = [];
  for(let i = 0; i<array.length-1; i++){
    start.push(array[i]);
  }
  return start;
}

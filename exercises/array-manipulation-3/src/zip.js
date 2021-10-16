/* exported zip */
function zip(first, second){
  let array;
  if(first.length>=second.length){
    array = second;
  } else {
    array = first;
  }
  const result = [];
  for(let i=0; i<array.length; i++){
    result.push([first[i],second[i]]);
  }
  return result;
}

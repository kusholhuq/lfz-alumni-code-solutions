/* exported omit */
function omit(source, keys){
  const result = {};
  const reference = {};
  for(let i=0; i<keys.length; i++){
    reference[keys[i]]=true;
  }
  for(property in source){
    if(reference[property] !== true){
      result[property]= source[property];
    }
  }
  return result;
}

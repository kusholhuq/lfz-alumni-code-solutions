/* exported getKeys */
function getKeys(object){
  const keys = [];
  for(key in object){
    keys.push(key);
  }
  return keys;
}

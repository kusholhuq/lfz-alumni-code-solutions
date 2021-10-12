/* exported invert */
function invert(source){
  //create two arrays
  //go through the source object pushing keys to one and values to the other
  const keys = [];
  const values = [];
  for(property in source){
    keys.push(property);
    values.push(source[property])
  }
  const inverted = {};
  for(let i=0; i<keys.length; i++){
    inverted[values[i]]=keys[i];
  }
  return inverted;
}

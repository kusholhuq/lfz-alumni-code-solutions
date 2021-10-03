/* exported swapChars */
function swapChars(firstIndex, secondIndex, string){
  const array = string.split('')
  const saved = string[firstIndex];
  array.splice(firstIndex,1,string[secondIndex]);
  array.splice(secondIndex, 1, saved);
  return array.join('');
}

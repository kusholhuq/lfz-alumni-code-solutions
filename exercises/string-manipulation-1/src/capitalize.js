/* exported capitalize */
function capitalize(string){
  let caps = '';
  caps += string[0].toUpperCase();
  if(string[1]){
    for (let i = 1; i < string.length; i++) {
      caps += string[i].toLowerCase();
    }
  }
  return caps;

}

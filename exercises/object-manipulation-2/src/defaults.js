/* exported defaults */
function defaults(target, source){
  //if a property exists on source, that target doesnt have
  //we add it onto target

  //loop through source
  //on each iteration
  //check if a source property exists on target
  //if it does do nothing
  //if it doesnt add it

  for(property in source){
    if(target[property]===undefined){
      target[property] = source[property]
    }
  }
}

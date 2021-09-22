/* exported oddOrEven */
function oddOrEven(numbers){
  const numberTypes = [];
  for(let i=0; i<numbers.length; i++){
    if(numbers[i]%2===0){
      numberTypes.push('even')
    } else{
      numberTypes.push('odd');
    }
  }
  return numberTypes;
}

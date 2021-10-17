/* exported difference */
function difference(first, second){

  const result = [];
  const countObject = {};

  for(let i=0; i<first.length; i++){
    if(countObject[first[i]]===undefined){
      countObject[first[i]] = 1;
    } else {
      countObject[first[i]]++;
    }
  }

  for (let b = 0; b < second.length; b++) {
    if (countObject[second[b]] === undefined) {
      countObject[second[b]] = 1;
    } else {
      countObject[second[b]]++;
    }
  }


  for(let k=0; k<first.length; k++){
    if(countObject[first[k]]===1){
      result.push(first[k]);
    }
  }

  for (let g = 0; g < second.length; g++) {
    if (countObject[second[g]] === 1) {
      result.push(second[g]);
    }
  }

  return result;
}

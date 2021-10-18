/* exported union */
//go through each array
//make a countObject for each of them
//then go through the arrays again checking the corresponding countobject
//and adding each item to the result if they are unique

//when going through the second array
//check if its unique in its countobject
  //if unique it has met 1 checkbox
//and also check if it exists in the other count object
  //if it exists in other count object, do not include

function union(first, second) {

  const result = [];
  const countObject1 = {};
  const countObject2 = {};

  for (let i = 0; i < first.length; i++) {
    if (countObject1[first[i]] === undefined) {
      countObject1[first[i]] = 1;
    } else {
      countObject1[first[i]]++;
    }
  }

  for (let b = 0; b < second.length; b++) {
    if (countObject2[second[b]] === undefined) {
      countObject2[second[b]] = 1;
    } else {
      countObject2[second[b]]++;
    }
  }

  for (let k = 0; k < first.length; k++) {
    if (countObject1[first[k]] === 1) {
      result.push(first[k]);
    }
  }

  for (let g = 0; g < second.length; g++) {
    if (countObject2[second[g]] === 1 && countObject1[second[g]]===undefined) {
      result.push(second[g]);
    }
  }

  return result;
}

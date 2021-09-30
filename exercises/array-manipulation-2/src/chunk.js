/* exported chunk */
//brainstorm
//i need to loop through the array
//for a given number of iterations i need to push to an array
//and stop when i reach the end

//define a function
//declare a variable i
//loop through array as long as length minus current is bigger than the chunk size

//you can do a nested loop
//you repeat the outer loop length divided by chunk times
//you repeat the inner loop chunk times
//there is an outer array
//the inner array spits out an array that is tacked onto the outer

function chunk(array, size){
  const chunks = [];
  for(let k=0; k<Math.floor((array.length / size)); k++){
    // console.log(k);
    const oneChunk = [];
    for(let i=0; i<size;i++){
      oneChunk.push(array[k*size + i])
    }
    chunks.push(oneChunk)
  }
  console.log(chunks)
  return chunks;
}

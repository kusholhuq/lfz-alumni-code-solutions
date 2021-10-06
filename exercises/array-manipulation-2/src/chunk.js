function chunk(array, size){
  const chunks = [];
  for(let k=0; k<(array.length / size); k++){
    // console.log(k);
    const oneChunk = [];
    for(let i=0; i<size;i++){
      if(k*size+i > array.length-1){
        continue;
      }
      oneChunk.push(array[k*size + i])
    }
    chunks.push(oneChunk)
  }
  console.log(chunks)
  return chunks;
}

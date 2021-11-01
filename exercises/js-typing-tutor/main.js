const spanArray = document.querySelectorAll("span");
console.log(spanArray);

let currentLetterIndex = 0;

function keyDownHandler(event){

  const currentLetter = spanArray[currentLetterIndex].innerHTML;
  console.log(event);
  console.log(event.key);
  if(event.key === currentLetter){
    spanArray[currentLetterIndex].classList.remove("underline");
    spanArray[currentLetterIndex].classList.remove("red");
    spanArray[currentLetterIndex].classList.add("green");
    currentLetterIndex++;
    if (currentLetterIndex >= spanArray.length) {
      console.log("all done");
      document.removeEventListener('keydown', keyDownHandler);
      return;
    }
    spanArray[currentLetterIndex].classList.add("underline");
    console.log("not what i want");

  } else if(event.key !== currentLetter){
    spanArray[currentLetterIndex].classList.add("red");
  }


}

document.addEventListener('keydown', keyDownHandler);

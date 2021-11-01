const spanArray = document.querySelectorAll("span");
console.log(spanArray);

let currentLetterIndex = 0;
let mistakeCounter = 0;

function keyDownHandler(event){
  if(event.repeat){
    return;
  }
  if(event.key==="Shift"){
    return;
  }
  const currentLetter = spanArray[currentLetterIndex].textContent;
  console.log(event);
  console.log(event.key);
  if (event.key === currentLetter || (event.code === 'Space' && spanArray[currentLetterIndex].innerHTML ==="&nbsp;")){
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
    mistakeCounter++;
  }


}

document.addEventListener('keydown', keyDownHandler);

function playAgain(){
  currentLetterIndex = 0;
  mistakeCounter = 0;
  spanArray[0].className = "underline";
  for(let i=1; i<spanArray.length; i++){
    spanArray[i].className = "";
  }
  document.addEventListener('keydown', keyDownHandler);
}

const spanArray = document.querySelectorAll("span");
const modal = document.querySelector("#modal");
const accuracy = document.querySelector("#accuracy");
const playAgainButton = document.querySelector("#play-again");

playAgainButton.addEventListener('click', playAgain);
document.addEventListener('keydown', keyDownHandler);

let currentLetterIndex = 0;
let keydownCounter = 0;
let correctKeydownCounter = 0

function endGame() {
  let accuracyScore = Math.floor((correctKeydownCounter / keydownCounter) * 100);
  accuracy.textContent = accuracyScore;
  modal.classList.remove("hidden");
  document.removeEventListener('keydown', keyDownHandler);
}

function playAgain() {
  currentLetterIndex = 0;
  keydownCounter = 0;
  correctKeydownCounter = 0
  spanArray[0].className = "underline";
  for (let i = 1; i < spanArray.length; i++) {
    spanArray[i].className = "";
  }
  document.addEventListener('keydown', keyDownHandler);
  modal.classList.add("hidden");
}

function keyDownHandler(event){
  if(event.repeat){
    return;
  }
  if(event.key==="Shift"){
    return;
  }
  keydownCounter++;
  const currentLetter = spanArray[currentLetterIndex].textContent;
  if (event.key === currentLetter || (event.code === 'Space' && spanArray[currentLetterIndex].innerHTML ==="&nbsp;")){
    spanArray[currentLetterIndex].classList.remove("underline");
    spanArray[currentLetterIndex].classList.remove("red");
    spanArray[currentLetterIndex].classList.add("green");
    currentLetterIndex++;
    correctKeydownCounter++;
    if (currentLetterIndex >= spanArray.length) {
      endGame();
      return;
    }
    spanArray[currentLetterIndex].classList.add("underline");
  } else if(event.key !== currentLetter){
    spanArray[currentLetterIndex].classList.add("red");
  }
}

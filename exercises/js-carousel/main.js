const imageArray = ["001.png", "004.png", "007.png", "025.png", "039.png"];
const image = document.querySelector("#target");
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const dots = document.querySelector("#dots");
let switched = false;
let counter = 0

function generateProgressDots () {
  for(let i=0; i<imageArray.length; i++){
    const newDot = document.createElement("i");
    newDot.setAttribute("class", "far fa-circle");
    dots.appendChild(newDot);
  }
}

generateProgressDots();
blackDotOnCurrentPokemon();

function blackDotOnCurrentPokemon () {
  const dotElementArray = dots.children
  for (let i = 0; i < dotElementArray.length; i++){
    if(counter === i){
      dotElementArray[i].setAttribute("class", "fas fa-circle")
    } else {
      dotElementArray[i].setAttribute("class", "far fa-circle")
    }
  }
}

function autoSwitch () {
  if(switched){
    switched = false;
    return;
  }
  counter++;
  if(counter > 4){
    counter = 0;
  }
  image.setAttribute("src", "./images/" + imageArray[counter])
  blackDotOnCurrentPokemon();
}

function leftClickHandler () {
  counter--;
  if (counter < 0) {
    counter = 4;
  }
  switched = true;
  image.setAttribute("src", "./images/" + imageArray[counter])
  blackDotOnCurrentPokemon();
}

function rightClickHandler() {
  counter++;
  if (counter > 4) {
    counter = 0;
  }
  switched = true;
  image.setAttribute("src", "./images/" + imageArray[counter])
  blackDotOnCurrentPokemon();
}

left.addEventListener("click", leftClickHandler);
right.addEventListener("click", rightClickHandler);

setInterval(autoSwitch, 3000);

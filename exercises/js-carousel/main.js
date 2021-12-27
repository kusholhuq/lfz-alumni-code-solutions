const imageArray = ["001.png", "004.png", "007.png", "025.png", "039.png"];
const image = document.querySelector("#target");
const left = document.querySelector("#left");
const right = document.querySelector("#right");
let switched = false;
let counter = 0

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
}

function leftClickHandler () {
  counter--;
  if (counter < 0) {
    counter = 4;
  }
  switched = true;
  image.setAttribute("src", "./images/" + imageArray[counter])
}
function rightClickHandler() {
  counter++;
  if (counter > 4) {
    counter = 0;
  }
  switched = true;
  image.setAttribute("src", "./images/" + imageArray[counter])
}

left.addEventListener("click", leftClickHandler);
right.addEventListener("click", rightClickHandler);


setInterval(autoSwitch, 3000);

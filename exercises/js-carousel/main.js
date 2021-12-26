//solution
//brainstorm
//an array containing the image source
//every three seconds it goes to the next index
//the dots reflect the array.length

const imageArray = ["001.png", "004.png", "007.png", "025.png", "039.png"];

const imageHolder = document.querySelector("#picture");

const image = document.createElement("img");
image.setAttribute("src","./images/"+imageArray[0]);
imageHolder.appendChild(image);

let switched = false;
let counter = 1

// function autoSwitch () {
//   if(switched){
//     switched = false;
//     return;
//   }
//   if(counter > 4){
//     counter = 0;
//   }
//   imageHolder.removeChild(imageHolder.firstChild)
//   const newImage = document.createElement("img");
//   newImage.setAttribute("src", "./images/" + imageArray[counter]);
//   console.log("./images/" + imageArray[counter])
//   counter++;
// }

setInterval(autoSwitch, 3000);

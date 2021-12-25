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

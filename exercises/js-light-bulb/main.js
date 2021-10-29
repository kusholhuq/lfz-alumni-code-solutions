let light = false;

const lightbulb = document.querySelector("#lightbulb");
const background = document.querySelector("#background");

lightbulb.addEventListener("click", function(){

  light = !light;
  if(light === false){
    lightbulb.className = "circle dark-bulb";
    background.className = "container dark-bg";
  }
  if(light === true){
    lightbulb.className = "circle light-bulb";
    background.className = "container light-bg";
  }
})

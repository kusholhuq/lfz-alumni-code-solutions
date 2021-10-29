let light = false;

const lightbulb = document.querySelector("#lightbulb");
const background = document.querySelector("#background");
const inner = document.querySelector("#inner");
const smallest = document.querySelector("#smallest");

function lightSwitch() {
  light = !light;
  if (light === false) {
    lightbulb.className = "circle dark-bulb";
    background.className = "container dark-bg";
    inner.className = "inner dark-inner";
    smallest.className = "smallest dark-smallest"
  }
  if (light === true) {
    lightbulb.className = "circle light-bulb";
    background.className = "container light-bg";
    inner.className = "inner light-inner";
    smallest.className = "smallest light-smallest"
  }
}

lightbulb.addEventListener("click", lightSwitch )

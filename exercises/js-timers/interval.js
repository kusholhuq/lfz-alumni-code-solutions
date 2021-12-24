const h1 = document.querySelector("h1");
let time = 4;
function callBack() {
  if(time===1){
    h1.textContent ="~Earth Beeeelooowww Us~";
    return;
  }
  h1.textContent = time - 1 + "";
  time--;
}

const intervalID = setInterval(callBack, 1000);
setTimeout(function () {clearInterval(intervalID)}, 4001);

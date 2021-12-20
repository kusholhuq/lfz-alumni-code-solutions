const h1 = document.querySelector("h1");

function callBack() {
  h1.textContent = "~Earth Beeeelooowww Us~";
}

const intervalID = setInterval(callBack, 4000);
setTimeout(function () {clearInterval(intervalID)}, 4001);

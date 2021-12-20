//get dom element
//alter text content of dom element in 2 seconds

const h1 = document.querySelector("h1");

function callBack () {
  h1.textContent = "Hello There";
}

setTimeout(callBack, 2000);

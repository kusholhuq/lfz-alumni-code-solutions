function handleFocus (event) {
  console.log("focus event was fired");
  console.log(event.target.name);
}

function handleBlur (event) {
  console.log("blur event was fired");
  console.log(event.target.name);
}

function handleInput (event) {
  console.log("event.target.name: ", event.target.name);
  console.log("event.target.value: ", event.target.value);
}

const userName = document.querySelector("#user-name");
const userEmail = document.querySelector("#user-email");
const userMessage = document.querySelector("#user-message");

userName.addEventListener('focus', handleFocus);
userEmail.addEventListener('blur', handleBlur);
userMessage.addEventListener('input', handleInput);

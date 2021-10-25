function handleClick(event){
  console.log("button clicked");
  console.log(event);
  console.log(event.target);
}

var clickButton = document.querySelector('.click-button');
clickButton.addEventListener('click', handleClick);

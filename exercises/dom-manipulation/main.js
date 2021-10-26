var count = 0;

var hotButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

hotButton.addEventListener('click', function(){
  count++;
  clickCount.textContent = "Clicks: " + count;

  let classTemp = '';
  if(count < 4){
    classTemp = "cold"
  } else if ( count < 7){
    classTemp = "cool"
  } else if (count < 10) {
    classTemp = "tepid"
  } else if (count < 13) {
    classTemp = "warm"
  } else if (count < 16) {
    classTemp = "hot"
  } else {
    classTemp = "nuclear"
  }
  hotButton.className = "hot-button " + classTemp;

})

var tabContainer = document.querySelector(".tab-container");
var tabList = document.querySelectorAll(".tab");
var viewList = document.querySelectorAll(".view");

tabContainer.addEventListener('click', function(event){
  if(event.target.matches(".tab")){
    for(let i=0; i<tabList.length; i++){
      if(event.target === tabList[i]){
        tabList[i].classList.add('active')
      } else {
        tabList[i].classList.remove('active')
      }
    }
  }
})

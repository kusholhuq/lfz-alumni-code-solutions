const modal = document.querySelector("#modal");
const openButton = document.querySelector("#open");
const noButton = document.querySelector("#no");
let modalStatus = false;

function toggleModal(){


  if(!modalStatus){
    modal.classList.remove('hidden');
  }
  if(modalStatus){
    modal.classList.add('hidden');
  }
  modalStatus = !modalStatus;

}

openButton.addEventListener('click', toggleModal);
noButton.addEventListener('click', toggleModal);

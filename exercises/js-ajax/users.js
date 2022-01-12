function getUserData(){
  const userList = document.querySelector("#user-list");
  const requestObject = new XMLHttpRequest();
  requestObject.open('GET', 'https://jsonplaceholder.typicode.com/users');
  requestObject.responseType = 'json';
  requestObject.addEventListener('load', function () {
    console.log(requestObject.status);
    console.log(requestObject.response);
    for(let i=0; i<requestObject.response.length; i++){
      const newLi = document.createElement("li");
      newLi.textContent = requestObject.response[i].name;
      userList.appendChild(newLi);
    }
  });
  requestObject.send();
}

getUserData();

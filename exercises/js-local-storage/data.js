/* exported todos */

var todos = [];

const previousTodosJSON = localStorage.getItem('javascript-local-storage');
if(previousTodosJSON !== null){
  todos = JSON.parse(previousTodosJSON);
}

const beforeUnloadListener = (event) => {
  event.preventDefault();
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
}

window.addEventListener('beforeunload', beforeUnloadListener);

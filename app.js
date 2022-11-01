// for time
var date = new Date();
var dd = date.getDate();
var mm = date.getMonth() + 1;
var yyyy = date.getFullYear();
var newDate = dd + "-" + mm + "-" + yyyy;
var p = document.getElementById("myId");
p.innerHTML = newDate;

//selectors
const todoInput = document.querySelector(".to_in");
const todoButton = document.querySelector(".to_butt");
const todoList = document.querySelector(".todo-list");
const box=document.querySelector(".box-cont")
//event Listeners
todoButton.addEventListener("click", addtodo);
todoList.addEventListener("click", delmark);

//functions
function addtodo(event) {
  event.preventDefault();
  box.classList.add("dis");
  //todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //check mark
  const tickButton = document.createElement("button");
  tickButton.innerHTML = '<i class="fas fa-check-circle"></i>';
  tickButton.classList.add("tick-button");
  todoDiv.appendChild(tickButton);
  //del mark
  const delButton = document.createElement("button");
  delButton.innerHTML = '<i class="fas fa-trash"></i>';
  delButton.classList.add("del-button");
  todoDiv.appendChild(delButton);

  todoList.appendChild(todoDiv);
  // clear todo value
  todoInput.value="";
}
function delmark(e)
{
  const item=e.target;
  if(item.classList[0]==='del-button')
  {
    const todo=item.parentElement;
    todo.classList.add("fall");
    // setTimeout(() => {
    //   todo.classList.add("pos");
      
    // }, 500);
    todo.addEventListener('transitionend',function(){

    todo.remove();
    });
  }
  if(item.classList[0]==='tick-button')
  {
    const todo=item.parentElement;
    todo.classList.toggle("completed");
  }
}
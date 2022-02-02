// Fetch and serve current date
function getDate() {
  return moment().format("MMM Do YYYY")
}
function todaysDate() {
  document.getElementById('today-date').innerHTML = getDate()
}

// hide free time and show task entry field
document.getElementById("add-task").addEventListener("click", taskAdder)
function taskAdder() {
  document.getElementById("free-play").style.display = 'none'
  document.getElementById("task-area").style.display = 'flex'
}
// todo item backend
let todoItems = []
function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  }
  todoItems.push(todo)
  console.log(todoItems)
  renderTodo(todo)
}

function renderTodo(todo) {

  const list = document.querySelector('.task-list')

  const isChecked = todo.checked ? 'done': '';

  const node = document.createElement("li")

  node.setAttribute('class', 'task-list__item')

  node.setAttribute('data-key', todo.id)

  node.innerHTML= `
    <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>
    <button class="delete-todo js-delete-todo">
    <div>&#10006;</div>
    </button>
  `
  list.append(node)
}

const list = document.querySelector('.task-list')

list.addEventListener('click', event => {
  if(event.target.classList.contains('js-tick')){
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey)
  }
})

function toggleDone(key) {
  const index = todoItems.findIndex(item => item.id === Number(key))
  todoItems[index].checked = !todoItems[index].checked
  renderTodo(todoItems[index])
  console.log("this did something")
}

// save button 
function saveButton() {
  const input = document.querySelector('.task-title')
  const text = input.value.trim()
  if(text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
}

//save on enter
let enterButton = document.getElementById("task-title")
enterButton.addEventListener("keydown", function(e) {
    if(e.code == "Enter"){
      saveButton()
    }
})

document.getElementById('save-button').addEventListener('click', saveButton)

todaysDate()

getDate()
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
//TODO: Add checkbox functionality you ignoramus 
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

function saveButton() {
  const input = document.querySelector('.task-title')
  const text = input.value.trim()
  if(text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
}

document.getElementById('save-button').addEventListener('click', saveButton)

function renderTodo(todo) {

  const list = document.querySelector('.task-list')

  const node = document.createElement("li")

  node.setAttribute('class', 'task-list__item')

  node.setAttribute('data-key', todo.id)

  node.innerHTML= `
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>
  `

  list.append(node)
}

todaysDate()

getDate()
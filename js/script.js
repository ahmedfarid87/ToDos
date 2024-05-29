var newTask = document.getElementById('newTask');
var taskContainer = document.getElementById('taskContent')

var toDoTask = []

if(localStorage.getItem('allTask')!= null){
  toDoTask = JSON.parse(localStorage.getItem('allTask'))
  display()
}

function addTask(){
  var task = {
    taskInfo: newTask.value,
  }
  toDoTask.push(task)
  localStorage.setItem('allTask' , JSON.stringify(toDoTask))
  display()
  clearForm()
}

function clearForm(){
  newTask.value = ''
}

function display(){
  var displayTask = "";
  for( i = 0 ; i < toDoTask.length ; i++){
    displayTask += `    
                <div class="taskbox rounded border border-secondary d-flex justify-content-between align-items-center mx-auto mt-4 pe-2 py-2">
                <div class="d-flex align-items-center justify-content-between mx-2">
                <span class="text-dark-emphasis fw-bold" id="toDoTask">${toDoTask[i].taskInfo}</span>
                </div>
                <button class="trash border border-2 bg-secondary-subtle border-white d-flex justify-content-center align-items-center rounded rounded-circle">
                <i class="fa-solid fa-trash" onclick="deleteForm(${i})"></i>
                </button>
                </div>`
  }
  taskContainer.innerHTML = displayTask
}

function deleteForm(i){
  toDoTask.splice(i,1)
  localStorage.setItem('allTask' , JSON.stringify(toDoTask))
  display()

}
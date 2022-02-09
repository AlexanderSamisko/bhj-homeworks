const taskInputBtn = document.querySelector("button.tasks__add");
const taskInput = document.querySelector("input.tasks__input");
let taskList = document.querySelector(`.tasks__list`);

let addTask = function(event) {
    event.preventDefault();
    let task = `<div class="task">
    <div class="task__title">
      ${taskInput.value}
    </div>
    <a href="#" class="task__remove">&times;</a>
  </div>`;
    taskList.insertAdjacentHTML('beforeend', task);
    localStorage.setItem(`taskList`, taskList.innerHTML);
}

let addTaskByKey = function(evt) {
    if (evt.code = 13){
        addTask();
    }
}


let removeTask = function(event) {
    if (event.target.classList.contains("task__remove")){
        let toRemove = event.target.closest(".task");
        toRemove.remove();
        localStorage.setItem(`taskList`, taskList.innerHTML);
    } 
}


taskInputBtn.addEventListener(`click`, addTask);
taskInput.addEventListener(`key up`, addTaskByKey);
taskList.addEventListener(`click`, removeTask)
document.addEventListener(`DOMContentLoaded`, function()  {
    if (localStorage['taskList']){
        taskList.innerHTML = localStorage['taskList'];
    }
});

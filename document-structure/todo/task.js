const taskInputBtn = document.querySelector("button.tasks__add");
const taskInput = document.querySelector("input.tasks__input");
let taskList = document.querySelector(`.tasks__list`);

let createTask = function(value) {
    let task = `<div class="task">
        <div class="task__title">
        ${value}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>`;
    return task
}

let setStorage = function() {
    let tasks = document.querySelectorAll(`.task__title`);
    let tasksArray = [...tasks];
    let tasksArrayTexts = {};
    for (let k = 0; k < tasksArray.length; k++) {
        tasksArrayTexts[k] = tasksArray[k].innerText;
    }
    localStorage.setItem(`taskList`, JSON.stringify(tasksArrayTexts));
}

let addTask = function() {
        let taskText = taskInput.value.trim();
        let task = createTask(taskText);
        taskList.insertAdjacentHTML('beforeEnd', task);
        setStorage();
        taskInput.value = ``;
}

let removeTask = function(event) {
    if (event.target.classList.contains("task__remove")){
        let toRemove = event.target.closest(".task");
        toRemove.remove();
        setStorage();
    } 
}


taskInputBtn.addEventListener(`click`, (evt) => {
    if (taskInput.checkValidity()) {
        evt.preventDefault();
        addTask();
    } else {
        taskInput.setAttribute("placeholder", "введите хотя бы намек на задачу");
    }});
taskList.addEventListener(`click`, removeTask)
document.addEventListener(`DOMContentLoaded`, function()  {
    if (localStorage['taskList']){
        let storage = JSON.parse(localStorage['taskList']);
            for ( let j = 0; j < Object.keys(storage).length; j++) {
                let task = createTask(storage[j]);
                taskList.insertAdjacentHTML('beforeEnd', task);
            }
        }
});

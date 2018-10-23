// VARS

const inputForm = document.querySelector('form');
const taskInput = document.getElementById('addInput');
const ul = document.getElementById("tasks");
const liElem = [...document.querySelectorAll(".task")];
// 

// tasks counter
const tasksCounter = document.querySelector(".tasksCounter span");
let counter = 0;
// 

// array update funcionality
const update = () => {
    liElem.forEach((item, index) => {
        item.id = index;
    })
}
// 

const removeTask = (e) => {

    liElem.forEach((item, index) => {
        if (liElem[index].id == e.target.parentNode.id) {
            liElem.splice(index, 1);
        }
    })
    e.target.parentNode.remove();
    tasksCounter.textContent = --counter;
}

const searchTask = () => {
    ul.textContent = "";
    const findInput = document.getElementById('findInput');
    const newLi = liElem.filter(task => {
        if (task.querySelector("div").textContent.toLowerCase().includes(findInput.value.toLowerCase())) {
            return task.textContent.toLowerCase().includes(findInput.value.toLowerCase())
        }
    })

    newLi.forEach(task => {
        ul.appendChild(task);
    })
};

// adding tasks
inputForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    if (taskInput.value === "") return;
    // task styling //appending
    const li = document.createElement("li");
    li.className = "task";

    const txt = document.createElement("div");
    txt.textContent = `${taskInput.value}`;

    const btn = document.createElement("button");
    btn.textContent = "delete";

    li.appendChild(txt);
    li.appendChild(btn);

    ul.appendChild(li);
    taskInput.value = "";
    liElem.push(li);
    tasksCounter.textContent = ++counter;
    update();
    // 
    // delete task funcionality
    const removeBtn = document.querySelectorAll(".task button");
    removeBtn.forEach(btn => {
        btn.addEventListener("click", removeTask);
    })
    // 
})

// searching for tasks

findInput.addEventListener("input", searchTask);
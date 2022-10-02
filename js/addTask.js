function initAddTask() {
    includeHTML();
    setURL('https://kevin-wagner.developerakademie.net/smallest_backend_ever');
    loadAllTasks();
}


let allTasks = [];


function addTask() {
    let taskTitle = document.getElementById('taskTitle').value;
    let taskDescription = document.getElementById('taskDescription').value;
    let taskCategory = document.getElementById('taskCategory').value;
    let taskAssignedTo = document.getElementById('taskAssignedTo').value;
    let taskDueDate = document.getElementById('taskDueDate').value;

    let task = {
        'title': taskTitle,
        'description': taskDescription,
        'category': taskCategory,
        'assigned': taskAssignedTo,
        'dueDate': taskDueDate,
        'createdAt': new Date().getTime()
    };

    allTasks.push(task);

    saveTasks();
};


function addTaskFromDialog() {
    let taskTitle = document.getElementById('taskTitle').value;
    let taskDescription = document.getElementById('taskDescription').value;
    let taskCategory = document.getElementById('taskCategory').value;
    let taskAssignedTo = document.getElementById('taskAssignedTo').value;
    let taskDueDate = document.getElementById('taskDueDate').value;

    let task = {
        'title': taskTitle,
        'description': taskDescription,
        'category': taskCategory,
        'assigned': taskAssignedTo,
        'dueDate': taskDueDate,
        'createdAt': new Date().getTime()
    };

    allTasks.push(task);
    
    renderTasks();
    saveTasks();

    console.log('allTasks', allTasks)
};


async function saveTasks() {
    await backend.setItem('allTasks', JSON.stringify(allTasks));
}


async function loadAllTasks() {
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];

    // renderTasks();
}


function renderTasks() {
    let taskContainer = document.getElementById('taskContainer');

    taskContainer.innerHTML = '';

    for (let i = 0; i < allTasks.length; i++) {
        taskContainer.innerHTML += /*html*/ `
            <div class="task">
                <div class="category-container">
                    <p>${allTasks[i].category}</p>
                </div>
                <div class="title-container">
                    <p>${allTasks[i].title}</p>
                </div>
                <div class="description-container">
                    <p>${allTasks[i].description}</p>
                </div>
                <div id="assigned-to" class="assigned-to-container">
                    ${allTasks[i].assigned}
                </div>
                <p onclick="deleteTask(${i})">Löschen</p>
            </div>
        `;

        colorOfAssigned(i);
    }
}
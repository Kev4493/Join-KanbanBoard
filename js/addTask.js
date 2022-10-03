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

    saveAllTasks();
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
    saveAllTasks();

    console.log('allTasks', allTasks)
};


async function saveAllTasks() {
    await backend.setItem('allTasks', JSON.stringify(allTasks));
}


async function loadAllTasks() {
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];
}
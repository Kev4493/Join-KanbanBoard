async function initAddTask() {
    includeHTML();
    setURL('https://kevin-wagner.developerakademie.net/smallest_backend_ever');
    await loadAllTasks();
}


let allTasks = [];
let currentTaskPrio;
let urgent = false;
let medium = false;
let low = false


async function addTask() {
    let taskTitle = document.getElementById('taskTitle').value;
    let taskDescription = document.getElementById('taskDescription').value;
    let taskCategory = document.getElementById('taskCategory').value;
    let taskAssignedTo = document.getElementById('taskAssignedTo').value;
    let taskDueDate = document.getElementById('taskDueDate').value;

    checkTaskPrio();

    let task = {
        'title': taskTitle,
        'description': taskDescription,
        'category': taskCategory,
        'assigned': taskAssignedTo,
        'dueDate': taskDueDate,
        'prio': currentTaskPrio,
        'id': new Date().getTime(),
        'status': 'todo',
    };

    allTasks.push(task);
    await saveAllTasks();
    window.location.href = '../html/board.html';
};


async function addTaskFromDialog() {
    let taskTitle = document.getElementById('taskTitle').value;
    let taskDescription = document.getElementById('taskDescription').value;
    let taskCategory = document.getElementById('taskCategory').value;
    let taskAssignedTo = document.getElementById('taskAssignedTo').value;
    let taskDueDate = document.getElementById('taskDueDate').value;

    checkTaskPrio();

    let task = {
        'title': taskTitle,
        'description': taskDescription,
        'category': taskCategory,
        'assigned': taskAssignedTo,
        'dueDate': taskDueDate,
        'prio': currentTaskPrio,
        'id': new Date().getTime(),
        'status': 'todo'
    };

    allTasks.push(task);
    
    renderTasks(); 
    await saveAllTasks();
    closeAddTaskDialog();

    console.log('allTasks', allTasks)
}


async function saveAllTasks() {
    await backend.setItem('allTasks', JSON.stringify(allTasks));
}


async function loadAllTasks() {
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];
}


function addUrgent() {
    let urgentButton = document.getElementById('urgent-button');
    let mediumButton = document.getElementById('medium-button');
    let lowButton = document.getElementById('low-button');

    urgentButton.classList.toggle('prio-button-active');
    mediumButton.classList.remove('prio-button-active');
    lowButton.classList.remove('prio-button-active');

    urgent = true;
    medium = false;
    low = false;
}


function addMedium() {
    let urgentButton = document.getElementById('urgent-button');
    let mediumButton = document.getElementById('medium-button');
    let lowButton = document.getElementById('low-button');

    urgentButton.classList.remove('prio-button-active');
    mediumButton.classList.toggle('prio-button-active');
    lowButton.classList.remove('prio-button-active');

    urgent = false;
    medium = true;
    low = false;
}


function addLow() {
    let urgentButton = document.getElementById('urgent-button');
    let mediumButton = document.getElementById('medium-button');
    let lowButton = document.getElementById('low-button');

    urgentButton.classList.remove('prio-button-active');
    mediumButton.classList.remove('prio-button-active');
    lowButton.classList.toggle('prio-button-active');

    urgent = false;
    medium = false;
    low = true;
}


async function deleteAllTasks() {
    await backend.deleteItem('allTasks');
}

function checkTaskPrio() {
    let urgentBtn = document.getElementById('urgent-button');
    let mediumBtn = document.getElementById('medium-button');
    let lowBtn = document.getElementById('low-button');

    let urgentBtnVal = urgentBtn.value;
    let mediumBtnVal = mediumBtn.value;
    let lowBtnVal = lowBtn.value;

    if (urgent == true) {
        currentTaskPrio = urgentBtnVal;
    } else{
        if (medium == true) {
            currentTaskPrio = mediumBtnVal;
        } else {
            if(low = true) {
                currentTaskPrio = lowBtnVal;
            }
        }
    }
}
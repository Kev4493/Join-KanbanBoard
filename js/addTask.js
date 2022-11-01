async function initAddTask() {
    includeHTML();
    // setURL('https://kevin-wagner.developerakademie.net/smallest_backend_ever');
    setURL('https://kanbanboard.kev-wagner.com/smallest_backend_ever');
    await loadAllTasks();
    activeAddTaskNavLink();
}


let allTasks = [];
let currentTaskPrio;

let urgent = false;
let medium = false;
let low = false


async function addTask() {
    let taskTitle = document.getElementById('taskTitle');
    let taskDescription = document.getElementById('taskDescription');
    let taskCategory = document.getElementById('taskCategory');
    let taskAssignedTo = document.getElementById('taskAssignedTo');
    let taskDueDate = document.getElementById('taskDueDate');

    checkTaskPrio();

    let task = {
        'title': taskTitle.value,
        'description': taskDescription.value,
        'category': taskCategory.value,
        'assigned': taskAssignedTo.value,
        'dueDate': taskDueDate.value,
        'prio': currentTaskPrio,
        'id': new Date().getTime(),
        'status': 'todo',
    };

    allTasks.push(task);
    await saveAllTasks();
    window.location.href = '../html/board.html';
};


async function addTaskFromDialog() {
    let taskTitle = document.getElementById('taskTitle');
    let taskDescription = document.getElementById('taskDescription');
    let taskCategory = document.getElementById('taskCategory');
    let taskAssignedTo = document.getElementById('taskAssignedTo');
    let taskDueDate = document.getElementById('taskDueDate');

    checkTaskPrio();

    let task = {
        'title': taskTitle.value,
        'description': taskDescription.value,
        'category': taskCategory.value,
        'assigned': taskAssignedTo.value,
        'dueDate': taskDueDate.value,
        'prio': currentTaskPrio.value,
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

    console.log(urgent);
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


function activeAddTaskNavLink() {
    document.getElementById('addtask-link').classList.add('active-link')
}


function editTask(id) {
    let taskDialog = document.getElementById('detail-task-dialog');
    
    taskDialog.innerHTML = renderEditTaskDialog();
}


function renderEditTaskDialog() {
    return /*html*/ `
        <form onsubmit="return false;">
        <img onclick="closeDetailTaskDialog()" class="close-icon-dialog" src="../assets/icons/close_icon.png" alt="">
            <div class="form-container-edit-task">
                <label for="title">Title</label>
                <input required id="taskTitle" class="add-task-inputfield" type="text" name="title"
                    placeholder="Enter a title"/>

                <label for="description">Description</label>
                <textarea required name="description" id="taskDescription" cols="30" rows="10"
                    placeholder="Enter a description"></textarea>

                <label for="dueDate">Due date</label>
                <input required class="add-task-inputfield" type="date" id="taskDueDate" name="dueDate">

                <label for="assigned">Assigned to</label>
                <select required class="add-task-inputfield" name="assigned" id="taskAssignedTo">
                    <option value="" disabled selected hidden>Select contacts to assign</option>
                    <option value="Kevin Wagner">Kevin Wagner</option>
                    <option value="Kristian Huptas">Kristian Huptas</option>
                </select>

                <div class="prio-button-container">
                    <h3 class="prio-button-headline">Prio</h3>
                    <div class="button-container">
                        <button type="button" onclick="addUrgent()" id="urgent-button" class="prio-button" value="urgent"><img
                            class="prio-button-icon" src="../assets/icons/urgent.png" alt="">Urgent</button>
                        <button type="button" onclick="addMedium()" id="medium-button" class="prio-button" value="medium"><img
                            class="prio-button-icon" src="../assets/icons/medium.png" alt="">Medium</button>
                        <button type="button" onclick="addLow()" id="low-button" class="prio-button" value="low"><img
                            class="prio-button-icon" src="../assets/icons/low.png" alt=""> Low</button>
                    </div>
                </div>

                <div class="submit-container-edit-task">
                    <button class="submit-button">Clear <img class="submit-button-icon" src="../assets/icons/cancel.png"
                        alt=""></button>
                    <button type="submit" class="submit-button create-task-button">Edit Task <img
                        class="submit-button-icon" src="../assets/icons/done.png" alt=""></button>
                </div>
            </div>
        </form>
    `;
}
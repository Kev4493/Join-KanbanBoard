function editTask(id) {
    let editTitle = document.getElementById('task-title-edit');
    let editDescription = document.getElementById('task-description-edit');
    let editDueDate = document.getElementById('task-duedate-edit');
    let editAssignedTo = document.getElementById('task-assigned-edit');

    checkEditTaskPrio();

    let editTask = {
        'title': editTitle.value,
        'description': editDescription.value,
        'dueDate': editDueDate.value,
        'assigned': editAssignedTo.value
    };

    updateCurrentTask(id, editTask);
}


async function updateCurrentTask(id, editTask) {
    allTasks[id]['title'] = editTask['title'];
    allTasks[id]['description'] = editTask['description'];
    allTasks[id]['dueDate'] = editTask['dueDate'];
    allTasks[id]['assigned'] = editTask['assigned'];
    allTasks[id]['prio'] = currentTaskPrio;

    
    await saveAllTasks();
    renderTasks();
    closeDetailTaskDialog();
}


function addUrgentEdit() {
    let urgentButton = document.getElementById('urgent-button-edit');
    let mediumButton = document.getElementById('medium-button-edit');
    let lowButton = document.getElementById('low-button-edit');

    urgentButton.classList.toggle('prio-button-active');
    mediumButton.classList.remove('prio-button-active');
    lowButton.classList.remove('prio-button-active');

    urgent = true;
    medium = false;
    low = false;
}


function addMediumEdit() {
    let urgentButton = document.getElementById('urgent-button-edit');
    let mediumButton = document.getElementById('medium-button-edit');
    let lowButton = document.getElementById('low-button-edit');

    urgentButton.classList.remove('prio-button-active');
    mediumButton.classList.toggle('prio-button-active');
    lowButton.classList.remove('prio-button-active');

    urgent = false;
    medium = true;
    low = false;
}


function addLowEdit() {
    let urgentButton = document.getElementById('urgent-button-edit');
    let mediumButton = document.getElementById('medium-button-edit');
    let lowButton = document.getElementById('low-button-edit');

    urgentButton.classList.remove('prio-button-active');
    mediumButton.classList.remove('prio-button-active');
    lowButton.classList.toggle('prio-button-active');

    urgent = false;
    medium = false;
    low = true;
}


function checkEditTaskPrio() {
    let urgentBtn = document.getElementById('urgent-button-edit');
    let mediumBtn = document.getElementById('medium-button-edit');
    let lowBtn = document.getElementById('low-button-edit');

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


function renderEditTaskDialog(id) {
    let taskDialog = document.getElementById('detail-task-dialog');

    taskDialog.innerHTML = /*html*/ `
        <form onsubmit="editTask(${id}); return false;">
        <img onclick="closeDetailTaskDialog()" class="close-icon-dialog" src="../assets/icons/close_icon.png" alt="">
            <div class="form-container-edit-task">

                <!-- === Title === -->
                <label for="title">Title</label>
                <input required id="task-title-edit" class="add-task-inputfield" type="text" name="title"
                    value="${allTasks[id]['title']}"/>

                <!-- === Description === -->
                <label for="description">Description</label>
                <textarea required name="description" id="task-description-edit" cols="30" rows="10">${allTasks[id]['description']}</textarea>

                <!-- === Due Date === -->
                <label for="dueDate">Due date</label>
                <input value="${allTasks[id]['dueDate']}" required class="add-task-inputfield" type="date" id="task-duedate-edit" name="dueDate">

                <!-- === Assigned To === -->
                <label for="assigned">Assigned to</label>
                <select required class="add-task-inputfield" name="assigned" id="task-assigned-edit">
                    <option value="" disabled selected hidden>${allTasks[id]['assigned']}</option>
                    <option value="Kevin Wagner">Kevin Wagner</option>
                    <option value="Kristian Huptas">Kristian Huptas</option>
                </select>

                <!-- === Prio Buttons === -->
                <div class="prio-button-container">
                    <h3 class="prio-button-headline">Prio</h3>
                    <div class="button-container">
                        <button type="button" onclick="addUrgentEdit()" id="urgent-button-edit" class="prio-button" value="urgent"><img
                            class="prio-button-icon" src="../assets/icons/urgent.png" alt="">Urgent</button>
                        <button type="button" onclick="addMediumEdit()" id="medium-button-edit" class="prio-button" value="medium"><img
                            class="prio-button-icon" src="../assets/icons/medium.png" alt="">Medium</button>
                        <button type="button" onclick="addLowEdit()" id="low-button-edit" class="prio-button" value="low"><img
                            class="prio-button-icon" src="../assets/icons/low.png" alt=""> Low</button>
                    </div>
                </div>

                <!-- === Submit Buttons === -->
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
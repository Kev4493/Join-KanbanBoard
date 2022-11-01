function editTask(id) {
    let taskDialog = document.getElementById('detail-task-dialog');
    taskDialog.innerHTML = renderEditTaskDialog(id);
}


function renderEditTaskDialog(id) {
    return /*html*/ `
        <form onsubmit="return false;">
        <img onclick="closeDetailTaskDialog()" class="close-icon-dialog" src="../assets/icons/close_icon.png" alt="">
            <div class="form-container-edit-task">
                <label for="title">Title</label>
                <input required id="taskTitle" class="add-task-inputfield" type="text" name="title"
                    value="${allTasks[id]['title']}"/>

                <label for="description">Description</label>
                <textarea required name="description" id="taskDescription" cols="30" rows="10">${allTasks[id]['description']}</textarea>

                <label for="dueDate">Due date</label>
                <input value="${allTasks[id]['dueDate']}" required class="add-task-inputfield" type="date" id="taskDueDate" name="dueDate">

                <label for="assigned">Assigned to</label>
                <select required class="add-task-inputfield" name="assigned" id="taskAssignedTo">
                    <option value="" disabled selected hidden>${allTasks[id]['assigned']}</option>
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
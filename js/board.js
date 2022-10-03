async function initBoard() {
    includeHTML();
    setURL('https://kevin-wagner.developerakademie.net/smallest_backend_ever');
    await loadAllTasks(); // Es wird gewartet bis alles geladen ist.
    renderTasks(); // Dann wird gerendert.
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
                <div class="card-footer">
                    <div id="assigned-to${i}" class="assigned-to-container">
                        ${allTasks[i].assigned}
                    </div>
                    <div class="prio-container">
                        
                    </div>
                </div>
                <div class="delete-container">
                    <img class="trash-icon" onclick="deleteTask(${i})" src="../assets/icons/trash.png" alt="">
                </div>
            </div>
        `;
        colorOfAssigned(i);
    }
}


function deleteTask(i) {
    allTasks.splice(i, 1);
    renderTasks();
    saveAllTasks();
};


function colorOfAssigned(i) {
    if (allTasks[i].assigned == 'KW') {
        document.getElementById(`assigned-to${i}`).classList.add('bg-color-lightblue');
    } else {
        if (allTasks[i].assigned == 'KH') {
            document.getElementById(`assigned-to${i}`).classList.add('bg-color-burlywood');
        }
    }
};


function openAddTaskDialog() {
    document.getElementById('add-task-dialog').classList.remove('d-none');
};


function closeAddTaskDialog() {
    document.getElementById('add-task-dialog').classList.add('d-none');
};
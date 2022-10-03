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
                <div id="assigned-to" class="assigned-to-container">
                    ${allTasks[i].assigned}
                </div>
                <p onclick="deleteTask(${i})">Löschen</p>
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
    if (allTasks[i].assigned == 'Kevin') {
        document.getElementById('assigned-to').classList.add('bg-color-red');
    } else {
        if (allTasks[i].assigned == 'Kristian') {
            document.getElementById('assigned-to').classList.add('bg-color-yellow');
        }
    }
};


function openAddTaskDialog() {
    document.getElementById('add-task-dialog').classList.remove('d-none');
};


function closeAddTaskDialog() {
    document.getElementById('add-task-dialog').classList.add('d-none');
};
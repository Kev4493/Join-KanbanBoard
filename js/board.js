function openAddTaskDialog() {
    document.getElementById('add-task-dialog').classList.remove('d-none');
};


function closeAddTaskDialog() {
    document.getElementById('add-task-dialog').classList.add('d-none');
};


async function loadAllTasks() {
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];

    renderTasks();
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
            <p onclick="deleteTask(${i})">Löschen</p>
        </div>
    `;
    }
}


function deleteTask(i) {
    allTasks.splice(i, 1);
    renderTasks();
    saveTasks();
}
async function initBoard() {
    includeHTML();
    // setURL('https://kevin-wagner.developerakademie.net/smallest_backend_ever');
    setURL('https://kanbanboard.kev-wagner.com/smallest_backend_ever');
    await loadAllTasks(); // Es wird gewartet bis alles geladen ist.
    renderTasks(); // Dann wird gerendert.
    activeBoardNavLink();
}


function renderTasks() {
    let toDoCategory = allTasks.filter(t => t['status'] == 'todo');
    let toDoContainer = document.getElementById('todo-container');
    toDoContainer.innerHTML = '';

    for (let i = 0; i < toDoCategory.length; i++) {
        const task = toDoCategory[i];
        toDoContainer.innerHTML += generateTaskHtml(i, task, 'todo');
    }


    let inProgressCategory = allTasks.filter(t => t['status'] == 'in-progress');
    let inProgressContainer = document.getElementById('in-progress-container');
    inProgressContainer.innerHTML = '';

    for (let i = 0; i < inProgressCategory.length; i++) {
        const task = inProgressCategory[i];
        inProgressContainer.innerHTML += generateTaskHtml(i, task, 'in-progress');
    }


    let awaitingFeedbackCategory = allTasks.filter(t => t['status'] == 'awaiting-feedback');
    let awaitingFeedbackContainer = document.getElementById('awaiting-feedback-container');
    awaitingFeedbackContainer.innerHTML = '';

    for (let i = 0; i < awaitingFeedbackCategory.length; i++) {
        const task = awaitingFeedbackCategory[i];
        awaitingFeedbackContainer.innerHTML += generateTaskHtml(i, task, 'awaiting-feedback');
    }


    let doneCategory = allTasks.filter(t => t['status'] == 'done');
    let doneContainer = document.getElementById('done-container');
    doneContainer.innerHTML = '';

    for (let i = 0; i < doneCategory.length; i++) {
        const task = doneCategory[i];
        doneContainer.innerHTML += generateTaskHtml(i, task, 'done');
    }
}


function generateTaskHtml(i, task) {

    return /*html*/ `
        <div draggable="true" ondragstart="startDragging(${task['id']})" class="task">
            <div id="category-container${i}" class="category-container ${task['category']}">
                <p title="Category">${task['category']}</p>
            </div>
            <div class="title-container">
                <p title="Title">${task['title']}</p>
            </div>
            <div class="description-container">
                <p title="Description">${task['description']}</p>
            </div>
            <div class="card-footer">
                <div id="assigned-to-container${i}" class="assigned-to-container ${task['assigned']}" title="Assigned to: ${task['assigned']}">
                    <!-- Mit folgender Syntax, lassen sich die Anfangsbuchstaben von einem String anzeigen: -->
                    ${task['assigned'].split(" ").map(word => word[0]).join("")}
                </div>
                <div id="prio-container${i}">
                    <img src="../assets/icons/${task['prio']}.png" alt="" title="Priority: ${task['prio']}">
                </div>
            </div>
            <div class="delete-container">
                <img class="trash-icon" onclick="deleteTask(${task.id})" src="../assets/icons/trash.png" alt="" title="Delete complete Task">
            </div>
        </div>
    `;
}


// === Drag and Drop: ===

let currentDraggedElement;

function startDragging(task) {
    currentDraggedElement = task;
}


async function moveTo(containerType) {
    let array = allTasks.find(t => t.id === currentDraggedElement)
    array['status'] = containerType;

    renderTasks();
    await saveAllTasks();
}


function allowDrop(ev) {
    ev.preventDefault(); // Das Standartverhalten des DIV Containers wird damit so verändert, dass man Elemente dort hineinwerfen kann.
}


// === === === === === ===



// Diese Funktion nochmal erklären lassen.. 
async function deleteTask(foo) {
    let id;
    allTasks.forEach((t, index) => {
        if(t.id === foo) id = index;
    });

    allTasks.splice(id, 1);
    renderTasks();
    await saveAllTasks();
}


function openAddTaskDialog() {
    document.getElementById('add-task-dialog').classList.remove('d-none');
};


function closeAddTaskDialog() {
    document.getElementById('add-task-dialog').classList.add('d-none');
};


function activeBoardNavLink() {
    document.getElementById('board-link').classList.add('active-link')
};


function searchTask() {
    let search = document.getElementById('search').value
    search = search.toLowerCase();

    let toDoCategory = allTasks.filter(t => t['status'] == 'todo');
    let toDoContainer = document.getElementById('todo-container');
    toDoContainer.innerHTML = '';

    for (let i = 0; i < toDoCategory.length; i++) {
        const task = toDoCategory[i];
        if(task.title.toLowerCase().includes(search)) {
            toDoContainer.innerHTML += generateTaskHtml(i, task, 'todo');
        }
    }


    let inProgressCategory = allTasks.filter(t => t['status'] == 'in-progress');
    let inProgressContainer = document.getElementById('in-progress-container');
    inProgressContainer.innerHTML = '';

    for (let i = 0; i < inProgressCategory.length; i++) {
        const task = inProgressCategory[i];
        if(task.title.toLowerCase().includes(search)) {
            inProgressContainer.innerHTML += generateTaskHtml(i, task, 'in-progress');
        }
    }


    let awaitingFeedbackCategory = allTasks.filter(t => t['status'] == 'awaiting-feedback');
    let awaitingFeedbackContainer = document.getElementById('awaiting-feedback-container');
    awaitingFeedbackContainer.innerHTML = '';

    for (let i = 0; i < awaitingFeedbackCategory.length; i++) {
        const task = awaitingFeedbackCategory[i];
        if(task.title.toLowerCase().includes(search)) {
            awaitingFeedbackContainer.innerHTML += generateTaskHtml(i, task, 'awaiting-feedback');
        }
    }


    let doneCategory = allTasks.filter(t => t['status'] == 'done');
    let doneContainer = document.getElementById('done-container');
    doneContainer.innerHTML = '';

    for (let i = 0; i < doneCategory.length; i++) {
        const task = doneCategory[i];
        if(task.title.toLowerCase().includes(search)) {
            doneContainer.innerHTML += generateTaskHtml(i, task, 'done');
        }
    }
}














async function initBoard() {
    includeHTML();
    setURL('https://kevin-wagner.developerakademie.net/smallest_backend_ever');
    await loadAllTasks(); // Es wird gewartet bis alles geladen ist.
    renderTasks(); // Dann wird gerendert.
}


function renderTasks() {
    // let containerType = allTasks.filter(t => t['category-container'] == 'todo-container');

    let toDoContainer = document.getElementById('todo-container');

    toDoContainer.innerHTML = '';

    for (let i = 0; i < allTasks.length; i++) {

        toDoContainer.innerHTML += /*html*/ `
            <div draggable="true" ondragstart="startDragging(${i})" class="task">
                <div id="category-container${i}" class="category-container">
                    <p>${allTasks[i].category}</p>
                </div>
                <div class="title-container">
                    <p>${allTasks[i].title}</p>
                </div>
                <div class="description-container">
                    <p>${allTasks[i].description}</p>
                </div>
                <div class="card-footer">
                    <div id="assigned-to-container${i}" class="assigned-to-container" title="${allTasks[i].assigned}">
                        <!-- Mit folgender Syntax, lassen sich die Anfangsbuchstaben von einem String anzeigen: -->
                        ${allTasks[i].assigned.split(" ").map(word => word[0]).join("")}
                    </div>
                    <div class="prio-container"></div>
                </div>
                <div class="delete-container">
                    <img class="trash-icon" onclick="deleteTask(${i})" src="../assets/icons/trash.png" alt="" title="Delete complete Task">
                </div>
            </div>
        `;

        addColorOfCategory(i);
        addColorOfAssigned(i);
    }
}

// === Drag and Drop: ===

let currentDraggedElement;

function startDragging(i) {
    currentDraggedElement = i;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function moveTo(containerType) {
    allTasks[currentDraggedElement]['category-container'] = containerType;
    renderTasks();
}
// === === === ===


function addColorOfCategory(i) {
    if (allTasks[i].category == 'Sales') {
        document.getElementById(`category-container${i}`).classList.add('bg-color-lightcoral');
    } else {
        if (allTasks[i].category == 'Marketing') {
            document.getElementById(`category-container${i}`).classList.add('bg-color-cornflowerblue');
        } else {
            if (allTasks[i].category == 'Design') {
                document.getElementById(`category-container${i}`).classList.add('bg-color-khaki');
            } else {
                if (allTasks[i].category == 'Software-Development') {
                    document.getElementById(`category-container${i}`).classList.add('bg-color-lightgreen');
                }
            }
        }
    }
}


function addColorOfAssigned(i) {
    if (allTasks[i].assigned == 'Kevin Wagner') {
        document.getElementById(`assigned-to-container${i}`).classList.add('bg-color-lightblue');
    } else {
        if (allTasks[i].assigned == 'Kristian Huptas') {
            document.getElementById(`assigned-to-container${i}`).classList.add('bg-color-burlywood');
        }
    }
};


async function deleteTask(i) {
    allTasks.splice(i, 1);
    renderTasks();
    await saveAllTasks();
};


function openAddTaskDialog() {
    document.getElementById('add-task-dialog').classList.remove('d-none');
};


function closeAddTaskDialog() {
    document.getElementById('add-task-dialog').classList.add('d-none');
};